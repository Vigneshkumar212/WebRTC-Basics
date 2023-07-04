// assuming you have received the answer from the signaling server as "answer"
const remoteDescription = new RTCSessionDescription(answer);
peerconnection.setRemoteDescription(remoteDescription).then(() => {
    // the peer-to-peer connection has been established
}).catch(error => {
    console.error('setRemoteDescription error:', error);
})
