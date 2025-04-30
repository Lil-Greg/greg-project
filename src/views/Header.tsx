import { useContext, useEffect } from 'react'
import { useThemeContext } from '../context/theme/ThemeContext';
import { NavLink, Outlet } from 'react-router-dom';
import "./Header.css";
import { MdOutlineNightlight } from 'react-icons/md';
import { LuSunMedium } from 'react-icons/lu';

const routes = [
    {
        path: '/game',
        name: 'Tic Tac Toe',
    },
    {
        path: '/weather',
        name: 'Check Weather',
    },
    {
        path: '/movie',
        name: 'Search Movies',
    }
];

export default function Header() {
    const docEle = document.documentElement;
    const ThemeContext = useThemeContext();
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {

        localStorage.setItem("theme", theme);
        docEle.style.colorScheme = theme;
        docEle.style.backgroundColor = `var(--${theme}-background)`;

    }, [theme]);
    return (
        <>
            <div className={`w-[100%] h-[10vh] header header-${theme} p-2`}>
                <div className='flex flex-row items-center justify-between'>
                    <NavLink
                        to={{
                            pathname: "/"
                        }}
                        className={({ isActive, isPending }) => (`navlink rounded-full ${isPending ? "navlink-pending" : isActive ? `navlink-active` : ""}`)} >
                        <div className="icon size-[55px]">
                            <img
                                src="../../../public/Rizzler.ico"
                                alt="My Picture"
                                className='object-cover rounded-full' />
                        </div>

                    </NavLink>
                    <div className="w-[75%] flex flex-row justify-between">
                        {routes.map((route) =>
                            <NavLink
                                to={route.path}
                                key={route.path}
                                className={({ isActive, isPending }) => (`p-2 rounded-full  ${isActive ? "bg-[#4cbb17]" : isPending && ""}`)}
                            >
                                <div className="w-full overflow-hidden relative">
                                    <p key={route.path} className='routeNavLink'>
                                        {route.name}
                                    </p>
                                </div>
                            </NavLink>
                        )}
                    </div>
                    <div className="themeChange">
                        <div className={`size-[35px] rounded-full border-solid border-2 p-1 border-[var(--${theme}-border)] hover:cursor-pointer hover:bg-gray-300`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            {theme === "dark" ?
                                <MdOutlineNightlight className='size-full' />
                                :
                                <LuSunMedium className='size-full' />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
