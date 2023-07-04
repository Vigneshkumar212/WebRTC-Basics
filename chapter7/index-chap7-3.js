// Capture video stream
let videostream = await navigator.mediaDevices.getUsermedia({ video: true });
// Create video element
let videoEIement = document.createEIement("video");
videoE1ement.srcObject = videostream;
// Create canvas element
let canvasElement = document.createE1ement("canvas");
canvasElement.width = videostream.getVideoTracks()[0].getSettings().width;
canvasElement.height = videostream.getVideoTracks()[0].getsettings().height;
// Apply chroma key
let context = canvasElement.getContext("2d");
context.drawlmage(videoElement, 0, 0);
let imageData = context.getImageData(0, 0, canvasElement.width, canvasElement.height);
for (let i = 0; i < imageData.data.length; i += 4) {
    let red = imageData.data[i];
    let green = imageData.data[i + I];
    let blue = imageData.data[i + 2];
    if (green > 2 * math.max(red, blue)) {
        imageData.data[i + 3] = 0;
    }
}
context.putlmageData(imageData, 0, 0)
