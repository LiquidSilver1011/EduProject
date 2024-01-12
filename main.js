// main.js
const { app, BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");
const { contextIsolated } = require('process');

function createMainWindeow(){ 
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: "test", 
        webPreferences:{
            contextIsolation:true,
            nodeIntegration:true,
            preload:path.join(__dirname, "./preload.js")
        }
             
    });
    mainWindow.webContents.openDevTools();
    const starturl = url.format({
        pathname:path.join(__dirname,"./app/home.html"),
        protocol:'file',
    })

    mainWindow.loadURL("http://localhost:3000");
}

app.whenReady().then(createMainWindeow);


 