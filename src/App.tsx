import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Login from './views/auth/Login'
import Register from './views/auth/Register'
import TicTacToe from './views/game/TicTacToe'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/game' element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
