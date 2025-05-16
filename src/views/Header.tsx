import { NavLink, Outlet } from 'react-router-dom';
import "./Header.css";
import ThemeComponent from '@/context/theme/ThemeComponent';

import { FcCalculator } from "react-icons/fc";
import { FcCamcorderPro } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { GiTicTacToe } from "react-icons/gi";
import CurrentWeather from '@/components/currentWeather';

const navlink = [
    {
        path: '/game',
        icon: <GiTicTacToe className='size-full' />,
        name: 'Tic Tac Toe',
    },
    {
        path: '/weather',
        icon: <FcGlobe className='size-full' />,
        name: 'Check Weather',
    },
    {
        path: '/movie',
        icon: <FcCamcorderPro className='size-full' />,
        name: 'Search Movies',
    },
    {
        path: '/calculator',
        icon: <FcCalculator className='size-full' />,
        name: 'Calculator'
    }
];

export default function Header() {

    return (
        <>
            <div className='w-[100%] h-[10dvh] header p-2 border-solid border-b-1 border-slate-600'>
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
                        {navlink.map((link) =>
                            <NavLink
                                to={link.path}
                                key={link.path}
                                className={({ isActive, isPending }) => (`p-2 rounded-full  ${isActive ? "bg-[#4cbb17]" : isPending && ""}`)}
                            >
                                <div className="w-full overflow-hidden relative">
                                    <span className='flex flex-row items-center gap-2'>
                                        <span className='size-[25px]'>
                                            {link.icon}
                                        </span>
                                        <p key={link.path} className='routeNavLink capitalize'>
                                            {link.name}
                                        </p>
                                    </span>


                                </div>
                            </NavLink>
                        )}
                    </div>
                    <div className='size-[3dvw]' id="currentWeather">
                        <CurrentWeather />
                    </div>
                    <div className="themeChange">
                        <ThemeComponent />
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
