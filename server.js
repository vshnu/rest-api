const WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({port: 3000});

WSS.on('connection', () =>{
	console.log('We are connected');
});