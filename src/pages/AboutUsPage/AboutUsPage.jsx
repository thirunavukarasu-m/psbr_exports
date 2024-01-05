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
        // const timeoutId = setTimeout(() => {
        //   setShowSkeleton(false);
        //   setShowImage(true);
        //   sessionStorage.setItem('bannerInProductPage', 'true');
        // }, 2000);
        setShowSkeleton(false);
        setShowImage(true);
        sessionStorage.setItem('bannerInAboutPage', 'true');
        // return () => clearTimeout(timeoutId);
      };
    }
  }, []);
  const about_us = {
    img: site,
    heading: "PSBR Exports",
    para_one: "PSBR Exports, founded in 2020 and based in Coimbatore, Tamil Nadu, India, is a company that sources, adds value to, and exports high-quality food products. To assure both quality and a competitive price, we procure raw materials directly from their source. Our skilled workforce’s knowledge and competence have allowed us to establish a reputation as one of the most dependable businesses in the food ingredient industry. In terms of Quality, Service, and Customer Satisfaction, our goal is to redefine market standards.",
    para_two: "Through our in-house team of trained professionals, who have demonstrated their talents and expertise for more than 3 years, we ensure that our clients receive the best quality components from their various sources. From procurement through packing, every step of the process is carefully and strictly supervised by our skilled and licensed specialists. We also provide customization in flavour, quantity, and packaging for these items in order to satisfy the various needs of our clients."
  }
  const about_the_founder = {
    img: human,
    heading: "About The Founder",
    para_one: "Our Founder Mr. Vignesh Raj Jawahar, an Engineer by qualification and is a third generation entrepreneur, his roots are from the families business background and experience that spans from Agri products farming, produce, sourcing and distribution. With his rich experience in quality agro product sourcing he guides and leads the key decisions of the procurement process for International trade business.",
    para_two: "PSBR Exports is a trusted exporter of Agro, Agro Allied and Herbal products from India. Founded by experienced industry professionals, PSBR Exports specializes in exporting a wide range of products including fruits, vegetables, spices, cereals, nuts, and Herbal products to countries worldwide. With 3 generations of experience in the industry, we are committed to providing our customers with the highest quality of products and services with a team of dedicated, young, and energetic entrepreneurs. We strive to deliver the best in terms of product quality, customer service, and timely delivery."
  }
  return (
    <>
      <m.div className="about-us-container mt-3 mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        {(!showImage && showSkeleton) && <SkeletonLoader style={{ height: 60 + "vh", width: 100 + "%" }} />}

        {showImage && (
          <m.div className="about-us-banner d-flex align-items-center justify-content-center mb-5"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.4  }}
          >
            <div className="overflow-hidden p-2 mt-5">
              <m.h1 className="fw-bold font-5 text-white"
                animate={{ y: "0" }}
                initial={{ y: "100%" }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                About Us
              </m.h1>
            </div>
          </m.div>
        )}

        <SingleProductInfo product={about_us} index={1} />
        <div className="bg-dark-blue mt-5">
          <SingleProductInfo product={about_the_founder} page={"home"} index={2} />

          <div className="p-5">
            <p>
              PSBR Exports’ main focus is on providing quality, consistency and reliability to our customers. Our team of passionate and energetic professional are committed to source and deliver the best products and services to our customers in a timely and cost-effective manner. Our commitment to quality and customer service has enabled us to establish long-term relationships with our clients and we strive to exceed their expectations with every shipment.
            </p>
            <p>
              As part of PSBR Exports the Herbal products division was established as AGAN HERBALS. At Agan Herbals, we believe that nature is the key to true beauty and health. We are committed to providing products that are 100% natural and herbal, free of harmful chemicals, and are dermatologically tested and safe to use. Our wide range of Hair Care, Skin Care, Health Care, and Oral Care products are made from the finest ingredients, to ensure our customers get the optimal health and beauty they deserve. We are passionate about helping people achieve their health and beauty goals, and make sure we provide the highest quality products and services that exceed customer expectations.
            </p>
          </div>
        </div>
        <div className="mission-and-vision p-5">
          <h1 className='text-center fw-bold'>
            Mission and Vision
          </h1>
          <div className="mv-container d-flex ">
            <div className="mv-content p-4 mt-5">
              <img src={target} alt="" height={70} width={70} />
              <p className='text-dark'>
                Our goal is to provide our consumers with a broad selection of premium goods all under one roof, proudly and passionately, at prices they can afford.
              </p>
            </div>
            <div className="mv-content p-4 mt-5">
              <img src={focus} alt="" height={70} width={70} />
              <p className='text-dark'>
                Delivering the appropriate goods with quality, performance, safety, and reliability at the appropriate time will help us achieve our aim of providing high-quality products that meet international quality standards and satisfy the needs and expectations of our customers.
              </p>
            </div>
          </div>
        </div>
        <div className="why-choose-us-container p-5 mt-5 bg-dark-blue">
          <h1 className='text-dark fw-bold text-center text-white'> Why Choose Us</h1>
          <div className="why-choose-us-cards d-flex mt-5 mb-5">
            <div className="why-choose-us-card p-3 mt-2">
              <img src={world} alt="" height={70} width={70} />
              <p className='text-center'>
                An internal team of qualified and experienced individuals handles sourcing. We make sure that our customers receive premium-quality ingredients from the appropriate sources.
              </p>
            </div>
            <div className="why-choose-us-card p-3 mt-2">
              <img src={tick} alt="" height={70} width={70} />
              <p className='text-center'>
                An internal team of qualified and experienced individuals handles sourcing. We make sure that our customers receive premium-quality ingredients from the appropriate sources.
              </p>
            </div>
            <div className="why-choose-us-card p-3 mt-2">
              <img src={cart} alt="" height={70} width={70} />
              <p className='text-center'>
                An internal team of qualified and experienced individuals handles sourcing. We make sure that our customers receive premium-quality ingredients from the appropriate sources.
              </p>
            </div>
            <div className="why-choose-us-card p-3 mt-2">
              <img src={triangle} alt="" height={70} width={70} />
              <p className='text-center'>
                An internal team of qualified and experienced individuals handles sourcing. We make sure that our customers receive premium-quality ingredients from the appropriate sources.
              </p>
            </div>
          </div>
        </div>
      </m.div>
    </>
  )
}

export default AboutUsPage