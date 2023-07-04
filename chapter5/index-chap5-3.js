// add stream to peer A
navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(stream => {
        stream.getTracks().forEach(track => {
            peerA.addTrack(track, stream);
        });

    }).catch(error => {
        console.log(' Failed to get user media: ', error)
    })
