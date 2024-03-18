import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { FaCartShopping } from "react-icons/fa6";


const Navbar = ({ setData, cart }) => {

  const location = useLocation()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const filterByCategory = (category) => {
    const element = items.filter((x) => x.category === category)
    // console.log(element);
    setData(element)
  }

  const filterByPrice = (price) => {
    const element = items.filter((x) => x.price <= price)
    setData(element)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }
  return (
    <>
      <div className='nav-bar'>
        <Link to={'/'} className='brand'>E-cart</Link>

        <form onSubmit={handleSubmit} className='search-bar'>
          <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="search" />
        </form>

        <Link to={'/cart'} className='cart'>
          <button type="button" className="btn btn-primary position-relative">
          <FaCartShopping style={{fontSize:'1.5rem'}} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
            </span>
          </button>
        </Link>
      </div>
      {
        location.pathname == '/' && (
          <div className='nav-bar-wrapper'>
            <div onClick={() => setData(items)} className='items'>All Products</div>
            <div onClick={() => filterByCategory('mobiles')} className='items'>Mobiles</div>
            <div onClick={() => filterByCategory('laptops')} className='items'>Laptop</div>
            <div onClick={() => filterByCategory('tablets')} className='items'>Tablets</div>
            <div onClick={() => filterByPrice(30000)} className='items'>U-30000</div>
            <div onClick={() => filterByPrice(50000)} className='items'>U-50000</div>
            <div onClick={() => filterByPrice(90000)} className='items'>U-90000</div>
            <div onClick={() => filterByPrice(70000)} className='items'>U-70000</div>
          </div>
        )
      }

    </>
  )
}


export default Navbar
