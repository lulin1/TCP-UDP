var net = require('net');
var server = net.createServer();
server.on('connection',function(socket) {
	console.log('客户端与服务器端的连接已经建立啦！~');
	socket.setEncoding('utf8');
	socket.on('data',function(data) {
		console.log('已接受客户端发来的数据：'+data);
		socket.write('确认数据：'+data);
	});
});
server.listen(8431,'localhost');