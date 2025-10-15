import './Startup.css';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../Components/LanguageSelector/LanguageSelector';

const Startup = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <LanguageSelector />
            <div className="header">
                <div className="team">{t('startup.team')}</div>
            </div>
            <div className="content">
                <h1>{t('startup.title')}</h1>
            </div>
            <div className="status-container">
                <div className="spinner"></div>
                <div className="statustext" id="statustext">{t('startup.loading')}</div>
            </div>
        </div>
    );
};

export default Startup;