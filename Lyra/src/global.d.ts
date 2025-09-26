// src/global.d.ts
export { };

declare global {
    interface Window {
        updateStatus: (text: string) => void;
    }
}