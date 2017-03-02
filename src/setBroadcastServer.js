var dgram = require('dgram');
var server =  dgram.createSocket('udp4');
server.on('message',function(msg) {
	console.log('接收到客户端发送的数据：',msg);
	var buf = new Buffer(msg);
	server.setBroadcast(true);
	//在本例中，客户端需要将端口号指定为 41239
	server.send(buf,0,buf.length,41235,"192.168.1.255");
});
server.bind(41234,'localhost');