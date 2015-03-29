# 安装Node.js

## 获取Node.js安装包

在[nodejs](https://nodejs.org/)官网中下载nodejs安装包进行安装。

安装完成之后，在控制台输入

	node -v

如果显示当前node安装包的版本，则安装成功。

## 简单的例子：Webserver

下面我们将通过**nodejs**编写一个简单的小例子，搭建一个http服务器，当有请求访问服务器时，返回“Hello World”。

	//引入http模块
	var http = require("http");
	
	
	//通过http.createServer创建一个HTTP Server
	http.createServer(function(req, res) {
		res.writeHead(200, {
			"Content-Type": "text/plain"
		});
		res.end("Hello World\n");
	}).listen(1337, "127.0.0.1");


将上述代码保存为**simpleServer.js**，通过命令行执行：
	
	node simpleServer.js

此时，在浏览器中访问[http://127.0.0.1:1337](http://127.0.0.1:1337)即可看到页面上显示的“Hello World”。