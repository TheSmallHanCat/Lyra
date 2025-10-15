import React, { useState } from 'react';
import './LanguageSelector.css';
import i18n from '../../i18n/i18n';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };

  return (
    <div className="language-selector">
      <label htmlFor="language-select">{t('languageSelector.label')}:</label>
      <select id="language-select" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
};

export default LanguageSelector;