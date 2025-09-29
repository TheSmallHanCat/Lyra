import "./TitleBar.css";
import Title from "./Title.tsx";
import EditorControlButtons from "./ControlButtons.tsx";
import EditorMenu from "./Menu.tsx";

const TitleBar = () => {
    return (
        <div className="title-bar-wrapper">
            <EditorMenu/>
            <div className="overlay-content">
                <Title/>
                <div className="editor-controls-overlay">
                    <EditorControlButtons/>
                </div>
            </div>
        </div>
    )
}

export default TitleBar;