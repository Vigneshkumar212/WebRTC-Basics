// add event listeners for ICE candidates on both peers
peerA.addEventListener('icecandidate', e => {
    if (e.candidate) {
        peerB.addIceCandidate(e.candidate)
            .catch(error => {
                console.log('Failed to add ICE candidate to Peer B:', error);
            })
    }
})
peerB.addEventListener('icecandidate', e => {
    if (e.candidate) {
        peerA.addIceCandidate(e.candidate)
            .catch(error => {
                console.log('Failed to add ICE candidate to Peer A:', error);
            })
    }
})