import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home.tsx'
import TicTacToe from './views/game/TicTacToe.tsx'
import Search from './views/weather/Search.tsx';
import { weatherLoader } from './loaders/weatherLoader.ts';
import { SearchCard } from './views/weather/components/SearchCard.tsx';
// import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import SearchError from './views/weather/components/SearchError.tsx';

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
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <RouterProvider router={router} />
    {/* </QueryClientProvider> */}
  </StrictMode>,
)
