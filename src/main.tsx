import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home.tsx'
import TicTacToe from './views/game/TicTacToe.tsx'
import Search from './views/weather/Search.tsx';
import { weatherLoader } from './loaders/weather/weatherLoader.ts';
import { SearchCard } from './views/weather/components/SearchCard.tsx';
// import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import SearchError from './views/weather/components/SearchError.tsx';
import MovieSearch from './views/movie/MovieSearch.tsx';
import movieSearchLoader from './loaders/movie/movieSearchLoader.ts';
import MovieSearchError from './views/movie/components/MovieError.tsx';
import MovieCard from './views/movie/components/MovieCard.tsx';
import MovieAllTable from './views/movie/components/MovieAllTable.tsx';
import movieLoader from './loaders/movie/movieLoader.ts';

//Assigning Global Options
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: Infinity,
//     }
//   }
// });

// Data Mode

// action Fn is used for POST and Editing DB,
// loader Fn is used for GET-ting stuff.
const router = createBrowserRouter([
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
        element: <MovieAllTable />,
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
            path: '/movie/:title/:movieId',
            element: <MovieCard />,
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
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <RouterProvider router={router} />
    {/* </QueryClientProvider> */}
  </StrictMode>,
)
