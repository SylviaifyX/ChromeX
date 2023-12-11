interface MediaTrackConstraints {
  mandatory?: {
    chromeMediaSource: string;
    chromeMediaSourceId: string;
  };
}

interface DisplayMediaStreamOptions {
  selfBrowserSurface?: "include" | "exclude";
}

function main() {
  let url: string;
  let last_chunk = 0;
  const base_api_url = "http://localhost:4000/api/v1/videos";
  let tracks: MediaStreamTrack[] = [];

  const getStream = async (streamId?: string) => {
    let media: MediaStream | undefined;
    let webcam: MediaStream | undefined;
    if (streamId) {
      const config: MediaStreamConstraints = {
        video: {
          mandatory: {
            chromeMediaSource: "tab",
            chromeMediaSourceId: streamId,
          },
        },
        audio: {
          mandatory: {
            chromeMediaSource: "tab",
            chromeMediaSourceId: streamId,
          },
        },
      };

      const cam_and_mic_stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          sampleSize: 44100,
          echoCancellation: true,
        },
        video: true,
      });

      const screen_and_speaker_stream =
        await navigator.mediaDevices.getUserMedia(config);

      const audioCtx = new AudioContext();
      const destination = audioCtx.createMediaStreamDestination();
      const source1 = audioCtx.createMediaStreamSource(cam_and_mic_stream);
      source1.connect(destination);

      const speaker_audio_track = screen_and_speaker_stream.getAudioTracks()[0];
      if (speaker_audio_track) {
        screen_and_speaker_stream.removeTrack(speaker_audio_track);
        tracks.push(speaker_audio_track);
        const source2 = audioCtx.createMediaStreamSource(
          new MediaStream([speaker_audio_track])
        );
        source2.connect(destination);
      }
      const mixedAudio = destination.stream;

      media = new MediaStream([...screen_and_speaker_stream.getVideoTracks()]);
      media.addTrack(mixedAudio.getAudioTracks()[0]);
      webcam = cam_and_mic_stream;

      tracks = [
        ...tracks,
        ...screen_and_speaker_stream.getTracks(),
        ...cam_and_mic_stream.getTracks(),
        ...mixedAudio.getTracks(),
      ];
    } else {
      const screen_and_speaker_stream =
        await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: true,
          selfBrowserSurface: "include",
        });

      screen_and_speaker_stream.getTracks().forEach((track) => {
        track.onended = () => {
          stopTracks();
          const element = document.querySelector(
            "#helpmeout_recoreder_controls"
          );
          if (element instanceof HTMLDivElement) {
            document.body.removeChild(element);
          }
        };
      });

      const cam_and_mic_stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          sampleSize: 44100,
          echoCancellation: true,
        },
        video: true,
      });

      const audioCtx = new AudioContext();
      const destination = audioCtx.createMediaStreamDestination();
      const source1 = audioCtx.createMediaStreamSource(cam_and_mic_stream);
      source1.connect(destination);

      const speaker_audio_track = screen_and_speaker_stream.getAudioTracks()[0];
      if (speaker_audio_track) {
        screen_and_speaker_stream.removeTrack(speaker_audio_track);
        tracks.push(speaker_audio_track);
        const source2 = audioCtx.createMediaStreamSource(
          new MediaStream([speaker_audio_track])
        );
        source2.connect(destination);
      }
      const mixedAudio = destination.stream;
      media = new MediaStream([...screen_and_speaker_stream.getVideoTracks()]);
      media.addTrack(mixedAudio.getAudioTracks()[0]);
      webcam = cam_and_mic_stream;

      tracks = [
        ...tracks,
        ...screen_and_speaker_stream.getTracks(),
        ...cam_and_mic_stream.getTracks(),
        ...mixedAudio.getTracks(),
      ];
    }
    return { media, webcam };
  };

  const createRecorder = (
    stream: MediaStream,
    camera: boolean,
    microphone: boolean,
    webcam: MediaStream
  ) => {
    let recordedChuncks: Blob[] = [];
    const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
    mediaRecorder.ondataavailable = async (e) => {
      if (e.data.size > 0) {
        recordedChuncks.push(e.data);
        // up to 500kb
        if (size(recordedChuncks) > 512000 * 0.75) {
          sendChunk(recordedChuncks, last_chunk + 1);
          recordedChuncks = [];
        }
      }
    };

    mediaRecorder.onstop = async () => {
      stopTracks();
      await sendChunk(recordedChuncks, last_chunk + 1, true);
      window.open(`${base_api_url}/watch/${url}`, "_blank");
    };

    mediaRecorder.start(200);

    initControls(mediaRecorder, { stream: webcam, camera, microphone });
  };

  const startRecording = async (
    camera: boolean,
    microphone: boolean,
    streamId?: string
  ) => {
    try {
      const success = await requesUploadtUrl();
      if (!success) {
        return new Error("can't start streaming");
      }
      const { media, webcam } = await getStream(streamId);
      if (media instanceof MediaStream) {
        createRecorder(media, camera, microphone, webcam as MediaStream);
      }
    } catch (error) {
      console.error(error);
    }
  };

  chrome.runtime.onMessage.addListener((request) => {
    if (request.message.type === "start_recording") {
      const {
        isCurrentTab,
        camera,
        microphone,
        streamId,
      }: {
        isCurrentTab: boolean;
        camera: boolean;
        microphone: boolean;
        streamId: string | undefined;
      } = request.message;
      if (isCurrentTab && streamId) {
        startRecording(camera, microphone, streamId);
      } else {
        startRecording(camera, microphone);
      }
    }
  });

  const size = (arr: Blob[]) =>
    arr.reduce((prev, current) => prev + current.size, 0);

  const sendChunk = async (
    chunk: Blob[],
    nextBlock: number,
    isLastChunck?: boolean
  ) => {
    try {
      const blob = new Blob(chunk, {
        type: "video/webm;codec=vp9",
      });
      const formData = new FormData();
      formData.append("file", blob);
      formData.append("nextBlock", `${nextBlock}`);
      if (isLastChunck) {
        formData.append("isLastBlock", "1");
      }

      const res = await fetch(`${base_api_url}/upload/${url}`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        last_chunk = data.last_chunk;
        if (data.completed === true) {
          last_chunk = 0;
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const requesUploadtUrl = async (): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(`${base_api_url}/create-file-upload-link`);
      const data = await response.json();

      if (data.success && data.link) {
        url = data.link;
        resolve(true);
      } else {
        reject(false);
      }
    });
  };

  function initControls(
    recorder: MediaRecorder,
    {
      stream,
      camera,
      microphone,
    }: { stream: MediaStream; camera: boolean; microphone: boolean }
  ) {
    if (!document.querySelector("#helpmeout_recoreder_controls")) {
      const div = document.createElement("div");
      div.setAttribute(
        "class",
        "fixed bottom-4 left-0 z-50 bg-transparent pl-10 flex items-center group h-[7rem]"
      );
      div.setAttribute("id", "helpmeout_recoreder_controls");
      div.innerHTML = `<div
class="overflow-hidden bg-[#efefef] w-[7rem] aspect-square rounded-full mr-6 col-span-3 border-solid border-2 border-[#B6B6B6] group-[.hide]:hidden cursor-move"
>
<video
id="video"
muted
autoplay
class="aspect-square h-full rounded-full scale-[1.4]"
></video>
</div>

<div
class="border-solid border-4 border-[#9a9a9a] bg-[#141414] h-[4.25rem] w-[26rem] flex col-span-8 rounded-full pr-5 pt-2 pb-2 pl-6 cursor-move"
>
<div
class="h-9 w-[7rem] flex items-center justify-center border-r-2 border-r-solid border-r-white"
>
<p class="text-sm text-white font-medium" id="timer">00:00:00</p>
<div class="relative ml-4 w-[20px] h-5">
<div 
  id="indicator"
  class="absolute w-4 h-4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 aspect-auto rounded-full z-50 bg-[#c00404] animate-pulse"
></div>
</div>
</div>
<!-- controls -->
<div class="flex flex-col items-center gap-1 ml-3">
<button
id="pause"
class="m-0 bg-white h-8 aspect-square rounded-full grid place-items-center hover:bg-gray-400 cursor-pointer"
>
<img alt="" class="h-3" src="${chrome.runtime.getURL("assets/pause.png")}" />
</button>
<p class="mt-0 leading-none text-white text-[12px]">Pause</p>
</div>
<div class="flex flex-col items-center gap-1 ml-3">
<button
id="stop"
class="m-0 bg-white h-8 aspect-square rounded-full grid place-items-center hover:bg-gray-400 cursor-pointer"
>
<img alt="" class="w-4" src="${chrome.runtime.getURL("assets/stop.png")}" />
</button>
<p class="mt-0 leading-none text-white text-[12px]">Stop</p>
</div>
<div class="flex flex-col items-center gap-1 ml-3">
<button
id="camera"
class="m-0 bg-white h-8 aspect-square rounded-full grid place-items-center hover:bg-gray-400 cursor-pointer"
>
<img alt="" class="w-4" src="${chrome.runtime.getURL("assets/camera.png")}"  />
</button>
<p class="mt-0 leading-none text-white text-[12px]">Camera</p>
</div>
<div class="flex flex-col items-center gap-1 ml-3">
<button
id="microphone"
class="m-0 bg-white h-8 aspect-square rounded-full grid place-items-center hover:bg-gray-400 cursor-pointer"
>
<img alt="" class="w-4" src="${chrome.runtime.getURL(
        "assets/microphone.png"
      )}"  />
</button>
<p class="mt-0 leading-none text-white text-[12px]">Mic</p>
</div>

<button
id="delete"
class="aspect-square h-8 rounded-full ml-5 grid place-items-center bg-[#4B4B4B] hover:bg-gray-400 cursor-pointer"
>
<img src="${chrome.runtime.getURL("assets/trash.png")}"  alt="" class="w-4" />
</button>
</div>`;

      function counter(elem: HTMLElement, interval = 1000) {
        var count = 0;
        var intervalID: number | undefined = undefined;

        function formatDuration(duration: number) {
          if (typeof duration !== "number" || duration < 0) return;
          const dd = (d: number) => (d.toString().length == 2 ? d : `0${d}`);
          const hours = Math.floor(duration / 3600);
          const minutes = Math.floor((duration - hours * 3600) / 60);
          const seconds = duration - hours * 3600 - minutes * 60;
          return `${dd(hours)}:${dd(minutes)}:${dd(seconds)}`;
        }
        function updateCounter(elnmt: HTMLElement, text: string) {
          elnmt.textContent = text;
        }
        function stop() {
          window.clearInterval(intervalID);
          intervalID = undefined;
        }
        function start() {
          if (!intervalID) {
            intervalID = window.setInterval(() => {
              count++;
              updateCounter(elem, formatDuration(count) || "");
            }, interval);
          }
        }
        function reset() {
          count = 0;
        }
        return {
          start,
          stop,
          reset,
        };
      }

      const videoElem: HTMLVideoElement = div.querySelector("#video")!;
      const pauseBtn = div.querySelector("#pause");
      const stopBtn = div.querySelector("#stop");
      const cameraBtn = div.querySelector("#camera");
      const microphoneBtn = div.querySelector("#microphone");
      const timerDiv: HTMLElement = div.querySelector("#timer")!;
      const indicator: HTMLDivElement = div.querySelector("#indicator")!;
      const timer = counter(timerDiv, 1000);

      stream.getVideoTracks()[0].enabled = camera;
      stream.getAudioTracks()[0].enabled = microphone;
      videoElem.srcObject = stream;
      const styleList = [
        "before:absolute",
        "before:w-[2px]",
        "before:bg-[#646464]",
        "before:h-6",
        "before:rotate-45",
      ];

      !camera && styleList.forEach((style) => cameraBtn?.classList.add(style));

      !microphone &&
        styleList.forEach((style) => microphoneBtn?.classList.add(style));

      stopBtn instanceof HTMLButtonElement &&
        stopBtn.addEventListener("click", endRecording);

      pauseBtn instanceof HTMLButtonElement &&
        pauseBtn.addEventListener("click", pausePlay);

      microphoneBtn instanceof HTMLButtonElement &&
        microphoneBtn.addEventListener("click", toggleMicrophone);

      cameraBtn instanceof HTMLButtonElement &&
        cameraBtn.addEventListener("click", toggleCamera);

      function pausePlay(e: MouseEvent) {
        const btn = e.currentTarget as HTMLButtonElement;
        const img = btn.children[0] as HTMLImageElement;
        if (recorder.state === "recording") {
          recorder.pause();
          timer.stop();
          img.src = chrome.runtime.getURL("assets/play.svg");
        } else {
          recorder.resume();
          timer.start();
          img.src = chrome.runtime.getURL("assets/pause.png");
        }
        if (recorder.state === "paused") {
          indicator.classList.contains("animate-pulse") &&
            indicator.classList.remove("animate-pulse");
          indicator.classList.contains("bg-[#c00404]") &&
            indicator.classList.remove("bg-[#c00404]");
          !indicator.classList.contains("bg-[#797979]") &&
            indicator.classList.add("bg-[#797979]");
        } else {
          !indicator.classList.contains("animate-pulse") &&
            indicator.classList.add("animate-pulse");
          indicator.classList.contains("bg-[#797979]") &&
            indicator.classList.remove("bg-[#797979]");
          !indicator.classList.contains("bg-[#c00404]") &&
            indicator.classList.add("bg-[#c00404]");
        }
      }

      function endRecording() {
        recorder.stop();
        timer.stop();
        document.body.removeChild(div);
      }

      function toggleCamera() {
        stream.getVideoTracks()[0].enabled =
          !stream.getVideoTracks()[0].enabled;
        if (stream.getVideoTracks()[0].enabled) {
          styleList.forEach(
            (style) =>
              cameraBtn?.classList.contains(style) &&
              cameraBtn?.classList.remove(style)
          );
        } else if (!stream.getVideoTracks()[0].enabled) {
          styleList.forEach(
            (style) =>
              !cameraBtn?.classList.contains(style) &&
              cameraBtn?.classList.add(style)
          );
        }
        webCamDisplay(stream.getVideoTracks()[0].enabled, div);
      }

      function toggleMicrophone() {
        stream.getAudioTracks()[0].enabled =
          !stream.getAudioTracks()[0].enabled;
        if (stream.getAudioTracks()[0].enabled) {
          styleList.forEach(
            (style) =>
              microphoneBtn?.classList.contains(style) &&
              microphoneBtn?.classList.remove(style)
          );
        } else if (!stream.getAudioTracks()[0].enabled) {
          styleList.forEach(
            (style) =>
              !microphoneBtn?.classList.contains(style) &&
              microphoneBtn?.classList.add(style)
          );
        }
      }

      webCamDisplay(stream.getVideoTracks()[0].enabled, div);
      dragElement(div);
      timer.start();
      document.body.appendChild(div);
    }
  }

  function webCamDisplay(condition: boolean, element: HTMLDivElement) {
    if (condition) {
      element.classList.contains("hide") && element.classList.remove("hide");
    } else {
      !element.classList.contains("hide") && element.classList.add("hide");
    }
  }

  function dragElement(elmnt: HTMLElement) {
    var posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

    elmnt.addEventListener("mousedown", dragMouseDown);

    function dragMouseDown(e: MouseEvent) {
      e.preventDefault();
      mouseX = e.clientX;
      mouseY = e.clientY;
      window.addEventListener("mousemove", elementDrag);
      window.addEventListener("mouseup", closeDragElement);
    }

    function elementDrag(e: MouseEvent) {
      e.preventDefault();
      posX = mouseX - e.clientX;
      posY = mouseY - e.clientY;
      mouseX = e.clientX;
      mouseY = e.clientY;
      elmnt.style.top = elmnt.offsetTop - posY + "px";
      elmnt.style.left = elmnt.offsetLeft - posX + "px";
    }

    function closeDragElement() {
      window.removeEventListener("mousemove", elementDrag, false);
      window.removeEventListener("mouseup", closeDragElement, false);
    }
  }

  function stopTracks() {
    tracks.length && tracks.forEach((track) => track.stop());
    tracks = [];
  }
}

main();
