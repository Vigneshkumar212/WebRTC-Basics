// assuming you have a signaling server object called "signaling"
const answer = peerConnection.localDescription;
signaling.sendAnswer(answer);
