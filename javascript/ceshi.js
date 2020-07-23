const aliSms = require('aliyun-sms-sdk');
let phone ='18160746249'
const confSend = {
    accessKeyId: 'LTAI4G61MY4MgEaGL32aBnxA',
    secretAccessKey: 'secret',
    recNum:'18160746249',
    signName: 'sign',
    templateCode: 'code',
    param: { "code": "1111" }
};

aliSms.send(confSend)


