import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Pokedex from "./pages/Pokedex"
import PokedexById from "./pages/PokedexById"
import ProtectedRoute from './pages/ProtectedRoute'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoute/>}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokedexById />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
