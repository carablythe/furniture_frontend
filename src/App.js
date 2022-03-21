import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'
import HomePage from './pages/Home'
import Products from './pages/Products'
import ShowItem from './pages/ShowItem'
import Cart from './pages/Cart'
import LoginPage from './pages/Login'
import Add from './components/Add'
import Edit from './components/Edit'
import About from './pages/About'

const App = () => {


  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/admin" />
        <Route path="/:id" element={<ShowItem/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </Router>

   </>
  )
}

export default App
