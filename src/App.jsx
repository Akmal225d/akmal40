import React from 'react'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
const App = () => {
  return (
  <>
  <Header/>
  <Routes>

<Route path='/dabudi' element={<Home />} />

  </Routes>

  </>
  )
}

export default App

