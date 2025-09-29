// src/global.d.ts
export { };

declare global {
    interface Window {
        updateStatus: (text: string) => void;
        electron: {
            // 窗口控制
            minimizeWindow: () => void;
            maximizeWindow: () => void;
            closeWindow: () => void;

            // 菜单功能
            toggleDevTools: () => void;
            toggleFullscreen: () => void;

            // 文件操作
            showOpenDialog: () => Promise<any>;
            showSaveDialog: () => Promise<any>;

            // 应用控制
            quit: () => void;
            restart: () => void;
        }
    }
}