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

Node的event loop机制实现的异步IO在处理IO设备