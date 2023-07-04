// assuming you have received the offer from the signaling server as "offer"
const remoteDescription = new RTCSessionDescription(offer);
peerConnection.setRemoteDescription(remoteDescription).then(() => {
    return peerConnection.createAnswer();
}).then(answer => {
    // set the local description of the RTCPeerConnection object
    return peerConnection.setLocalDescription(answer);
}).then(() => {
    // the answer has been created and set as the local description
    // you can now send the answer to the remote user using a signaling server
}).catch(error =>{
    console.error('setRemoteDescription error:' ,error) ;
});