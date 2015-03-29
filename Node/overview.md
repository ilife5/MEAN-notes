# NodeJs概览

Node的设计目的是在分布式设备上运行的数据密集、实时应用上使用非阻塞、事件驱动形式的IO，保证轻量和高效。

## Node的历程

2009年3月,Ryan Dahl在博客上宣布准备基于V8创建一个轻量级的Web服务器并提供一套库。并于5月在Github上发布了最初的版本。

2010年年底，Node获得硅谷云计算服务商Joyent公司的资助，其创始人加入Joyent公司全职负责Node的发展。

2012年1月底，Ryan Dahl将Node版本发布和bug修复等工作交由Isaac Z.Schlueter,Isaac Z.schlueter正是node包管理器NPM的作者。

## 使用Node的理由

### 学习成本低

从事前端开发的工程师已经对javascript语言有一定的基础，直接使用javascript作为后端程序语言，可以降低前端工程师的学习成本。在浏览器中使用的模块，模板等可以很轻松的迁移到服务端使用。

### 效率高

Node使用了谷歌开发的V8引擎，由于V8可以在程序执行前通过编译将JavaScript编译成机器码，所以执行效率非常高。而且Node可以通过编写C/C++扩展的方式更高效的利用CPU，将一些V8不能做到极致的地方通过C/C++来实现。

Node的event loop机制可以将所有的IO操作异步进行，进而实现非阻塞IO。

在Web应用中，诸如读写网络连接，读写文件，读写数据库，所有这些任务在Node中都可以异步进行。所以，使用Node可以构建高速，扩展性好，吞吐量大的Web应用。

### 生态环境健全

[npm](https://www.npmjs.org/)是Node的包管理器，同其他生态系统的包管理器类似，但是其更加的高效，方便以及一致。npm在包的管理上保证了包与包之间的独立性，避免了版本的冲突。npm支持在全局安装shell命令，并提供了跨平台的包安装方式。

比较流行的npm包有：

+ [express](http://expressjs.com/) - Express.js已经几乎成为了Node.js应用的事实标准。
+ [connect](http://www.senchalabs.org/connect/) - Connect是一个Node.js扩展型的HTTP服务框架，提供了一系列高效的中间件，在Express中，被作为基础的依赖。
+ [socket.io](http://socket.io/) - 服务器端最常用的websocket库。
+ [jade](http://jade-lang.com/) - 一个流行的模板引擎。
+ [mongo](https://npmjs.org/package/mongodb)以及[mongojs](https://github.com/gett/mongojs) - 在Node.js中提供数据库，并支持使用javascript的语法操作数据库。
+ [forever](https://npmjs.org/package/forever) - 最常用的Nodejs守护进程。


[grunt](http://gruntjs.com/), [gulp](http://gulpjs.com/), [brunch](http://brunch.io/)等任务管理工具能够自动化执行重复性的任务，如压缩，编译，单元测试，代码质量检查等。能够极大的提高工作效率和前端生产力。

### 从表现层到数据层的一致性

通常来说从前端的表现层传递数据到持久层需要对数据进行额外的处理。[MongoDB](http://www.mongodb.org/)，实现了从表现层到数据层的一致。数据可以用JSON形式从浏览器通过Node直接保存到数据库中。 

### 对构建实时系统支持良好

使用event loop可以应对多用户的并发需求。实时的能力则来自于在websocket上的使用。Websocket可以简单的建立服务端和客户端的双向通道，服务端和客户端可以方便的互相推送数据。WebSocket使用TCP层的规范，可以减少HTTP带来的开销。

[Socket.io](http://socket.io/)是当前websocket领域最流行的库，方便管理Web应用中的通信双方。下面是一个简单的例子：

```
var app = require('http').createServer(handler)
var io = require('socket.io')(app);

app.listen(8080);

io.on('connection', function (socket) {
  
  // Send a message to the client
  socket.emit('event to client', { hello: 'world' });

  // Handle a message from the client
  socket.on('event from client, function (data) {
    console.log(data);
  });
});
```

由于上述的原因，Node可以在构建如聊天室以及游戏等多用户，实时领域取得优势。

### 对流的支持

传统上的Web框架把HTTP的请求和响应当做数据对象来处理。实际上，HTTP的请求和响应属于IO流，就像在文件系统中使用流来获取一个文件一样。Node在处理IO上天生是有优势的，我们可以利用这个特点做一些很酷的事情。比如在多媒体文件上传的过程中，使用流来处理进而减少处理时间。

Node可以读写流到websocket上，同样的，也可以读写流到HTTP中。例如，我们可以在服务端，把计算之后的输出流通过websocket发送到浏览器端，在浏览器端实时的输出信息。

### 维护与技术支持

对于开源软件，最让人头疼的事情在于开发者放弃维护。这对于Node不是问题，Node有着稳定的开发人员与赞助公司。值得一提的是，现在很多大型的公司已经在使用Node，包括微软，雅虎，阿里，去哪儿网等。

在社区的支持上，Node也是首屈一指的，并且有非常多的天才程序员围绕着Node的生态系统进行开发，提供工具，支持。
