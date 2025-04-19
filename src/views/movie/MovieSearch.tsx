import React, { useRef } from 'react'
import { MagnifyingGlass } from '../../assets/MagnifyingGlass'
import { Outlet, Form as ReactRouterForm, useNavigate, useParams } from 'react-router-dom';
import MovieAllTable from './components/MovieAllTable';

export default function MovieSearch() {
    const params = useParams();
    const movieRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (movieRef === null || movieRef.current === null) {
            throw Error(`Movie Title (the useRef) is null; The Value: ${movieRef}`);
        }

        return navigate(`/movie/${movieRef.current?.value}`);
    }
    return (
        <div className="size-full h-[100vh] flex flex-col place-items-center">
            <div className="flex flex-col items-center w-[100vw]">
                <h1 className='text-[3rem] underline underline-offset-[6px]'>Movie</h1>
            </div>
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
                        id="search"
                        name="search"
                        list="movie-list"
                        ref={movieRef}
                        className="block w-[50vw] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Movie"
                        required
                    />

                    <button
                        type="submit"
                        className="capitalize text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                                focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                                hover:ease-in-out hover:animate-(--buttonHover)"
                    >
                        Search
                    </button>

                    <datalist id="movie-list">

                    </datalist>
                </div>

            </ReactRouterForm>

            <div className="container">
                {params.title && <Outlet />}
            </div>
        </div>
    )
}
