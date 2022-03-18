import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'
import HomePage from './pages/Home'
import Products from './pages/Products'
import ShowItem from './pages/ShowItem'
import Cart from './pages/Cart'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {

  
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/ShowItem" element={<ShowItem/>}/>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/admin" />
          </Routes>
        </Router>
   </>
  )
}

export default App
