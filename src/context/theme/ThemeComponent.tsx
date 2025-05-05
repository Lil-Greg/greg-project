import { useContext } from 'react'
import { useThemeContext, useUpdateTheme } from './ThemeContext';

import { MdOutlineNightlight } from 'react-icons/md';
import { LuSunMedium } from 'react-icons/lu';

export default function ThemeComponent() {
    const ThemeContext = useThemeContext();
    const { theme, setTheme } = useContext(ThemeContext);
    useUpdateTheme(theme);

    return (
        <div className={`size-[35px] rounded-full border-solid border-2 p-1 border-slate-900 dark:border-slate-300 hover:cursor-pointer hover:bg-gray-300`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ?
                <MdOutlineNightlight className="size-full" />
                :
                <LuSunMedium className="size-full" />
            }

        </div>

    );
}