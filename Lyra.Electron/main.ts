const { app, BrowserWindow, Menu, dialog } = require('electron/main')
const path = require('path');
const { ipcMain } = require('electron');
import { type IpcMainInvokeEvent } from 'electron';

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
};


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

    // 可选：打开开发者工具进行调试
    // editorwindows.webContents.openDevTools();
};



app.whenReady().then(() => {

    Startup()
    editor()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            Startup()
        }
    })
})

ipcMain.handle('window:minimize', (event: IpcMainInvokeEvent) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    window.minimize();
});

ipcMain.handle('window:maximize', (event: IpcMainInvokeEvent) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    if (window.isMaximized()) {
        window.unmaximize();
    } else {
        window.maximize();
    }
});

ipcMain.handle('window:close', (event: IpcMainInvokeEvent) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    window.close();
});

// 新增的菜单功能处理器
ipcMain.handle('window:toggle-devtools', (event: IpcMainInvokeEvent) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    window.webContents.toggleDevTools();
});

ipcMain.handle('window:toggle-fullscreen', (event: IpcMainInvokeEvent) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    window.setFullScreen(!window.isFullScreen());
});

ipcMain.handle('dialog:open-file', async () => {
    const result = await dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [
            { name: 'All Files', extensions: ['*'] },
            { name: 'Text Files', extensions: ['txt', 'md'] },
            { name: 'JavaScript Files', extensions: ['js', 'ts', 'jsx', 'tsx'] }
        ]
    });
    return result;
});

ipcMain.handle('dialog:save-file', async () => {
    const result = await dialog.showSaveDialog({
        filters: [
            { name: 'All Files', extensions: ['*'] },
            { name: 'Text Files', extensions: ['txt', 'md'] },
            { name: 'JavaScript Files', extensions: ['js', 'ts', 'jsx', 'tsx'] }
        ]
    });
    return result;
});

ipcMain.handle('app:quit', () => {
    app.quit();
});

ipcMain.handle('app:restart', () => {
    app.relaunch();
    app.quit();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})