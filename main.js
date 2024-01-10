// main.js
const { app, BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");

function createMainWindeow(){ 
    const mainWindow = new BrowserWindow({
    width: 800, 
        height: 600,
        title: "test" 
    });

    const starturl = url.format({
        pathname:path.join(__dirname,"home.html"),
        protocol:'file',
    })

    mainWindow.loadURL(starturl);
}

app.whenReady().then(createMainWindeow);


