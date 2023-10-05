import { createContext, useState } from 'react';


export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme ] = useState('light')

    function ToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
      console.log(theme)
      }
   

    return (
        <ThemeContext.Provider value={{theme, ToggleTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}