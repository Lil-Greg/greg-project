import { createContext, ReactNode, useContext, useState } from 'react'

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

// export function useUpdateTheme(newTheme: string) {
//     const ThemeContext = useThemeContext();
//     const { setTheme } = useContext(ThemeContext);
//     setTheme(newTheme);
// }

export default function ThemeProvider({ children }: Props) {
    const ThemeContext = useThemeContext();
    const { theme, setTheme } = useContext(ThemeContext);

    const docEle = document.documentElement;
    docEle.style.colorScheme = theme;
    docEle.style.backgroundColor = `var(--${theme}-background)`;

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
