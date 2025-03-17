import { createContext, useState, useEffect } from "react";


export const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {
  
  const [language, setLanguage] = useState("en"); 
  const [textData, setTextData] = useState({});   


  useEffect(() => {
    fetch(`/data/${language}.json`)
      .then((res) => res.json())
      .then((data) => setTextData(data))
      .catch((error) => console.error("Error cargando el idioma:", error));
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, textData }}>
      {children}
    </LanguageContext.Provider>
  );
};
