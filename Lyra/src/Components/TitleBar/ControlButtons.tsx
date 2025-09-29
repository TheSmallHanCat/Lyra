import './TitleBar.css';
import useControlButtonHandlers from './ControlButton.ts'
import { FullscreenExitOutlined, 
         FullscreenOutlined,
         MinusOutlined,
         CloseOutlined
        } from '@ant-design/icons';

const EditorControlButtons = () => {
    
    const { handleMinimize, handleMaximize, handleClose, isMaximized  } = useControlButtonHandlers();

    return(
    <div className="window-controls">
         <button className="control-button minimize-btn" onClick={handleMinimize} >
            <MinusOutlined />
        </button>
        <button className="control-button maximize-btn" onClick={handleMaximize}>
            {isMaximized ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
        </button>
        <button className="control-button close-btn" onClick={handleClose}>
            <CloseOutlined />
        </button>
    </div>
    )
}

export default EditorControlButtons;