import { createBrowserRouter } from "react-router-dom";
import movieLoader from "./loaders/movie/movieLoader";
import movieSearchLoader from "./loaders/movie/movieSearchLoader";
import { weatherLoader } from "./loaders/weather/weatherLoader";
import TicTacToe from "./views/game/TicTacToe";
import Home from "./views/index-home/Home";
import MovieSearchRes from "./views/movie/components/MovieSearchRes";
import MovieCard from "./views/movie/components/MovieCard";
import MovieSearchError from "./views/movie/components/MovieError";
import SearchError from "./views/weather/components/SearchError";
import Search from "./views/weather/Search";
import { lazy, Suspense } from "react";
import Loading from "./components/loading";
import Header from "./views/Header";
import MovieSearch from "./views/movie/MovieSearch";

const SearchCard = lazy(() => import("./views/weather/components/SearchCard"));

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
                        element: (
                            <Suspense fallback={<Loading />}>
                                <SearchCard />
                            </Suspense>
                        ),
                        errorElement: <SearchError />,
                    }
                ]
            },
            {
                path: '/movie',
                element: <MovieSearch />,
                errorElement: <MovieSearchError />,
                children: [
                    {
                        path: ':title',
                        element: (
                            <MovieSearchRes />
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
                                    <MovieCard />
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