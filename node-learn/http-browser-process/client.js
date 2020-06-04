// tcp 源端口 目的地端口
const net = require('net');
// 客户端 ：http.get,xhr
const client =net.createConnection({port:8088,host:'127.0.0.1'},()=>{
    let json = JSON.stringify({a: 1})
//    拼报文  请求行：方法空格url空格版本空格crlf cr回车 lf换行
    client.write('POST / HTTP/1.1\r\n');
    // 首部：首部字段名空格字段值crif
    client.write('HOST: 127.0.0.1\r\n');
    client.write('Content-Type: application/json\r\n');
    //首部后面是crif
    client.write('\r\n');
    // 实体 
    client.write(json);
    client.write('\r\n');

})
client.on('data',(data)=>{
    // 服务端返回数据，客户端接收。
    console.log('receive:',data.toString());
})
client.on('end',()=>{
    // 后端发送数据完毕之后，将createConnection连接断开？
    console.log('disconnect')
})