var net = require('net');
var file =  require('fs').createWriteStream('./message.txt');
var server = net.createServer();
server.on('connection',function(socket) {
	console.log('开始连接。。。');
	socket.pause();
	setTimeout(function() {
		socket.resume();
		socket.pipe(file);
	},30000);
})
server.listen(8431,'localhost');