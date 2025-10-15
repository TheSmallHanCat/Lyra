import { Layout, Button, Dropdown, Space} from "antd";
import type { MenuProps } from 'antd';
import { FullscreenExitOutlined, FullscreenOutlined, MinusOutlined, CloseOutlined } from '@ant-design/icons';
import {useState} from "react";
import {LightColor , DarkColor} from "../Color/Color.ts";
import { useTranslation } from 'react-i18next';
//import LanguageSelector from '../LanguageSelector/LanguageSelector';

const { Header } = Layout;

const Files: MenuProps['items'] = [
    {
        label: 'New',
        key: 'Files_New',
    },
    {
        label: 'Open...',
        key: 'Files_Open',
    },
    {
        label: 'Open Recent',
        key: 'Files_OpenRecent',
    },
    {
        label: 'Save',
        key: 'Files_Save',
    },
    {
        label: 'Save As...',
        key: 'Files_SaveAs',
    },
    {
        type: 'divider',
    },
    {
        label: 'Import...',
        key: 'Files_Import',
    },
    {
        label: 'Import As Tracks',
        key: 'Files_ImportAsTracks',
    },
    {
        label: 'Export',
        key: 'Files_Export',
    },
];

const Edit:MenuProps['items'] = [
    {
        type: 'group',
        label: 'History',
        key: 'Edit_History',
        children: [
            {
                label: 'Undo',
                key: 'Edit_History_Undo',
            },
            {
                label: 'Redo',
                key: 'Edit_History_Redo',
            },
        ],
    },
    {
        type: 'divider',
    },
    {
        type: 'group',
        label: 'Selection',
        key: 'Edit_Selection',
        children: [
            {
                label: 'Select All',
                key: 'Edit_Selection_SelectAll',
            },
            {
                label: 'Select All Parameters',
                key: 'Edit_Selection_SelectAllParameters',
            },
            {
                label: 'Select Parameters For Notes',
                key: 'Edit_Selection_SelectParametersForNotes',
            },
            {
                label: 'Unselect',
                key: 'Edit_Selection_Unselect',
            },
            {
                label: 'Delete Selection',
                key: 'Edit_Selection_DeleteSelection',
            },
        ],
    },
    {
        type: 'divider',
    },
    {
        type: 'group',
        label: 'Clipboard',
        key: 'Edit_Clipboard',
        children: [
            {
                label: 'Copy',
                key: 'Edit_Clipboard_Copy',
            },
            {
                label: 'Cut',
                key: 'Edit_Clipboard_Cut',
            },
            {
                label: 'Paste',
                key: 'Edit_Clipboard_Paste',
            },
        ],
    },
];

const View:MenuProps['items'] = [
    {
        type: 'group',
        label: 'Arrangement',
        key: 'View_Arrangement',
        children: [
            {
                label: 'Snapping',
                key: 'View_Arrangement_Snapping',
                children: [
                    {
                        label: 'Full Quarter',
                        key: 'View_Arrangement',
                    },
                    {
                        label: '1/1 Quarter',
                        key: 'View_Arrangement',
                    },
                    {
                        label: '1/2 Quarter',
                        key: 'View_Arrangement',
                    },
                    {
                        label: '1/4 Quarter',
                        key: 'View_Arrangement',
                    },
                    {
                        label: '1/6 Quarter',
                        key: 'View_Arrangement',
                    },
                    {
                        label: '1/8 Quarter',
                        key: 'View_Arrangement',
                    },
                    {
                        label: '1/12 Quarter',
                        key: 'View_Arrangement',
                    },
                    {
                        label: '1/24 Quarter',
                        key: 'View_Arrangement',
                    },
                    {
                        label: '1/32 Quarter',
                        key: 'View_Arrangement',
                    },
                    {
                        label: '1/64 Quarter',
                        key: 'View_Arrangement',
                    },
                    {
                        label: '1/128 Quarter',
                        key: 'View_Arrangement',
                    },
                    {
                        label: 'Do Not Snap',
                        key: 'View_Arrangement',
                    },
                    {
                        label: 'Adaptive',
                        key: 'View_Arrangement',
                    },
                ],
            },
        ],
    },
];

const Control:MenuProps['items'] = [
];

const Infer:MenuProps['items'] = [
];

const Project:MenuProps['items'] = [
];

const TitleBar = () => {
    const { t } = useTranslation();

    const [isMaximized, setIsMaximized] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

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

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('Menu clicked:', e.key);
        // 这里可以 dispatch action 或调用命令
    };

    const topMenus = [
        { label: t('menu.file'), items: Files },
        { label: t('menu.edit'), items: Edit },
        { label: t('menu.view'), items: View },
        { label: t('menu.control'), items: Control },
        { label: t('menu.infer'), items: Infer },
        { label: t('menu.project'), items: Project },
    ];

        return(
                <Header style={{
                    background: isDarkMode ? DarkColor.Blue_2 : LightColor.Blue_2,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    alignItems: 'center',
                    display: 'flex',
                    height: 40,
                    padding: 0,
                    paddingLeft: 20,
                    paddingRight: 5,
                    boxSizing: 'border-box',

                    WebkitUserSelect: 'none',
                    userSelect: 'none',

                    WebkitAppRegion: 'drag',
                }}>
                    <Space size={16} style={{ WebkitAppRegion: 'no-drag'}} >
                        {topMenus.map(({ label, items }) =>
                            items && items.length > 0 ? (
                                <Dropdown
                                    key={label}
                                    menu={{ items, onClick: handleMenuClick }}
                                    trigger={['click']}
                                    arrow>
                                    <a onClick={(e) => e.preventDefault()}
                                       style={{color: isDarkMode ? LightColor.Gray_1 : DarkColor.Gray_10,}}>
                                        {label}
                                    </a>
                                </Dropdown>
                            ) : (
                                <span key={label} style={{ opacity: 0.5 }}>{label}</span>
                            )
                        )}
                    </Space>

                    <Button type="text"
                            onClick={toggleTheme}
                            style={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'transparent',
                                border: 'none',
                                fontSize: 16,
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                outline: 'none',
                                fontFamily: 'inherit',
                                zIndex: 1,
                                WebkitAppRegion: 'no-drag',
                                color: isDarkMode ? LightColor.Gray_1 : DarkColor.Gray_10,
                            }}
                            aria-label={t('titleBar.themeToggle')}>
                        Lyra
                    </Button>

                    <div style={{ marginLeft: 'auto', zIndex: 1, WebkitAppRegion: 'no-drag', display: 'flex', alignItems: 'center' }} >
                        <Button type="text" onClick={handleMinimize}
                                style={{color: isDarkMode ? LightColor.Gray_1 : DarkColor.Gray_10,}}
                                aria-label={t('titleBar.minimize')}>
                            <MinusOutlined />
                        </Button>
                        <Button type="text" onClick={handleMaximize}
                                style={{color: isDarkMode ? LightColor.Gray_1 : DarkColor.Gray_10,}}
                                aria-label={isMaximized ? t('titleBar.restoreDown') : t('titleBar.maximize')}>
                            {isMaximized ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
                        </Button>
                        <Button type="text" onClick={handleClose}
                                style={{color: isDarkMode ? LightColor.Gray_1 : DarkColor.Gray_10,}}
                                aria-label={t('titleBar.close')}>
                            <CloseOutlined />
                        </Button>
                    </div>
                </Header>
        );
    };

export default TitleBar;