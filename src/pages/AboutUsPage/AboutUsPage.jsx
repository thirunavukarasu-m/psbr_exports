import React, { useEffect, useState } from 'react'
import './AboutUsPage.css'
import SingleProductInfo from '../../components/SingleProductInfo/SingleProductInfo'
import human from '../../assets/about-us-human.jpg'
import site from '../../assets/about-us-people.jpg'
import focus from '../../assets/focus.png'
import target from '../../assets/eye.png'
import cart from '../../assets/cart.png'
import tick from '../../assets/tick.png'
import triangle from '../../assets/triangle.png'
import world from '../../assets/world.png'
import about_us_ship from "../../assets/about-us-ship.jpg"
import { motion as m } from 'framer-motion'
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader'
import HeadingDecorator from '../../components/HeadingDecorator/HeadingDecorator'

const AboutUsPage = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const imageAlreadyLoaded = sessionStorage.getItem('bannerInAboutPage');
    if (imageAlreadyLoaded) {
      setShowSkeleton(false);
      setShowImage(true);
    } else {
      const image = new Image();
      image.src = about_us_ship;
      image.onload = () => {
        const timeoutId = setTimeout(() => {
          setShowSkeleton(false);
          setShowImage(true);
          sessionStorage.setItem('bannerInAboutPage', 'true');
        }, 2000);
        return () => clearTimeout(timeoutId);
      };
    }
  }, []);
  const about_us = {
    img: site,
    heading: "PSBR Exports",
    para_one: "PSBR Exports is a trailblazer in the world of international trade, having started a journey driven by enthusiasm and conviction. It has become an important force for companies looking to source premium quality  products from the interior's of India. Our steadfast commitment to quality drives us to provide not only products but also unmatched services that serve as the foundation for our clients' success and expansion. At PSBR Exports, we craft a flawless experience for our clients, becoming more than just providers. We are success architects. With a wealth of experience in both international trade and finding premium products, our seasoned team of maestros takes on the task of transforming goals into reality. In the enormous field of international trade, we see ourselves as catalysts rather than just facilitators for our customers. From meticulously selecting the finest products to ensuring precision in delivery, our commitment resonates through every step, ensuring a partnership founded on trust and reliability.",
    para_two: "As the conduit between aspiration and accomplishment, PSBR Exports is not just a business; it's a philosophy that redefines standards. Join us on this transformative journey, where innovation meets tradition, and together, we unleash boundless possibilities for growth and success."
  }
  
  const about_the_founder = {
    img: human,
    heading: "About The Founder",
    para_one: "Perarul Selvan and Balaji Ramanathan, the founders of PSBR Exports, both hail from a distinguished background in International Business. Their academic prowess and practical experience provide them with a robust foundation in the intricacies of international trade. With a deep understanding of export operations and international business dynamics, Perarul Selvan and Balaji Ramanathan are committed to leveraging their expertise to propel PSBR Exports to new heights in the global marketplace",
    para_two: "PSBR Exports is a trusted exporter of Agro, Agro Allied and Spices from India. Founded by experienced industry professionals, PSBR Exports specializes in exporting a wide range of products including fruits, vegetables, spices, cereals and nuts to countries worldwide. We strive to deliver the best in terms of product quality, customer service, and timely delivery."
  }
  return (
    <>
      <m.div className="about-us-container overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.4 }}
      >
        {(!showImage && showSkeleton) && <SkeletonLoader style={{ height: 60 + "vh", width: 100 + "%" }} />}

        {showImage && (
          <div className="overflow-hidden">
            <m.div className="about-us-banner d-flex align-items-center justify-content-center mb-5"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            >
              <div className="overflow-hidden p-2 mt-5">
                <m.h1 className="fw-bold font-5 text-white text-center"
                  animate={{ y: "0" }}
                  initial={{ y: "100%" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  About Us
                </m.h1>
              </div>
            </m.div>
          </div>
        )}

        <SingleProductInfo product={about_us} index={1} page={{ type: "normal", text: "We are" }} />
        <div className="bg-dark-blue mt-5 overflow-hidden">
          <SingleProductInfo product={about_the_founder} page={{ type: "about_founder", text: "Founder" }} index={2} />
        </div>
        <div className="mission-and-vision p-5">
          <div className="w-100 d-flex justify-content-center">
            <HeadingDecorator page={{ type: "normal", text: "Our" }} />
          </div>
          <h1 className='text-center fw-bold'>
            Mission and Vision
          </h1>
          <div className="mv-container d-flex ">
            <m.div className="mv-content p-4 mt-5"
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              transition={{ duration: 0.3, ease: "easeIn", delay: 0.7 }}
              viewport={{ once: true }}
            >
              <img src={target} alt="" height={70} width={70} />
              <p className='text-dark'>
                Our goal is to provide our consumers with a broad selection of premium goods all under one roof, proudly and passionately, at prices they can afford.
              </p>
            </m.div>
            <m.div className="mv-content p-4 mt-5"
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              transition={{ duration: 0.3, ease: "easeIn", delay: 0.7 }}
              viewport={{ once: true }}

            >
              <img src={focus} alt="" height={70} width={70} />
              <p className='text-dark'>
                Delivering the appropriate goods with quality, performance, safety, and reliability at the appropriate time will help us achieve our aim of providing high-quality products that meet international quality standards and satisfy the needs and expectations of our customers.
              </p>
            </m.div>
          </div>
        </div>
        <div className="why-choose-us-container p-5 mt-5 bg-dark">
        <div className="w-100 d-flex justify-content-center">
            <HeadingDecorator page={{ type: "normal", text: "We stand out From the rest" }} />
          </div>
          <h1 className='text-dark fw-bold text-center text-white'> Why Choose Us</h1>
          <div className="why-choose-us-cards d-flex mt-5 mb-5">
            <div className="overflow-hidden p-1">
              <m.div className="why-choose-us-card p-3 mt-2"
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
              >
                <img src={world} alt="" height={70} width={70} />
                <p className='text-center'>
                  An internal team of qualified and experienced individuals handles sourcing. We make sure that our customers receive premium-quality ingredients from the appropriate sources.
                </p>
              </m.div>
            </div>
            <div className="overflow-hidden p-1">
              <m.div className="why-choose-us-card p-3 mt-2"
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 0.3, ease: "easeIn", delay: 0.5 }}
              >
                <img src={tick} alt="" height={70} width={70} />
                <p className='text-center'>
                  An internal team of qualified and experienced individuals handles sourcing. We make sure that our customers receive premium-quality ingredients from the appropriate sources.
                </p>
              </m.div>
            </div>
            <div className="overflow-hidden p-1">
              <m.div className="why-choose-us-card p-3 mt-2"
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 0.3, ease: "easeIn", delay: 1 }}
              >
                <img src={cart} alt="" height={70} width={70} />
                <p className='text-center'>
                  An internal team of qualified and experienced individuals handles sourcing. We make sure that our customers receive premium-quality ingredients from the appropriate sources.
                </p>
              </m.div>
            </div>
            <div className="overflow-hidden p-1">
              <m.div className="why-choose-us-card p-3 mt-2"
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 0.3, ease: "easeIn", delay: 1.5 }}
              >
                <img src={triangle} alt="" height={70} width={70} />
                <p className='text-center'>
                  An internal team of qualified and experienced individuals handles sourcing. We make sure that our customers receive premium-quality ingredients from the appropriate sources.
                </p>
              </m.div>
            </div>
          </div>
        </div>
      </m.div>
    </>
  )
}

export default AboutUsPage