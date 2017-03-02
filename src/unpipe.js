var net = require('net');
var file =  require('fs').createWriteStream('./message.txt');
var server = net.createServer();
server.on('connection',function(socket) {
	console.log('开始连接。。。');
	socket.pipe(file,{end:false});
	setTimeout(function() {
		file.end('再见啦');
		socket.unpipe(file);
	},5000)
})
server.listen(8431,'localhost');