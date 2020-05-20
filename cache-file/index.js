// 点击一个链接，如何不跳转

var http = require('http');
http.createServer((req,res)=>{
    if(req.url == '/newpage'){
        res.writeHead(204);//返回204不跳转
        // 204意思等同于请求执行成功，但是没有数据，浏览器不用刷新页面也不用导向新的页面
        // res.writeHead(200);
        // res.end(`newpage`);


        return;   
    }
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    // OSI数据模型：物理层，数据链路层，IP层，TCP层，应用层（最后三层合并为应用层--传输层，会话层，表示层）http在应用层
    // 传输层是管道，三次握手后，把请求者和响应者联系起来，数据可以送入管道，通过管道传输到对方
    res.write('hello world');
    res.end(`
        <html>
            <head></head>
            <body>
                <a href="/newpage">去新的页面</a>
            </body>
        </html>
    `)
})
.listen(3000)


// 正常情况下，点击链接后，发送了一个请求，浏览器新启动了一个网络进程，这个网络进程去进行通信连接
// ---本地的ip地址（域名服务商动态分配）和百度的固定ip地址，在两个ip之间构建连接，有了通路，在Ip协议之上，
// 有tcp协议，相互之间传输数据，构建了一个传输通道。点击下去-》requset请求，百度接收请求，准备好首页的内容返回回来。
