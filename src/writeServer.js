var net = require('net');
var fs = require('fs');
var server = net.createServer();
server.on('connection',function(socket) {
	console.log('客户端与服务器端的连接已经建立');
	socket.setEncoding('utf8');
	var readStream = fs.createReadStream('./1.jpg');
	readStream.on('data',function(data) {
		var flag = socket.write(data);
		console.log('write方法的返回值为：' +flag);
		console.log('缓存队列中当前缓存了 %d 字符',socket.bufferSize);
	})
	socket.on('data',function(data) {
		console.log('已接受客户端发送的数据：' +data);
	});
	socket.on('drain',function() {
		console.log('TCP缓存区中的数据已经全部发送。');
	});
});
server.listen(8431,'localhost');