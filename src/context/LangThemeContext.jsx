import React, { createContext, useState } from "react";

export const LangThemeContext = createContext();

const LangThemeProvider = ({ children }) => {
  const [language, setLanguage] = useState("uz");
  const [darkMode, setDarkMode] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "uz" ? "ru" : "uz"))
  }

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <LangThemeContext.Provider value={{ language, toggleLanguage, darkMode, toggleDarkMode }}>
      {children}
    </LangThemeContext.Provider>
  )
}

export default LangThemeProvider;
