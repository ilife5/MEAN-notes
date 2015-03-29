//引入http模块
var http = require("http");


//通过http.createServer创建一个HTTP Server
http.createServer(function(req, res) {
	res.writeHead(200, {
		"Content-Type": "text/plain"
	});
	res.end("Hello World\n");
}).listen(1337, "127.0.0.1");