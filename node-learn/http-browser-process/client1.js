// 源端口号  目的地端口号
// 客户端：http.get  xhr
// splice和slice的区别
const net = require('net');
class Xmlhttprequest {
  constructor() {
    this.method = null;
    this.url = null;
    this.headers = null;
    this.body = null;
    this.resStatusLine = null;
    this.resHeaders = null;
    this.response = null;
  }
  open(method, url) {
    this.method = method;
    this.url = url;
  }
  setHeader(headers) {
    this.headers = headers;
  }
  parse(string){
    //   解析响应体里的报文
      const lines =string.split('\r\n');
      console.log(lines);
      this.resStatusLine = lines[0];
      this.statusCode = this.resStatusLine.split(' ')[1];
      // split() 方法用于把一个字符串分割成字符串数组。
      // 这里split('.')[] 是一种缩写形式，把它拆开来看实际就是先用split('.')方法将字符串以"."开割形成一个字符串数组，
      // 然后再通过索引[]取出所得数组中的第二个元素的值
      this.resHeaders = lines.slice(1,lines.length - 1)
    //   -1截到倒数第二个
    this.response = lines[lines.length - 1];

  }
  send(body) {
    // 浏览 http 请求  -> 拼接 http 报文
    this.body = body;
    const client = net.createConnection({ port: 8088, host: '127.0.0.1' }, () => {
      client.write(`${this.method} ${this.url} HTTP/1.1\r\nHOST: 127.0.0.1\r\nContent-Type: application/json\r\nContent-Length: ${this.body.length}\r\n\r\n${this.body}\r\n`)
      client.end();
    })
    client.on('data', (chunk) => {
        // 服务端返回客户端（浏览器）的也是一个原始的http报文
      console.log('receive:', JSON.stringify(chunk.toString()));
      // stringify() 用于从一个 对象 解析出 字符串
      this.parse(chunk.toString());
      // parse() 用于从一个 字符串 中解析出 json对象
      this.onload();

    })
    client.on('end', () => {
      console.log('disconnect');
    })
  }
  
}
// ajax
const xhr = new Xmlhttprequest();
xhr.open("POST", "/");
xhr.setHeader({
  'Content-Type': 'application/json'
})

// xhr解析报文
xhr.onload = function(){
    console.log('接受到相应了')
    console.log(xhr.statusCode);
    console.log(xhr.response);
    console.log(xhr.resHeaders);
}
xhr.send(JSON.stringify({a: 1}))
// const client = net.createConnection({ port: 8088, host: '127.0.0.1' }, () => {
//   let json = JSON.stringify({a: 1});
//   client.write('POST / HTTP/1.1\r\n');
//   client.write('HOST: 127.0.0.1\r\n');
//   client.write('Content-Type: application/json\r\n');
//   client.write('\r\n');
//   client.write(json)
//   client.write('\r\n');
// })
// client.on('data', (data) => {
//   console.log('receive:', data.toString());
//   client.end();
// })
// client.on('end', () => {
//   console.log('disconnect');
// })

