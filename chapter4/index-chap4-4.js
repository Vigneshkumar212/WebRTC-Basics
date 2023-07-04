stream.getTracks().forEach(track => {
    peerConnection.addTrack(track, stream);
});