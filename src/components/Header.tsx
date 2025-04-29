import { useContext } from 'react'
import { useThemeContext } from '../context/theme/ThemeContext';

export default function Header() {
    const ThemeContext = useThemeContext();
    const { theme, setTheme } = useContext(ThemeContext);
    console.log("Theme Values", theme, setTheme);
    return (
        <div className='w-[100vw] h-[auto]'>

        </div>
    )
}
