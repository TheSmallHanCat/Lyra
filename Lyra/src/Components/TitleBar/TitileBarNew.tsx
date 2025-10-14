import { Layout,
    Button,
    Dropdown,
    Space,
} from "antd";
import type { MenuProps } from 'antd';
import { FullscreenExitOutlined,
    FullscreenOutlined,
    MinusOutlined,
    CloseOutlined
} from '@ant-design/icons';
import {useState} from "react";


const {Header} = Layout;

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
];

const Control:MenuProps['items'] = [
];

const Infer:MenuProps['items'] = [
];

const Project:MenuProps['items'] = [
];


const TitleBarNew = () => {

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

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('Menu clicked:', e.key);
        // 这里可以 dispatch action 或调用命令
    };

    const topMenus = [
        { label: 'File', items: Files },
        { label: 'Edit', items: Edit },
        { label: 'View', items: View },
        { label: 'Control', items: Control },
        { label: 'Infer', items: Infer },
        { label: 'Project', items: Project },
    ];

    return(
        <Layout>
            <Header style={{
                background: '#e6f4ff',
                position: 'relative',
                top: 0,
                zIndex: 1,
                width: '100%',
                alignItems: 'center',
                display: 'flex',
                height: 40,
                paddingLeft: 20,
                paddingRight: 5,

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
                                arrow
                            >
                                <a onClick={(e) => e.preventDefault()}>{label}</a>
                            </Dropdown>
                        ) : (
                            <span key={label} style={{ opacity: 0.5 }}>{label}</span>
                        )
                    )}
                </Space>

                <Button type="text" onClick={handleMinimize}
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
                        }}
                        aria-label="Toggle theme">
                    Lyra
                </Button>

                <div style={{ marginLeft: 'auto', zIndex: 1, WebkitAppRegion: 'no-drag', }} >
                    <Button type="text" onClick={handleMinimize} >
                        <MinusOutlined />
                    </Button>
                    <Button type="text" onClick={handleMaximize} >
                        {isMaximized ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
                    </Button>
                    <Button type="text" onClick={handleClose}>
                        <CloseOutlined />
                    </Button>
                </div>
            </Header>
        </Layout>
    );
};
export default TitleBarNew;