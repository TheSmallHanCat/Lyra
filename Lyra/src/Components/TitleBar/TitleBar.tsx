import React, { useState } from 'react';
import './TitleBar.css';
import { FullscreenExitOutlined, 
          FullscreenOutlined,
          MinusOutlined,
          CloseOutlined
         } from '@ant-design/icons';


interface MenuItemProps {
    label: string;
    items: string[];
    onItemClick: (item: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, items, onItemClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="menu-item"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="menu-button">
                {label}
            </button>
            {isOpen && (
                <div className="menu-dropdown">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="menu-dropdown-item"
                            onClick={() => {
                                onItemClick(item);
                                setIsOpen(false);
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const TitleBar = () => {

    const [isMaximized, setIsMaximized] = useState(false); 

    const handleMinimize = () => {
        console.log('Minimize clicked, electron available:', !!window.electron);
        if (window.electron) {
            window.electron.minimizeWindow();
        } else {
            console.error('window.electron is not available');
        }
    };

    const handleMaximize = () => {
        console.log('Maximize clicked, electron available:', !!window.electron);
        if (window.electron) {
            window.electron.maximizeWindow();
            setIsMaximized(!isMaximized);
        } else {
            console.error('window.electron is not available');
        }
    };

    const handleClose = () => {
        console.log('Close clicked, electron available:', !!window.electron);
        if (window.electron) {
            window.electron.closeWindow();
        } else {
            console.error('window.electron is not available');
        }
    };

    const handleMenuItemClick = async (menuLabel: string, item: string) => {
        console.log(`Menu clicked: ${menuLabel} -> ${item}`);

        if (!window.electron) {
            console.error('window.electron is not available');
            return;
        }

        try {
            switch (menuLabel) {
                case 'File':
                    switch (item) {
                        case 'Open':
                            const openResult = await window.electron.showOpenDialog();
                            console.log('Open file result:', openResult);
                            break;
                        case 'Save As':
                            const saveResult = await window.electron.showSaveDialog();
                            console.log('Save file result:', saveResult);
                            break;
                        case 'Exit':
                            window.electron.quit();
                            break;
                    }
                    break;

                case 'View':
                    switch (item) {
                        case 'Toggle Fullscreen':
                            window.electron.toggleFullscreen();
                            setIsMaximized(!isMaximized);
                            break;
                        case 'Developer Tools':
                            window.electron.toggleDevTools();
                            break;
                    }
                    break;

                case 'Control':
                    switch (item) {
                        case 'Restart':
                            window.electron.restart();
                            break;
                    }
                    break;

                default:
                    console.log(`Menu item "${item}" in "${menuLabel}" not implemented yet`);
            };

        } catch (error) {
            console.error('Error handling menu item:', error);
        }
    };

    const menuData = [
        {
            label: 'File',
            items: ['New', 'Open', 'Save', 'Save As', 'Close', 'Exit']
        },
        {
            label: 'Edit',
            items: ['Undo', 'Redo', 'Cut', 'Copy', 'Paste', 'Find', 'Replace']
        },
        {
            label: 'View',
            items: ['Zoom In', 'Zoom Out', 'Reset Zoom', 'Toggle Fullscreen', 'Developer Tools']
        },
        {
            label: 'Control',
            items: ['Start', 'Stop', 'Restart', 'Debug', 'Settings']
        },
        {
            label: 'Infer',
            items: ['Auto Complete', 'Type Inference', 'Code Analysis', 'Suggestions']
        },
        {
            label: 'Project',
            items: ['New Project', 'Open Project', 'Close Project', 'Project Settings', 'Build', 'Deploy']
        }
    ];

    return (
        <div className="title-bar">
            <div className="menu-bar">
                {menuData.map((menu, index) => (
                    <MenuItem
                        key={index}
                        label={menu.label}
                        items={menu.items}
                        onItemClick={(item) => handleMenuItemClick(menu.label, item)}
                    />
                ))}
            </div>

            <div className="title-center">
                <div className="title">Lyra</div>
            </div>

            <div className="window-controls">
                <button className="control-button minimize-btn" onClick={handleMinimize}>
                    <MinusOutlined />
                </button>
                <button className="control-button maximize-btn" onClick={handleMaximize}>
                    {isMaximized ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
                </button>
                <button className="control-button close-btn" onClick={handleClose}>
                    <CloseOutlined />
                </button>
            </div>
        </div>
    );
};

export default TitleBar;