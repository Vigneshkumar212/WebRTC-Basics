// Create data channel
let dataChannel = peerConnection.createDataChanne1("dataChannel");
// Send data
dataChannel.send("Hello World!");
// Receive data
dataChannel.addEventListener("message", (event) => {
    console.log(event.data);
});