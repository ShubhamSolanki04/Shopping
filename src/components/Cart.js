import React from 'react'
import { Link } from 'react-router-dom'


const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className='container my-5' style={{width:'50%'}}>
        {
          cart.length == 0 ? (
            <>
            <div className='text-center'>
              <h1>YOUR CART IS EMPTY</h1>
              <Link to={'/'} className='btn btn-warning'>Continue shopping...</Link>
            </div>
            </>
          ):
        cart.map((x) => {
          return (
            <>
              <div className="card mb-3 my-5" style={{ width: '700px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={x.imgSrc} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center">
                      <h5 className="card-title">{x.title}</h5>
                      <p className="card-text">{x.description}</p>
                      <button className="btn btn-primary mx-3">{x.price} /-</button>
                       <button className="btn btn-warning">BUY NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
      {
        cart.length != 0 && 
        <div className='container text-center my-5'>
        <button className='btn btn-primary me-5 '>Checkout</button>
        <button onClick={()=>setCart("")} className='btn btn-success'>Clear Cart</button>
      </div>
      }
      
    </>
  )
}

export default Cart
