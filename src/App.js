import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import SearchItem from './components/SearchItem'
import { items } from './components/Data'
const App = () => {

  const[data,setData] = useState([...items])
  const[cart,setCart] = useState([])
  
  return (
    <div>
      <BrowserRouter>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path='/' element={<Products  cart={cart} setCart={setCart} items={data} />} />
          <Route path='/product/:id' element={<ProductDetail cart={cart} setCart={setCart}/>}/>
          <Route path='/search/:term' element={<SearchItem/>}/>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>

        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
