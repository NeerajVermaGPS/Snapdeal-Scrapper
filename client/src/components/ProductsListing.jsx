import React from 'react'
import ProductCard from './ProductCard'
import "../styles/ProductCard.css"

export default function ProductsListing({products}) {
  return (
    <>
        <div className="product-card-container center full-w">
        {products.map((product, index) => (
            <ProductCard key={index} product={product} />
        ))}
        </div>
        <div className='center full-w footer-title'>Made with love, By <a href="https://neerajvermagps.infinityfreeapp.com/">Neeraj Verma</a></div>
    </>
  )
}
