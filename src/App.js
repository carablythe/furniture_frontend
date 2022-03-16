import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import axios from 'axios'
import HomePage from './pages/Home'

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" />
        <Route path="/cart" />
        <Route path="/admin" />
        <Route path="/products/show" />
      </Routes>
      </Router>
    </>
  )
}


export default App
