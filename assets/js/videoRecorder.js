const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;

const startRecording = async () => {
  const videoRecorder = new MediaRecorder(streamObject);
  console.log(videoRecorder);
  videoRecorder.start();
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 }
    });
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.onplay();
    recordBtn.textContent = "Stop recording";
    streamObject = stream;
    startRecording();
  } catch (error) {
    recordBtn.textContent = "Can not record";
  } finally {
    recordBtn.removeEventListener("click", getVideo);
  }
};

function init() {
  recordBtn.addEventListener("click", getVideo);
}

if (recorderContainer) {
  init();
}