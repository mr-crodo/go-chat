var socket = new WebSocket('ws//:localhost:9000/ws');

let connect = (cb) => {
    console.log("Connecting")

    socket.onopen = () => {
        console.log("soccessfully connected")
    }

    socket.onmessage = (msg) => {
        console.log('Message from websocket: ', msg.data);
        cb(msg.data);
    }
}