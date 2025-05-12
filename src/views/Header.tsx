import { NavLink, Outlet } from 'react-router-dom';
import "./Header.css";
import ThemeComponent from '@/context/theme/ThemeComponent';

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
    },
    {
        path: '/calculator',
        name: 'Calculator'
    }
];

export default function Header() {

    return (
        <>
            <div className={`w-[100%] h-[10vh] header p-2`}>
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
                                    <p key={route.path} className='routeNavLink capitalize'>
                                        {route.name}
                                    </p>
                                </div>
                            </NavLink>
                        )}
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
