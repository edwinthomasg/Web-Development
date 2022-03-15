const websocket = require('ws');
const url = "ws://127.0.0.1:8091";
const ws = new websocket(url);

ws.on('open',function () {
    ws.send("hello hi");
    ws.send("2nd message from client");
})

ws.on('message',function (msg) {
    console.log("from server : "+msg);
})

