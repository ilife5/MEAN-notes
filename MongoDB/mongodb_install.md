# 在windows下安装MongoDB

## 概览

> 从v2.2开始，MongoDB不再支持Windows XP. 请使用较新的Windows系统来使用更多新发布的MongoDB版本。

> 如果使用的Windows系统为Windows Server 2008 R2 或者 Windows 7，情先安装[解决存储映射文件问题的hotfix](http://support.microsoft.com/kb/2731284)

## 系统需要

需要Windows Server 2008 R2， Windows Vista或者更新版本的Windows系统。.msi安装文件包含了所有安装需要的依赖文件，安装会自动覆盖系统中原有的旧版本MongoDB，过程全部为自动执行。

## 获取MongoDB

1.选择适合的MongoDB版本

现在有以下三种MongoDB

+ MongoDB for Windows 64-bit 需要Windows Server 2008 R2， Windows 7 64-bit以及更新版本的Windos系统。这个版本能够利用Windows平台最新的增强功能但是不能在旧版本的Windows系统上安装。

+ MongoDB for Windows 32-bit 能够在所有新于Windows Vista的32位系统中运作。这个版本的MongoDB的设计意图是为了在旧系统中测试或者部署开发环境。有一个重要的地方是32位系统下的MongoDB最多能够支持的数据库大小为2GB。

+ MongoDB for Windows 64-bit Legacy能够在Windows Vista，Windows Server 2003，Windows Server 2008下运行，不包含最新的关于性能上增强的支持。

如何查看正在运行Windows版本呢？可以使用命令行工具运行如下命令

```
wmic os get osarchitecture
```

2.下载MongoDB

在[下载页面](http://www.mongodb.org/downloads?_ga=1.168792035.336844986.1426517914)即可找到最新版本的MongoDB，要确保下载的版本适用于你的系统。64位版本的MongoDB是无法在32位Windos系统中正常工作的。

## 安装MongoDB

找到下载的安装文件，默认会在当前用户的“下载”文件夹下，双击安装文件，即可看到安装引导界面。

选择“Custom”安装选项可以自定义安装的位置，默认安装位置在c:\mongodb。

MongoDB安装文件包含了所有依赖的文件，可以在任何的文件夹下运行安装文件。

## 运行MongoDB

1.为了方便的使用MongoDB，比较好的方式是设置环境变量。比如我安装MongoDB的目录为<code>D:\Program Files\MongoDB\</code>，bin目录为<code>D:\Program Files\MongoDB\Server\3.0\bin</code>。这部分路径会受到安装版本的影响。

右键“我的电脑”，选择“属性”，“高级系统设置”，“环境变量”。在PATH中添加<code>;D:\Program Files\MongoDB\Server\3.0\bin</code>。

打开命令行工具，输入<code>mongo --version</code>，看到如下输出(其中<version>为当前安装MongoDB的版本号)，证明环境变量设置成功。

```
MongoDB shell version: <version>
```

2.MongoDB需要一个存放数据的目录。默认存放的目录为<code>C:\data\db\</code>。一般这个目录是不存在的，需要先建立目录，并通过<code>mongod --dbpath</code>命令进行设置。

```
mongod --dbpath f:\mongodb\data
```

3.运行MongoDB

通过mongod.exe运行MongoDB，在环境变量设置好的条件下，可以在命令行中直接输入

```
mongod
```

基于系统的安全级别设置，Windows可能会弹出一个安全警告弹层询问是否允许MongoDB链接网络。所有的用户应该选择专用网络，如家庭或者工作网络并选择允许。更多的关于MongoDB安全的信息，可以参考[MongoDB安全文档](http://docs.mongodb.org/manual/core/security/)。

4.连接至MongoDB

连接至MongoDB，需要打开另一个命令行工具，运行

```
mongo
```

如果开发语言选择用.NET，可以参考文档[C# and MongoDB](http://docs.mongodb.org/ecosystem/drivers/csharp)。

5.开始使用MongoDB
开始使用MongoDB，可以参考[Getting Started with MongoDB]。如果想在生产环境中使用MongoDB，可以查看[生产记录](http://docs.mongodb.org/manual/administration/production-notes/)。

如果想要关闭已经启动的MongoDB服务，在命令行中使用快捷键<code>Ctrl + C</code>即可停止服务。


参考[在windows上安装MongoDB](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/?_ga=1.68659027.336844986.1426517914)