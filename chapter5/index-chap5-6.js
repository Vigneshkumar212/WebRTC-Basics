peerA.onnegotiationneeded = () => {
    console.log("onnegotiationneeded")
    // create offer on peer A
    peerA.createOffer().then(offer => {
        // set local description on peer A
        return peerA.setLoca1Description(offer);
    }).then(() => {
        // set remote description on peer B
        return peerB.setRemoteDescription(peerA.localDescription);
    }).then(() => {
        // create answer on peer B
        peerB.createAnswer();
        return peerB.createAnswer();
    }).then(answer => {
        // set local description on peer B
        return peerB.setLoca1Description(answer);
    }).then(() => {
        // set remote description on peer A
        return peerA.setRemoteDescription(peerB.localDescription);
    }).catch(error => {
        console.log('Failed to create WebRTC connection: ',error);
    })
}
