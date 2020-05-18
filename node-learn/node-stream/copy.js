// const fs = require('fs');

// function copy(sourceUrl,destUrl){
//     // 原文件，目标文件
// //     fs.readFile(sourceUrl,(err,info)=>{
// //         if(!err){
// //             fs.writeFile(destUrl,info,(err)=>{
// //                 if(!err){
// //                     console.log('拷贝完毕')
// //                 }
// //             })
// //         }
// //     })
// // }
// //像上文这种方式..... 不用流，读完一个文件得到内容，文件写到info里面，而Info变量又是放在内存里的，然后是占据计算机内存的

const fs = require('fs');

 function copy(sourceUrl,destUrl){
     // 原文件，目标文件
     const readStream = fs.createReadStream(sourceUrl);//源头
     const writeStream = fs.createWriteStream(destUrl);
     readStream.pipe(writeStream);//管道
     // 读取的内容顺着管道流入destUrl,读一点流一点，流完后自动关闭流
     // 可读流，只负责提供数据---源头
     // 可写流，只接收数据
     // 双工流与转换流，可读+可写
     
     // node里，流是很基础的类
 }


copy('./readMe.md','./copyMe.md')



// 输入网址进行访问，浏览器对html,css,js进行渲染--》访问者看到页面
// 浏览器执行js等的时候，要向访问者本机申请内存，由于浏览器在各自的电脑上运行，所以前端天然就是分布式的
// 因为前段是分布式的，也就没有处理高并发的能力


// 后端 一台服务器（如linux） 要处理多人的请求  是集中的服务
// 后端如果卡，所有人都卡，前段都卡，有可能是自身电脑有问题

// 不是流：一次性接收所有数据
// 流：分段接收


