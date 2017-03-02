var dgram = require('dgram');
var server = dgram.createSocket('udp4');
server.on('message',function(msg,rinfo) {
	console.log('接收到客户端数据：',msg.toString());
	console.log('客户端地址为：',rinfo);
	var buf = new Buffer(msg);
	server.send(buf,0,buf.length,rinfo.port,rinfo.address);
	setTimeout(function(){
		server.unref();
	},10000);
});
server.on('listening',function() {
	var address = server.address();
	console.log('服务器开始监听。服务器的地址信息为：%j',address);
});
server.bind(41234,'localhost');