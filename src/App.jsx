import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Checkout from './Checkout'
import ProtectedRoute from './ProtectedRoute'



const App = () => {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("isLoggedIn")) || false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoute isLoggedIn={user} />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App