"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { app, BrowserWindow, Menu } = require('electron/main');
const path = require('path');
const { ipcMain } = require('electron');
function Startup() {
    const Startupwindows = new BrowserWindow({
        width: 500,
        height: 300,
        frame: false,
        resizable: false,
        movable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });
    const startupindexpath = path.join(__dirname, '../../Lyra/dist/start.html');
    Startupwindows.loadFile(startupindexpath);
    setTimeout(() => {
        //Startupwindows();
        Startupwindows.close();
    }, 2000);
}
;
function editor() {
    //Menu.setApplicationMenu(null)
    const editorwindows = new BrowserWindow({
        width: 1280,
        height: 800,
        minWidth: 800,
        minHeight: 500,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    });
    const editorindexpath = path.join(__dirname, '../../Lyra/dist/index.html');
    editorwindows.loadFile(editorindexpath);
}
;
app.whenReady().then(() => {
    Startup();
    editor();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            Startup();
        }
    });
});
ipcMain.handle('window:minimize', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    window.minimize();
});
ipcMain.handle('window:maximize', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    if (window.isMaximized()) {
        window.unmaximize();
    }
    else {
        window.maximize();
    }
});
ipcMain.handle('window:close', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    window.close();
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
