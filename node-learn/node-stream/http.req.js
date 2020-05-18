
// 什么时候用http，什么时候用https?

const http = require('http');
const fs = require('fs');
const request = require('request');
// 用流的方式可以这样写，如下一行所示
request('https://www.baidu.com').pipe(fs.createWriteStream('./baidu.html'))
http.Server((req,res)=>{

   const writeStream = fs.createWriteStream('./params.txt');
   req.pipe(writeStream);
   res.end('ok');
})
.listen(8088,()=>{
    console.log('8088')

})