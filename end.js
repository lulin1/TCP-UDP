var net = require('net');
var server = net.createServer();
server.on('connection',function(socket) {
	console.log('开始连接...')
	socket.setEncoding('utf8');
	socket.on('data',function(data) {
		console.log(data);
		console.log('已经收到 %d 字节数据', socket.bytesRead);
	});
	socket.on('end',function() {
		console.log('客户端连接被关闭');
	})
})
server.listen(8431,'localhost');
