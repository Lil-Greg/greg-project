import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type Props = {
    children: ReactNode
}

// Do Not Know if this is the most effecient Context usage.

export function useThemeContext() {
    const local = localStorage.getItem("theme") || "dark";

    const [theme, setTheme] = useState(local);

    const ThemeContext = createContext({ theme, setTheme });
    return ThemeContext;
}

export function useUpdateTheme(newTheme: string) {

    const docEle = document.documentElement;

    useEffect(() => {
        localStorage.setItem("theme", newTheme);

        if (newTheme === "light") {
            docEle.style.colorScheme = newTheme;
            docEle.style.backgroundColor = `var(--${newTheme}-background)`;
            docEle.removeAttribute('data-theme');
            docEle.setAttribute('data-theme', newTheme);

        } else {
            docEle.style.colorScheme = newTheme;
            docEle.style.backgroundColor = `var(--${newTheme}-background)`;
            docEle.removeAttribute('data-theme');
            docEle.setAttribute('data-theme', newTheme);
        }
    }, [newTheme]);

}

export default function ThemeProvider({ children }: Props) {
    const ThemeContext = useThemeContext();
    const { theme, setTheme } = useContext(ThemeContext);

    const [storage] = useState(localStorage.getItem("theme"));

    useEffect(() => {
        if (storage === null) {
            return;
        }
        setTheme(storage);
    }, [storage]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
