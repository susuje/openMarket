import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Cart from './pages/Cart/Cart'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Payment from './pages/Payment/Payment'
import SellerCenter from './pages/SellerCenter/SellerCenter'
import ProductUpload from './pages/ProductUpload/ProductUpload'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:product_id" element={<ProductDetail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/center" element={<SellerCenter />} />
        <Route path="/productUpload" element={<ProductUpload />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
