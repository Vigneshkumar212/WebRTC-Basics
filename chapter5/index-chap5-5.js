// create peer connections for both peers
const peerA = new RTCPeerconnection();
const peerB = new RTCPeerConnection();


// add event listeners for ICE candidates on both peers
peerA.addEventListener("icecandidate", e => {
    if (e.candidate) {
        console.log(e)
        peerB.addIceCandidate(e.candidate).catch(error => {
            console.log('Failed to add ICE candidate to peer B:', error);
        })
    }
})
peerB.addEventListener("icecandidate", e => {
    if (e.candidate) {
        console.log(e)
        peerA.addIceCandidate(e.candidate).catch(error => {
            console.log('Failed to add ICE candidate to peer A:', error);
        })
    }
})

// Add local media stream to peer A
navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
    stream.getTracks().forEach(track => {
        peerA.addTrack(track, stream);
    })
});
