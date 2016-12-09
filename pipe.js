var net = require('net');
var file =  require('fs').createWriteStream('./message.txt');
var server = net.createServer();
server.on('connection',function(socket) {
	console.log('开始连接。。。');
	socket.pipe(file);
})
server.listen(8431,'localhost');