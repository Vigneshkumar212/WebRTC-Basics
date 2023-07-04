peerConnection.createOffer().then(offer => {
    // set the local description of the RTCPeerConnection object
    return peerConnection.setLocalDescription(offer);
}).then(() => {
    // the offer has been created and set as the local description
    // you can now send the offer to the remote user using a signaling server
}).catch(error => {
    console.error(' createOffer error: ', error);
})