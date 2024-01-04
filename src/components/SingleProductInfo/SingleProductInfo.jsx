import React from 'react'
import './SingleProductInfo.css'

const SingleProductInfo = ({product,index}) => {
    return (
        <>
            <div className={index % 2 !== 0 ? "single-product-view-container pt-5": "single-product-view-container pt-5 flex-row-reverse"}>
                <div className="product-img">
                    <img src={product.img} alt="" />
                </div>
                <div className="product-info">
                    <h2 className='orange-text'>
                        {product.heading}
                    </h2>
                    <p>
                        {product.para_one && product.para_one}
                    </p>
                    <p>
                        {product.para_two && product.para_two}
                    </p>
                    <p>
                        {product.para_three && product.para_three}
                    </p>
                </div>
            </div>
        </>
    )
}

export default SingleProductInfo