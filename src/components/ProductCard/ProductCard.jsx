import React from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <>
            <Link to="/products">
                <div className="product-card">
                    <h3 className='text-center fs-3 pt-2 text-white'>{product.heading}</h3>
                    <img src={product.img} alt="" />
                </div>

            </Link>
        </>
    )
}

export default ProductCard