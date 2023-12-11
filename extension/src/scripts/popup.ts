(() => {
  type RecordState = {
    currentTab: boolean;
    camera: boolean;
    audio: boolean;
  };

  const closeBtn = document.getElementById("close") as HTMLButtonElement;
  const recordBtn = document.getElementById(
    "startRecording"
  ) as HTMLButtonElement;
  const tabs: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll("[data-tab]");
  const toggleBtns: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".switch");

  let recordState: RecordState = {
    currentTab: true,
    camera: true,
    audio: true,
  };

  chrome.storage.local.get(["recordState"]).then((result) => {
    if (Object.keys(result).length === 3) recordState = result.recordState;
    recordState.currentTab
      ? tabs[1].classList.add("active")
      : tabs[0].classList.add("active");
    recordState.camera && toggleBtns[0].classList.add("active");
    recordState.audio && toggleBtns[1].classList.add("active");
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("active");
      });
      tab.classList.add("active");
      if (tab.dataset.tab === "window") {
        recordState.currentTab = false;
      } else {
        recordState.currentTab = true;
      }
    });
  });

  toggleBtns[0].addEventListener("click", (e) => {
    e.currentTarget &&
      e.currentTarget instanceof HTMLButtonElement &&
      e.currentTarget.classList.toggle("active");
    recordState.camera = !recordState.camera;
  });

  toggleBtns[1].addEventListener("click", (e) => {
    e.currentTarget &&
      e.currentTarget instanceof HTMLButtonElement &&
      e.currentTarget.classList.toggle("active");
    recordState.audio = !recordState.audio;
  });

  closeBtn.addEventListener("click", () => {
    window.close();
  });

  recordBtn.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });

    if (tab.id && typeof tab.id === "number") {
      if (recordState.currentTab === true) {
        const tabId = tab.id;
        chrome.tabCapture.getMediaStreamId(
          { consumerTabId: tab.id },
          (streamId) => {
            chrome.tabs.sendMessage(tabId, {
              message: {
                type: "start_recording",
                isCurrentTab: recordState.currentTab,
                camera: recordState.camera,
                microphone: recordState.audio,
                streamId,
              },
            });
          }
        );
      } else {
        chrome.tabs.sendMessage(tab.id, {
          message: {
            type: "start_recording",
            isCurrentTab: recordState.currentTab,
            camera: recordState.camera,
            microphone: recordState.audio,
          },
        });
      }
      chrome.storage.local.set({ recordState });
      window.close();
    }
  });
})();
