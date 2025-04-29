import { createBrowserRouter } from "react-router-dom";
import movieLoader from "./loaders/movie/movieLoader";
import movieSearchLoader from "./loaders/movie/movieSearchLoader";
import { weatherLoader } from "./loaders/weather/weatherLoader";
import TicTacToe from "./views/game/TicTacToe";
import Home from "./views/Home";
import MovieAllTable from "./views/movie/components/MovieAllTable";
import MovieCard from "./views/movie/components/MovieCard";
import MovieSearchError from "./views/movie/components/MovieError";
import { SearchCard } from "./views/weather/components/SearchCard";
import SearchError from "./views/weather/components/SearchError";
import Search from "./views/weather/Search";
import { lazy, Suspense } from "react";
import Loading from "./components/loading";
import Header from "./components/Header";

const MovieSearch = lazy(() => import("./views/movie/MovieSearch"));
// Data Mode

// action Fn is used for POST and Editing DB,
// loader Fn is used for GET-ting stuff.


const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            {
                path: "/",
                index: true,
                element: <Home />
            },
            {
                path: "/game",
                element: <TicTacToe />
            },
            {
                path: "/weather",
                element: <Search />,
                children: [
                    {
                        path: ":q",
                        loader: async ({ params }) => {
                            const q = params.q;

                            if (!q) {
                                throw new Error("q is Undefined");
                            };

                            const data = await weatherLoader(q);
                            return data;
                        },
                        element: <SearchCard />,
                        errorElement: <SearchError />,
                    }
                ]
            },
            {
                path: '/movie',
                element: <MovieSearch />,
                children: [
                    {
                        path: ':title',
                        element: (
                            <Suspense fallback={<Loading />}>
                                <MovieAllTable />
                            </Suspense>
                        ),
                        errorElement: <MovieSearchError />,
                        loader: async ({ params }) => {
                            if (!params.title) {
                                throw Error(`Title is undefined; Title Value: ${params.title}`);
                            }
                            console.log(params.title);
                            console.log("Movie Id from Loader in main.tsx: ", params.movieId);
                            return await movieSearchLoader(params.title);
                        },
                        children: [
                            {
                                path: ':movieId',
                                element: (
                                    <Suspense fallback={<Loading />}>
                                        <MovieCard />
                                    </Suspense>
                                ),
                                errorElement: <MovieSearchError />,
                                loader: async ({ params }) => {
                                    if (!params.movieId) {
                                        throw Error(`Title is undefined; Title Value: ${params.movieId}`);
                                    }
                                    console.log("Movie ID Parameters", params.movieId);
                                    return await movieLoader(params.movieId);
                                }
                            },
                        ]
                    },

                ],
            }
        ]
    },
]);
export default router;