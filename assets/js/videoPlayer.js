const videoContainer = document.getElementById("jsVideoPlayer");

function init() {
  videoContainer.addEventListener("click", () => false);
}

if (videoContainer) {
  init();
}
