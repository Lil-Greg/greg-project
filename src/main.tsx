import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home.tsx'
import TicTacToe from './views/game/TicTacToe.tsx'
import Search from './views/weather/Search.tsx';
import { weatherLoader } from './loaders/WeatherLoader.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/game",
    element: <TicTacToe />
  },
  {
    path: "/weather",
    element: <Search />,
    loader: weatherLoader,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
