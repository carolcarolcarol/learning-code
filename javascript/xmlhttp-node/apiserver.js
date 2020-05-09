// ctrl+c重启文件
const http = require('http');
const fs = require('fs');
const server = http.createServer(function(req,res){
    if(req.url ==='/'){
        const html = fs.readFileSync('./index.html','utf-8'); //读取index文件，编码utf-8
         res.end(html);//请求'/'时，返回html

        // 200是http请求的状态码，状态码有1xx,2xx,3xx:301/302---重定向,4xx：客户端相关,5xx：服务端相关
        // 将最开始两行const,res代码改成下面两个res代码之后，html里面不会再发getposts请求??
        // res.writeHead(200,{
        //     'Content-Type' :'text/html'
        // })   //返回头里标明后端返回的数据类型
        // res.end(`<h2>123</h2>`) //要让给这个请求返回的模板字符串显示在页面上，需要告诉它是什么类型
    }else if(req.url === '/getPosts'){
        let posts = [
            {title:'js',star:1000},
            {title:'java',star:21000},
            {title:'python',star:5000}]

             //对前端提交过来的数据进行解析
    //  前端提交的数据一定可以通过req取到，后端的数据res
        let str = ''
        // 数据是分段收到
        // 不管是向别人请求数据还是自己接收别人的请求，数据都是分段获得的，都要分段接收
        //前端xhr.send()把数据发送给后端，后端接收前端的请求
        req.on('data',function(chunk){
            //  //绑定数据事件，当有数据产生/返回的时候
            str += chunk;
        })
        //将前端发送来的数据接收完毕，组装完成
        req.on('end',function(){
            console.log(JSON.parse(str));
            // 它们的作用是相对的，我用JSON.stringify()将对象a变成了字符串c，
            // 那么我就可以用JSON.parse()将字符串c还原成对象a。
            //???????????这里的console在哪里显示了？、？？？
            // 前端传来的数据是什么？？？？？？？？？？？
        })

     res.end(JSON.stringify(posts))
     //返回的时候只能返回字符串


     //对前端提交过来的数据进行解析
    //  前端提交的数据一定可以通过req取到，后端的数据res


    }
    // console.log(req,req.url);
    // res.end('hello server');

})
server.listen(8080,function(){
     console.log('server is running 8080')
})