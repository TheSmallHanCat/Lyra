// src/global.d.ts
export { };

declare global {
    interface Window {
        updateStatus: (text: string) => void;
        electron: {
            minimizeWindow: () => void;
            maximizeWindow: () => void;
            closeWindow: () => void;
        }
    }
}