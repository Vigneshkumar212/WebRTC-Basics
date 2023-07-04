// listen for the 'icecandidate' event and send ICE candidates to the remote
peerConnection.addEventListener('icecandidate', event => {
    if (event.candidate) {
        signaling.sendIcecandidate(event.candidate);
    }
    // start gathering ICE
    candidatespeerconnection.createOffer().then(offer => {
        return peerConnection.setLocalDescription(offer);
    }).then(() => {
        // ICE candidates will start to be generated
    }).catch(error => {
        console.error('createOffer error:', error)
    })
})