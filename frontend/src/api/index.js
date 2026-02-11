var socket = new WebSocket('ws//:localhost:9000/ws');

let connect = (cb) => {
    console.log("Connecting")

    socket.onopen = () => {
        console.log("soccessfully connected")
    }

    socket.onmessage = (msg) => {
        console.log('Message from websocket: ', msg);
    }

    socket.onclose = (event) => {
        console.log('Websocket closed: ', event);
    }

    socket.onerror = (error) => {
        console.log('Websocket error: ', error);
    }
};

let sendMesg = (msg) => {
    console.log("Sending message: ", msg);
    socket.send(msg);
}