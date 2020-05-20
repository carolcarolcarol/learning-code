// writehead和setheader
// writehead只能用一次????
// res.writeHead必须在res.end前调用
// 如果两者都存在,先写set再写write,write优先

const http = require('http');
const fs =require('fs');
const users =require('./users.json');
// console.log(users)
let version = '1234556780';
let server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        fs.createReadStream('./index.html').pipe(res);
        
    }else if(req.url =='/users'){
        res.writeHead(200,{'Content-Type':'text/json;charset=utf-8'});
        res.end(JSON.stringify(users));
        //JSON.stringify可以把json对象转换成字符串
        //res传递的东西格式应该是字符串,可以是文本/buffer,不能是json,要转换格式
    }
//     if(req.headers['if-none-match']){
//         if(Number(req.headers['if-none-match']) == version){
//             res.statusCode = 304;
//             res.end();
//             return;
//         }else{
//             res.setHeader('Etag',version);
//             res.end('helloworld2');
//             return;
//         }
//     }
//     res.setHeader('Etag',version);
//     // 和stat.mtime和if-modified-since类似,Etag后,responseheaders会出现EtaG,刷新后,request-header会出现if-none-match,是否有版本号?
// res.end('helloworld');
});
server.listen(3010);


// 首先判断版本是否发生改变,如果未改变,传304,并且页面内容不变
// 否则的话,就再次请求,页面显示更改后的内容,并且更新版本号,版本号也要存在Localstorage中