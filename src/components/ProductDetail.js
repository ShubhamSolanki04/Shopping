import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Products from './Products'

const ProductDetail = ({cart ,setCart}) => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [relatedProduct, setRelatedProduct] = useState([])

  const addToCart = (id,price,title,description,imgSrc)=>{
    const obj = {
      id,price,title,description,imgSrc
    }
    setCart([...cart,obj])
  }

  useEffect(() => {
    const filterProduct = items.filter((x) => x.id == id)
    //console.log(filterProduct);
    setProduct(filterProduct[0])
    const relatedProducts = items.filter((p) => p.category === product.category)
    //console.log(relatedProducts);
    setRelatedProduct(relatedProducts);
  }, [id, product.category])
  return (
    <>
      <div className='container con '>
        <div className='img'>
          <img src={product.imgSrc} />
        </div>
        <div className='text-center'>
          <h1 class="card-title">{product.title}</h1>
          <p class="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} /-</button>
          <button onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.imgSrc)} className="btn btn-warning">Add to cart</button>
        </div>
      </div>
      <h1 className='text-center'>Related products</h1>
      <Products items={relatedProduct} />

    </>
  )
}

export default ProductDetail
