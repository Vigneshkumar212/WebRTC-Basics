// create offer on peer A
peerA.createOffer()
    .then(offer => {
        // set local description on peer A
        return peerA.setLocalDescription(offer);
    })
    .then(() => {
        // set remote description on peer B
        return peerB.setRemoteDescription(peerA.localDescription);
    }).then(() => {
        // create answer on peer B
        return peerB.createAnswer();
    })
    .then(answer => {
        // set  local description on peer B
        return peerB.setLocalDescription(answer);
    }).then(() => {
        // set remote description on peer A
        return peerA.setRemoteDescription(peerB.localDescription);
    }).catch(error => {
        console.log(' Failed to create WebRTC connection: ', error);
    })