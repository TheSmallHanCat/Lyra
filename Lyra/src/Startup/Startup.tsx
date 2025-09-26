import './Startup.css';

const Startup = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="team">Isogelun</div>
            </div>
            <div className="content">
                <h1>Lyra</h1>
            </div>
            <div className="status-container">
                <div className="spinner"></div>
                <div className="statustext" id="statustext">Loading...</div>
            </div>
        </div>
    );
};

export default Startup