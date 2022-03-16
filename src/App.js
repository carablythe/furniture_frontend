import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
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
