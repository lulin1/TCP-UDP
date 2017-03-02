var net = require('net');
var file =  require('fs').createWriteStream('./message.txt');
var server = net.createServer();
server.on('connection',function(socket) {
	console.log('开始连接。。。');
	socket.setTimeout(5*1000);
	socket.pause();
	socket.on('timeout',function() {
		socket.resume();
		socket.pipe(file);
	});
	socket.on('data',function(data) {
		socket.pause();
	});
});
server.listen(8431,'localhost');