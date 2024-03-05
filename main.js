const { app, BrowserWindow } = require('electron')
const electron = require('electron');
const path = require('path');
const url = require('url');
const ipcMain = electron.ipcMain;
const createWindow = () => {

    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('home.html')
  }
  app.whenReady().then(() => {
    createWindow()
  })

