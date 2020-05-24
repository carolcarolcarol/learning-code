const {app,BrowserWindow} = require('electron');
// exe  c/s架构
// exe 代表windows
let win  


app.on('ready',()=>{
    win = new BrowserWindow({     //chormIum封装???
        webPreferences:{
            nodeIntegration: true
        }
    })
    win.loadFile("index.html");

})
