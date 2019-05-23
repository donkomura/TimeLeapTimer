'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({
		width: 390,
		height: 70,
		maxWidth: 600, 
		maxHeight: 800,
		minWidth: 150, 
		minHeight: 40,
		resizable: true,
		frame: false,
    alwaysOnTop: true,
   });
  mainWindow.loadURL('file://' + __dirname + '/app/index.html');
  
  // var setWin = require("./setWin.json");
  // mainWindow.setPosition(setWin["x"], setWin["y"]);
	// mainWindow.setSize(setWin["width"], setWin["height"]);
	
 	// var path = require('path').join(__dirname, 'setWin.json');
	// mainWindow.on('close', function () {
	// 	var fs = require('fs');
	// 	var item = JSON.stringify(mainWindow.getBounds());
	// 	fs.writeFile(path, item);
	// });  
	// mainWindow.webContents.openDevTools();
    
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});
