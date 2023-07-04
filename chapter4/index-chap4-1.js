const constraints = { video: true, audio: true };
navigator.mediaDevices.getUserMedia(constraints).then(stream => {
    // stream contains the local video and audio streams
    // you can display the local video stream in the local video element like this:
    const localVideo = document.getE1ementById('localVideo');
    localVideo.srcObject = stream;
}).catch(error => {
    console.error(' getUserMedia error: ', error)
});