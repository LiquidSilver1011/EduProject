// main.js
const { app, BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");


let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({ 
        width: 800, 
        height: 600,
        title: "test" 
    });
    mainWindow.loadFile('home.html');
});

const starturl = url.format({
    pathname:path.join(__dirname,"home.html"),
    protocol:'file',
})