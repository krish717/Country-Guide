import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const initialIsDark = JSON.parse(localStorage.getItem('isdarkMode')) || false;
    const [isdark, setIsDark] = useState(initialIsDark);

    return (
        <ThemeContext.Provider value={[isdark, setIsDark]}>
            {children}
        </ThemeContext.Provider>
    );
}
