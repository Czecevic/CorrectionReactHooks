import { useState, createContext } from 'react';


const ThemeContext = createContext();

function ThemeProvider(props) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider 
        value={{ isDark, setIsDark }}
    >
        {props.children}
    </ThemeContext.Provider>
  );
}


export { ThemeContext, ThemeProvider };