import React from 'react'
import './ProductsPage.css'
import SingleProductInfo from '../../components/SingleProductInfo/SingleProductInfo'
import black_pepper from '../../assets/products/black-pepper.jpg'
import cardamom from '../../assets/products/cardamom.jpg'
import cinnamon from '../../assets/products/cinnamon.jpg'
import cloves from '../../assets/products/cloves.jpg'
import cumin from '../../assets/products/cumin.jpg'
import red_chilli from '../../assets/products/red-chilli.jpg'
import coriander from '../../assets/products/coriander.jpg'
import tamarind from '../../assets/products/tamarind.jpg'
import turmaric from '../../assets/products/turmaric.jpg'



const ProductsPage = () => {
  const products = [black_pepper,cardamom,cinnamon,cloves,coriander,cumin,red_chilli,tamarind,turmaric]
  return (
    <>
      <div className="products-container p-1 mt-3 mb-5">
        <div className="products-banner d-flex align-items-center justify-content-center">
          <h1 className="fw-bold font-4rem text-white">
            Spices
          </h1>
        </div>
        <div className="products-view p-2">
          {products.map((product)=>{
            return (
              <>
                <SingleProductInfo product={product}/>
              </>
            )
          })}
            
        </div>
      </div>
    </>
  )
}

export default ProductsPage