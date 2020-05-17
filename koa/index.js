
// http协议诞生于1991年，一开始是用于传输学术论文的
// 采用基于请求(ctx.request)响应(ctx.response)的模式在网络间传输http
// 超文本内容http
const Koa = require('koa');
const fs = require('fs');
// koa轻量级web开发框架
const app = new Koa();
// 函数封装一个服务
// const func = ctx => {
//     // ctx  context上下文环境
//     console.log(ctx);
//     ctx.response.body = 'func';
// }
// const main = ctx => {
//     console.log(ctx,'---------');
//     ctx.response.body = 'hello world';
// }
// app.use(func);
// // 如果同时写func函数和Main函数并use(func),use(main)那么只会执行前面那个func，即页面返回func,因为func在前，已经执行了其中的ctx.response.body='func',已经给页面返回体返回了内容，那么下一个函数中同样的ctx.response.body='hello world'就不会被执行了。
// app.use(main);
// 当用户用的时候，输入网址的时候，就在向那个网址发送请求。当用户请求的时候，提供给访问者用的函数（这里是use(main)）就会被执行。
// 启用一个服务 给访问者用，当用了之后（比如做了console更改后在页面上刷新），ctx那个函数才会执行，nodemon ./index.js才会有console.log的结果。

const main = ctx => {
        console.log(ctx,'---------');
         ctx.response.type = 'html';//返回给页面的内容是html格式的
        const html = fs.readFileSync('./template.html','utf-8');
        console.log(html);
        ctx.response.body = html;
     }
app.use(main);

app.listen(3000);
// koa在3000端口上提供了Http访问协议服务
// http node 内置模块，createServer启动服务 ----原生底层写法 ，koa封装了它们。----封装框架写法

