var dgram = require('dgram');
var client = dgram.createSocket('udp4');
client.bind(41235,'192.168.1.102');
var buf = new Buffer('您好，我是客户端41239的数据！');
client.send(buf,0,buf.length,41234,'localhost');
client.on('message',function(msg,rinfo) {
	console.log('已接收到服务器端发送的数据：%s',msg);
});