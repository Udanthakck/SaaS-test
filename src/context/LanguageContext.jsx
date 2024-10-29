import { createContext, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from "prop-types";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export const useLanguage = () => useContext(LanguageContext);
