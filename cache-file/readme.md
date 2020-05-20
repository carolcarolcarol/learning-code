浏览器上输入 http://www.baidu.com-----（http协议） 会发生什么？
res.writeHead(307)  location:https://www.baidu.com
临时重定向，浏览器更建议使用https协议，如果输入的是http,会重定向到https，请求https://www.baidu.com
对这个请求，响应码200，返回百度的内容

状态码会有什么变化？
会出现两个状态码
307  --
200
虽然输入的是http://www.baidu.com但是按下回车后，又会变成https://www.baidu.com
https--->加密的http协议
http--->http协议


状态码：
1xx:正在处理中
2xx:成功
3xx:跳转
4xx:客户端错误  例如地址不在404
5xx:服务器端错误 500 503服务器端不能响应
