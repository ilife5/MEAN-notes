# NodeJs

## Node的历程

2009年3月,Ryan Dahl在博客上宣布准备基于V8创建一个轻量级的Web服务器并提供一套库。并于5月Ryan Dahl在Github上发布了最初的版本。

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

[grunt](http://gruntjs.com/), [gulp](http://gulpjs.com/), [brunch](http://brunch.io/)等任务管理工具能够自动化执行重复性的任务，如压缩，编译，单元测试，代码质量检查等。能够极大的提高工作效率和前端生产力。

