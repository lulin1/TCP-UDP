var net = require('net');
var server = net.createServer();
server.on('connection',function(socket) {
	console.log('服务器连接中...');
	socket.on('data',function(data) {
		console.log(data.toString());
	})
})
server.listen(8431,'localhost');