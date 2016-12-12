var dgram = require('dgram');
var client = dgram.createSocket('udp4');
var message = new Buffer("您好，我是客户端数据！");
client.send(message,0,message.length,41234,'localhost',function(err,bytes) {
	if (err) {console.log('发送数据失败！');}
	else  {console.log('已发送 %d 字节的数据。', bytes);}
});
client.on('message',function(msg,rinfo) {
	console.log('已接收服务器端发送的数据: %s',msg);
	console.log('服务器地址为：%s',rinfo.address);
	console.log('服务器端口号为：%s',rinfo.port);
	// client.close();
});
// client.on('close',function() {
// 	console.log('socket端口被关闭。。');
// });