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
import nutmeg from '../../assets/products/nutmeg.jpg'
import { motion as m } from 'framer-motion'
import HeadingDecorator from '../../components/HeadingDecorator/HeadingDecorator'

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
      heading: "Turmeric",
      img: turmaric
    },
    {
      heading: "Nutmeg",
      img: nutmeg
    },
  ]
  const psbr_exports = {
    img: ship,
    heading: "PSBR Exports",
    para_one: "PSBR Exports is a trailblazer in the world of international trade, having started a journey driven by enthusiasm and conviction. It has become an important force for companies looking to source premium quality  products from the interior's of India. Our steadfast commitment to quality drives us to provide not only products but also unmatched services that serve as the foundation for our clients' success and expansion. At PSBR Exports, we craft a flawless experience for our clients, becoming more than just providers. We are success architects. With a wealth of experience in both international trade and finding premium products, our seasoned team of maestros takes on the task of transforming goals into reality. In the enormous field of international trade, we see ourselves as catalysts rather than just facilitators for our customers. From meticulously selecting the finest products to ensuring precision in delivery, our commitment resonates through every step, ensuring a partnership founded on trust and reliability.",
    para_two: "As the conduit between aspiration and accomplishment, PSBR Exports is not just a business; it's a philosophy that redefines standards. Join us on this transformative journey, where innovation meets tradition, and together, we unleash boundless possibilities for growth and success."
  }
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.4 }}
      >
        <div className="overflow-hidden">
          <Banner />
        </div>
        <div className='pb-5'>
          <SingleProductInfo product={psbr_exports} page={{ type: "normal", text: "Who we are" }} />
        </div>
        <div className="bg-light p-3 mt-5 pb-5">
          <div className="d-flex justify-content-center">
            <HeadingDecorator page={{ type: "normal", text: "Explore" }} />
          </div>
          <h1 className='text-center pt-4 blue-text font-40-px'> Our Products </h1>
          <div className="products-card-container d-flex pt-4 mb-5">
            {
              products.map((product, index) => {
                return (
                  <>
                    <ProductCard product={product} index={index} />
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