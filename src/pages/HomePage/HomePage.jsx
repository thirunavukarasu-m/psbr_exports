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
import { motion as m } from 'framer-motion'

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
      heading: "Red chilli",
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
  const psbr_exports = {
    img: ship,
    heading: "PSBR Exports",
    para_one: "JVR Exports is one of the leading suppliers and exporters of quality products from India. We strive to provide our customers with superior products and reliable services that help them in their business growth and success. Our team of experienced specialists are committed to providing solutions that meet all of our customers’ needs, from sourcing the best products to delivering them on time and with committed accuracy.",
    para_two: "With our in depth knowledge and expertise in the quality products sourcing and in the International trade, we are confident that we can make a difference and help our customers to grow and succeed."
  }
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut",delay:0.4 }}
      >
        <div className="overflow-hidden">
          <Banner />
        </div>
        <div className='pb-5' style={{ backgroundColor: "#004A8D" }}>
          <h1 className='text-center pt-5 orange-color text-white fs-1 fw-bold'> Who we are</h1>
          <SingleProductInfo product={psbr_exports} page={"home"} />
        </div>
        <div className="bg-light p-3 mt-5 pb-5">
          <h2 className='text-center pt-5 blue-text fs-1'> Explore </h2>
          <h1 className='text-center pt-4 blue-text fs-1'> Our Products </h1>
          <div className="products-card-container d-flex pt-4 mb-5">
            {
              products.map((product) => {
                return (
                  <>
                    <ProductCard product={product} />
                  </>
                )
              })
            }
          </div>
        </div>
      </m.div>
    </>
  )
}

export default HomePage