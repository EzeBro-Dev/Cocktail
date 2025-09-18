import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router"
import Home from './pages/home'
import About from './pages/about'
import Training from './pages/training'
import SingleCocktail from './pages/singleCocktail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/about'  element={<About />} />
          <Route path='/training'  element={<Training />} />
          <Route path='/singleCocktail/:cockTailId'  element={<SingleCocktail />} />
        </Routes>
    </>
  )
}

export default App