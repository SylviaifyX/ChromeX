import videoSrc from "../assets/2c2a24c5-29f6-4c26-963c-e36a42b9b73f.webm";

function VideoPlayer() {
  return (
    <div>
      {/* <video src={videoSrc} autoPlay></video> */}
      <figure id="videoContainer">
        <video id="video" controls autoPlay>
          <source src={videoSrc} type="video/webm" />
        </video>
        <figcaption>
          &copy; Blender Foundation |
          <a href="http://mango.blender.org">mango.blender.org</a>
        </figcaption>
      </figure>
    </div>
  );
}

export default VideoPlayer;
