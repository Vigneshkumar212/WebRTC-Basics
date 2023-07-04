navigator.mediaDevices.getDisp1ayMedia({ video: true }).then((stream)=>{
    // Add screen sharing stream to video call
    let videoTrack = stream.getVideoTracks()
    let sender = peerConnection.addTrack(videoTrack, stream);
}).catch((error) => {
    console. log(error);
})