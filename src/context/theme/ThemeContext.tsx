// ThemeContext.js
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type Props = {
    children: ReactNode,
};

// Using a placeholder to set the createContext
const ThemeContext = createContext({
    theme: (localStorage.getItem("theme") || window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    toggleTheme: () => { }
});

export const ThemeProvider = ({ children }: Props) => {
    const getInitialTheme = (() => {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark' || stored === 'light') return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    })();

    const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Auto-update if system preference changes and no manual preference is set
    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const listener = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                localStorage.setItem('theme', newTheme);
                setTheme(newTheme);
            }
        };
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, []);

    const toggleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);