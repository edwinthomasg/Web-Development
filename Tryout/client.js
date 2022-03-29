// const websocket = require('ws')
// const url = "ws://127.0.0.1:8080"
// const ws = new websocket(url)
// ws.on('open',()=>{
//     wss.send("HI server")
   
// })
// ws.on('message',(mes)=>{
//     console.log("Server : "+msg)
// })
const websocket = require('ws');
const url = "ws://127.0.0.1:8090";
const ws = new websocket(url);

ws.on('open',function () {
    ws.send("Hello server");
    // ws.send("2nd message from client");
})

ws.on('message',function (msg) {
    console.log("Server : "+msg);
})