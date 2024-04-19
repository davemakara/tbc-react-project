import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const useContextLanguage = () => {
  const context = useContext(LanguageContext);
  //   console.log(context);
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
