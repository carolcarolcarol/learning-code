const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    

// 每次请求，读取文件，这样一直请求是否会有浪费网络资源的地方？
// 每次请求都需要返回内容，如果内容多，则浪费带宽
// 如果内容未改变，不需要每次都读取。


// 1.前端会缓存数据 localStorage sessionStorage session
// 2.a.txt不变的话，请求一次就好
//3.之后再请求,如果服务器端文件没有改变,就不用再返回文件内容,直接使用前端缓存的

// 1.怎样区分第一次和其他次?
// 2.怎么样判断文件是否修改
// 3.怎么告诉浏览器,在返回文件没发生改变的情况下,直接使用缓存的数据
let stat = fs.statSync('./a.txt');//拿到文件属性,同步方式,会阻塞
// console.log(stat.mtime);
// stat文件属性里的mtime----最后修改时间
// console.log(req);
res.setHeader('Last-Modified',stat.mtime);//把最后修改时间返回,可通过Network查看访问地址的headers,
//  发现Headers里出现了Last-Modified,并且除此之外,刷新后即下一次请求时,客户端的Request-Headers会带上If-Modified-Since字段
// 可通过if-modified-since判断是第一次请求还是其他次请求
if(req.headers['if-modified-since']){
    if(req.headers['if-modified-since'] == stat.mtime){
        // req.headers[if-modified-since] string类型,stat.mtime object类型,类型不同不能用三等号判断
        res.statusCode = 304  //如果有if-modified-since,说明并不是第一次请求,那么就比较if-modified-since和stat.mtime最后修改时间,如果相同,说明文件没被修改,如果不相同,说明文件被修改了.因为stat.mtime是最新时间,而if-modified-since是上一次时间,最新一次修改时间和上一次修改时间不相同,说明文件已被修改
        // stat.mtime是文件本身的属性,把文件的最后修改时间放在响应头,返还给浏览器,而if-modified-since在浏览器的请求头里,它里面存放的应该是上一次服务器端返回的stat.mtime数据,也就是上一次文件的修改时间.如果文件修改一次,那么当次if-modified-since里存放的是上一次的数据,下一次刷新后,才会更新数据.所以可以以此来对比,文件有没有被修改
        res.end();
        // 如果客户端发送了一个带条件的GET 请求且该请求已被允许
        // ，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，
        // 则服务器应当返回这个304状态码。简单的表达就是：服务端已经执行了GET，但文件未变化。
        return;

    }else{
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end('修改了');
        return;
    }

}
fs.createReadStream('a.txt').pipe(res);

})


.listen(5200)


// 这里判断之后返回空的,没返回文件里的内容,修改了也是没返回文件里的内容????????????/