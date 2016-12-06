var net = require('net');

var server = net.createServer(function(socket) {
	console.log('客户端与服务器端的连接已经建立。');
});

server.listen(8431,'localhost',function() {
	console.log('服务器端开始监听。');
});

server.on('error',function(e) {
	if (e.code == 'EADDRINUSE') {
		console.log('服务器地址及端口已经被占用');
	};
})