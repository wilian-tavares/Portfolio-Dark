import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const themeMemory = localStorage.getItem("Theme");
        if (themeMemory !== null) {
            return JSON.parse(themeMemory);
        }
        return 'light';
    });

    useEffect(() => {
        localStorage.setItem('Theme', JSON.stringify(theme));
    }, [theme]);

    function ToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, ToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
