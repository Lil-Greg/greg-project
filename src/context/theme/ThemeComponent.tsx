import { MdOutlineNightlight } from 'react-icons/md';
import { LuSunMedium } from 'react-icons/lu';
import { useTheme } from './ThemeContext';

export default function ThemeComponent() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            className={`size-[35px] rounded-full border-solid border-2 p-1 border-slate-950 dark:border-slate-400 hover:cursor-pointer hover:bg-gray-300`}
            onClick={toggleTheme}
        >
            {theme === "dark" ?
                <MdOutlineNightlight className="size-full" />
                :
                <LuSunMedium className="size-full" />
            }

        </div>

    );
}