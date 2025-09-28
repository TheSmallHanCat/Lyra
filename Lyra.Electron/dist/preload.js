const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    // 窗口控制
    minimizeWindow: () => ipcRenderer.invoke('window:minimize'),
    maximizeWindow: () => ipcRenderer.invoke('window:maximize'),
    closeWindow: () => ipcRenderer.invoke('window:close'),

    // 菜单功能
    toggleDevTools: () => ipcRenderer.invoke('window:toggle-devtools'),
    toggleFullscreen: () => ipcRenderer.invoke('window:toggle-fullscreen'),

    // 文件操作
    showOpenDialog: () => ipcRenderer.invoke('dialog:open-file'),
    showSaveDialog: () => ipcRenderer.invoke('dialog:save-file'),

    // 应用控制
    quit: () => ipcRenderer.invoke('app:quit'),
    restart: () => ipcRenderer.invoke('app:restart'),
});