const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{
        'Access-Control-Expose-Header':'Access-Control-Allow-Origin',
        // 如果要让前端拿到(在index.html里写了console.log(res),这里所说的前端拿到指的就是请求后console.log(res)里得到的信息，以下五种信息，需要使用access-control-expose-header，把要让前端拿到的信息头放进去，如前一行所示，或更多（比如直接在这里写'content-type:json也能让前端拿到）
        'Access-Control-Allow-Origin':'http://localhost:5500',
    'Access-Control-Allow-Headers' :'content-type,X-Requested-With',
    // 该次请求的自定义请求头字段
    'Access-Control-Allow-Methods':'*',
    //允许 get,post方法等  该次请求的请求方式
    'Access-Control-Allow-Credentials':true  ,//如果这个选项为true,.....-origin不能为星号，选项true/false   credentials凭证 允许前端在请求的时候携带cookie  
    // cookie可以存在前端，如果前端存在cookie,那么它会自动添加到请求头里，随着http请求自动发送
 'Access-Control-Max-Age':-1
//  preflight预检请求结果缓存的时间
})
    // access-control-allow-origin:允许跨域访问9090的地址
    let posts = ['js','php'];
    res.end(JSON.stringify(posts));
})
.listen(9090,()=>{
    console.log(9090);
});