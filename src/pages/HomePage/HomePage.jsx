import React from 'react'
import './HomePage.css'
import Banner from '../../components/Banner/Banner'
import SingleProductInfo from '../../components/SingleProductInfo/SingleProductInfo'
import ship from '../../assets/ship_portrait.jpg'
import black_pepper from '../../assets/products/black-pepper.jpg'
import cardamom from '../../assets/products/cardamom.jpg'
import cinnamon from '../../assets/products/cinnamon.jpg'
import cloves from '../../assets/products/cloves.jpg'
import cumin from '../../assets/products/cumin.jpg'
import red_chilli from '../../assets/products/red-chilli.jpg'
import coriander from '../../assets/products/coriander.jpg'
import tamarind from '../../assets/products/tamarind.jpg'
import turmaric from '../../assets/products/turmaric.jpg'
import ProductCard from '../../components/ProductCard/ProductCard'
const HomePage = () => {
  const products = [
    {
      heading: "Black Pepper",
      img: black_pepper
    },
    {
      heading: "Cardamom",
      img: cardamom
    },
    {
      heading: "Cinnamon",
      img: cinnamon
    },
    {
      heading: "Cloves",
      img: cloves
    },
    {
      heading: "Cumin",
      img: cumin
    },
    {
      heading: "Red Chilli",
      img: red_chilli
    },
    {
      heading: "Coriander",
      img: coriander
    },
    {
      heading: "Tamarind",
      img: tamarind
    },
    {
      heading: "Turmaric",
      img: turmaric
    },
  ]
  return (
    <>
      <Banner />
      <h1 className='text-center pt-5'> Who we are</h1>
      <SingleProductInfo product={ship} />
      <h2 className='text-center pt-5'> Explore </h2>
      <h1 className='text-center pt-4'> Our Products </h1>
      <div className="products-card-container d-flex pt-4 mb-5">
        {
          products.map((product)=>{
            return(
              <>
                <ProductCard product={product}/>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default HomePage