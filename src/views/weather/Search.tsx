import React, { useRef } from "react";
import { Outlet, Form as ReactRouterForm, useNavigate, useParams } from "react-router-dom";
import { cities } from "./list/SearchList";
import { MagnifyingGlass } from "../../assets/MagnifyingGlass.tsx";

export default function Search() {
    const cityRef = useRef<HTMLInputElement>(null);
    const daysRef = useRef<HTMLInputElement>(null);

    const params = useParams();
    const navigate = useNavigate();

    const handleSelectOnChange = () => {
        if (!params.q) {
            return;
        }
        if (daysRef === null || daysRef.current === null) {
            // I want to make a 404 state in the Search Card.
            // Or maybe a separate component
            throw new Response("City ref has No Value", { status: 404 });
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (cityRef === null || cityRef.current === null) {
            // I want to make a 404 state in the Search Card.
            // Or maybe a separate component
            throw new Response("City ref has No Value", { status: 404 });
        } else if (daysRef === null || daysRef.current === null) {
            throw new Response("City ref has No Value", { status: 404 });
        }

        let city = cityRef.current.value;
        city = encodeURIComponent(city);

        let days = daysRef.current.value;

        return navigate(`/weather/${city}/${days}`);
    }
    return (
        <>
            <div className="size-full h-[100vh] flex flex-col place-items-center">
                <div className="w-[75vw] flex flex-col place-items-center gap-2">
                    <h1 className="text-center underline leading-[2]">Weather</h1>
                    <ReactRouterForm
                        onSubmit={handleSubmit}
                        method="GET"
                        className="relative w-[50vw] h-10vh flex flex-col items-center gap-1"
                    >
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <MagnifyingGlass />
                            </div>
                            <input
                                type="search"
                                id="q"
                                name="q"
                                list="weather-city-list"
                                ref={cityRef}
                                className="block w-[50vw] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search City"
                                required
                            />
                            <button
                                type="submit"
                                className="capitalize text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Search
                            </button>

                            <datalist id="weather-city-list">
                                {cities.map((city, index) => (
                                    <option value={city} key={index}>
                                        {city}
                                    </option>
                                ))}
                            </datalist>
                        </div>

                        <div className="flex flex-col items-center">
                            <input
                                type="number"
                                ref={daysRef}
                                min={0}
                                max={14}
                                placeholder="Forecast Days"
                                className="block w-[20vw] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                    </ReactRouterForm>
                    {params.q && <Outlet />}
                </div>
            </div>
        </>
    );
}