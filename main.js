// main.js
const { app, BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");

function createMainWindeow(){ 
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: "test", 
    });
    mainWindow.webContents.openDevTools();
    const starturl = url.format({
        pathname:path.join(__dirname,"./app/home.html"),
        protocol:'file',
    })

    mainWindow.loadURL("http://localhost:3000");
}

app.whenReady().then(createMainWindeow);


