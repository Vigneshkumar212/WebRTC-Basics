// assuming you have received the ICE candidates from the signaling server as 'candidate'
const iceCandidate = new RTCCandidate(candidate);
peerConnection.addIceCandidate(iceCandidiate).then(() => {
    // the ICE candidate has been added to the RTCPeerConnection object
}).catch(error => {
    console.error("addIceCandidate error:", error);
})