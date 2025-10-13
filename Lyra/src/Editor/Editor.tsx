import {Layout} from "antd";
import TitileBar from "../Components/TitleBar/TitleBar.tsx";
import Track from "../Components/Track/Track.tsx";

const {Header,Content} = Layout;

const Editor = () => {
    return (
        <Layout style={{
            height: '100%',
            margin: 0,
            padding: 0,
            overflow: 'hidden'
        }}>
            <Header style={{
                display: 'flex',
                alignItems: 'center',
                padding: 0,
                margin: 0,
                height: '30px',
                lineHeight: '30px'
            }}>
                <TitileBar/>
            </Header>
            <Content>
                <Track/>
            </Content>
        </Layout>
    );
};

export default Editor;