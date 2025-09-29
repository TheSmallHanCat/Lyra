import './TitleBar.css';

const TitleBar = () => {
    const handleMinimize = () => {
        window.electron?.minimizeWindow();
    };

    const handleMaximize = () => {
        window.electron?.maximizeWindow();
    };

    const handleClose = () => {
        window.electron?.closeWindow();
    };

    return (
        <div className="title-bar">
            <div className="title-bar-drag-region">
                <div className="title">我的应用</div>
            </div>

            <div className="window-controls">
                <button className="control-button minimize-btn" onClick={handleMinimize}>
                    −
                </button>
                <button className="control-button maximize-btn" onClick={handleMaximize}>
                    □
                </button>
                <button className="control-button close-btn" onClick={handleClose}>
                    ×
                </button>
            </div>
        </div>
    );
};

export default TitleBar;