import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = ({ items, cart, setCart }) => {

    const addToCart = (id, price, title, description, imgSrc) => {
        const obj = {
            id, price, title, description, imgSrc
        }
        setCart([...cart, obj]);
        console.log(cart);

        toast.success('ITEM ADDED TO THE CART!', {
            position: "top-right",
            autoClose: 1495,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1495}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"/>
            <div className='container mt-5'>
                <div className='row' style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    {
                        items.map((x) => {
                            return (
                                <>
                                    <div key={x.id} className='col-lg-4 col-md-6 col-sm-12 mt-3 text-center prod'>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <Link to={`/product/${x.id}`} style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <img src={x.imgSrc} className="card-img-top" alt="..." />
                                            </Link>
                                            <div className="card-body">
                                                <h5 className="card-title">{x.title}</h5>
                                                <p className="card-text">{x.description}</p>
                                                <button className="btn btn-primary mx-3">{x.price} /-</button>
                                                <button onClick={() => addToCart(x.id, x.price, x.title, x.description, x.imgSrc)}
                                                    className="btn btn-warning">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Products
