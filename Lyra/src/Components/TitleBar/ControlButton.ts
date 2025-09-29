import { useState} from "react";

type ControlButtonHandlers = {
    handleMinimize: () => void;
    handleMaximize: () => void;
    handleClose: () => void;
    isMaximized: boolean;
    setIsMaximized: (maximized: boolean) => void;
};

const useControlButtonHandlers = (): ControlButtonHandlers => {
    const [isMaximized, setIsMaximized] = useState(false);
    const handleMinimize = () => {
        window.electron?.minimizeWindow();
    };
    const handleMaximize = () => {
        window.electron?.maximizeWindow();
        setIsMaximized(!isMaximized);
    };
    const handleClose = () => {
        window.electron?.closeWindow();
    };
    return {
        handleMinimize,
        handleMaximize,
        handleClose,
        isMaximized,
        setIsMaximized,
    };
};
export default useControlButtonHandlers;