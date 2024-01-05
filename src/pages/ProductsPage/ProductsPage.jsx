import React, { useEffect, useState } from 'react'
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
import { useLocation } from 'react-router-dom'
import { motion as m } from 'framer-motion'
import spices_common from "../../assets/spices_common.jpg"
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader'




const ProductsPage = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const elementId = location.hash.substring(1);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (!elementId) {
      window.scrollTo(0, 0);
    }
    const imageAlreadyLoaded = sessionStorage.getItem('bannerInProductPage');
    if (imageAlreadyLoaded) {
      setShowSkeleton(false);
      setShowImage(true);
    } else {
      const image = new Image();
      image.src = spices_common;
      image.onload = () => {
        // const timeoutId = setTimeout(() => {
        //   setShowSkeleton(false);
        //   setShowImage(true);
        //   sessionStorage.setItem('bannerInProductPage', 'true');
        // }, 2000);
        // return () => clearTimeout(timeoutId);
        setShowSkeleton(false);
        setShowImage(true);
        sessionStorage.setItem('bannerInProductPage', 'true');
      };
    }
  }, []);
  const products = [
    {
      img: black_pepper,
      heading: "Black Pepper",
      para_one: "Exporter and supplier of Black Pepper from India.",
      para_two: "Black pepper is considered the ‘King of Spices.This spice is traded extensively and is a common ingredient in most world cuisines.",
      para_three: "Black pepper is a highly sought-after spice that is widely used in cuisine across the globe. As the most traded spice in the world, black pepper has earned its place in kitchens around the world for its distinctive spicy flavour, which is derived from the compound piperine. Unlike the heat found in chilli peppers, the spiciness of black pepper is unique and adds a bold taste to dishes. PSBR Exports is proud to offer premium-quality black pepper to customers worldwide."
    },
    {
      img: cardamom,
      heading: "Cardamom",
      para_one: "Exporter and supplier of Cardamom from India.",
      para_two: "Cardamom is usually green in colour and has a strong aromatic flavour. Cardamom is known as an exotic spice, and its existence dates back to the existence of mankind.",
      para_three: "Discover the captivating flavour of Cardamom with Pro Exports! This spice is extracted from the seeds of plants in the Elettaria and Amomum genera and is widely cultivated in the Indian subcontinent and Indonesia. Immerse your senses in the aromatic and irresistible taste of Cardamom and elevate your culinary creations to new heights!"
    },
    {
      img: cinnamon,
      heading: "Cinnamon",
      para_one: "Exporter and supplier of Cinnamon from India.",
      para_two: "Cinnamon is a spice obtained from the inner bark of several tree species in the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, including sweet and savoury dishes, breakfast cereals, snack foods, bagels, teas, hot chocolate, and traditional foods.",
      para_three: "Cinnamon, derived from the inner bark of Cinnamomum trees, is a highly sought-after spice for its aromatic and flavorful properties. It is widely used in various cuisines across the world, from sweet and savoury dishes to teas, breakfast cereals, and traditional foods, adding an extra touch of flavour to each and every meal. Whether whole or ground, Cinnamon is an essential ingredient for any kitchen, making it a top export for PSBR Exports."
    },
    {
      img: cloves,
      heading: "Cloves",
      para_one: "Exporter and supplier of Cloves from India.",
      para_two: "Cloves are the dried flowers of the clove tree. Native to the Spice Islands near China, cloves spread throughout Europe and Asia during the late Middle Ages as an important part of local cuisine.",
      para_three: "Clove, a popular spice known for its strong, sweet, and slightly bitter flavour, is derived from the dried flower bud of the tropical evergreen tree Syzygium aromaticum. Belonging to the myrtle family, this tree is native to the Indonesian islands and provides essential oil, which is a key ingredient in many dishes. Whether whole or ground, clove adds a unique aroma and taste to cuisines worldwide."
    },
    {
      img: coriander,
      heading: "Coriander",
      para_one: "Exporter and supplier of Coriander from India.",
      para_two: "Coriander seeds contain antioxidants and anti-inflammatory compounds that can help reduce inflammation in the body, which can lead to a number of health benefits. Coriander seeds contain high levels of antioxidants, which help protect cells from damage caused by harmful free radicals.",
      para_three: "Coriander, also known as cilantro or Chinese parsley, is a feathery annual plant belonging to the parsley family. It’s native to the Mediterranean and Middle East regions but widely cultivated globally for its culinary uses as both an herb and a spice. Get ready to add a touch of freshness to your dishes with PSBR Exports’ top-quality coriander!"
    },
    {
      img: cumin,
      heading: "Cumin",
      para_one: "Exporter and supplier of Cumin from India.",
      para_two: "India is the chief producer and consumer of cumin seeds. Studies show that India consumes almost 63% of the cumin available globally. In India, these seeds are referred to as jeera.” The seeds are usually yellow-brown in colour and possess numerous health benefits.",
      para_three: "Cumin is a popular spice that comes from the dried seeds of the Cuminum cyminum herb, a member of the parsley family. The cumin plant grows tall and is harvested by hand, reaching heights of 30–50 cm. It’s an annual plant with a slender and smooth stem that grows to 20–30 cm with a diameter of 1 1/4–2 inches. The plant has branches and is an important ingredient in adding flavour to a variety of dishes, from spicy curries to warm soups."
    },
    {
      img: red_chilli,
      heading: "Red chilli",
      para_one: "Exporter and supplier of Red chillies from India.",
      para_two: "We export varieties of chilli to all leading markets across the world. We have an expert network to source from all major chilli-producing states of India.",
      para_three: "Discover the fiery world of chilli peppers, known for their pungent flavour that adds heat to any dish. These versatile berries, from the genus Capsicum and part of the nightshade family, come in a variety of shapes, sizes, and levels of spiciness. Whether you prefer a mild heat or a bold and blazing experience, chilli peppers are an essential ingredient in cuisines worldwide. Get ready to ignite your taste buds with the vibrant and diverse flavours of chilli peppers."
    },
    {
      img: tamarind,
      heading: "Tamarind",
      para_one: "Exporter and supplier of quality Tamarind from India.",
      para_two: "The Indian subcontinent is the native habitat for this rhizomatous plant. The compound curcumin present in turmeric is a very active ingredient that fights against inflammation and is a powerful antioxidant.",
      para_three: "Turmeric, a versatile herb that grows up to 1 metre tall, is now available for export through PSBR Exports. This herb is known for its highly branched, yellow to orange, cylindrical, and aromatic rhizomes, making it an essential ingredient in various culinary and medicinal preparations. Its leaves are arranged in two rows, giving the plant a unique appearance. With its rich history and health benefits, PSBR Exports is proud to bring the best of turmeric to you. Get ready to experience the versatility of this aromatic herb!"
    },
    {
      img: turmaric,
      heading: "Turmeric",
      para_one: "Exporter and supplier of quality Turmeric from India.",
      para_two: "The Indian subcontinent is the native habitat for this rhizomatous plant. The compound curcumin present in turmeric is a very active ingredient that fights against inflammation and is a powerful antioxidant.",
      para_three: "Turmeric, a versatile herb that grows up to 1 metre tall, is now available for export through PSBR Exports. This herb is known for its highly branched, yellow to orange, cylindrical, and aromatic rhizomes, making it an essential ingredient in various culinary and medicinal preparations. Its leaves are arranged in two rows, giving the plant a unique appearance. With its rich history and health benefits, PSBR Exports is proud to bring the best of turmeric to you. Get ready to experience the versatility of this aromatic herb!"
    }
  ]
  return (
    <>
      <m.div className="products-container mt-3 mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        {(!showImage && showSkeleton) && <SkeletonLoader style={{ height: 60 + "vh", width: 100 + "%" }} />}
        {showImage && (
          <m.div className="products-banner d-flex align-items-center justify-content-center"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="overflow-hidden p-2 mt-5">

              <m.h1 className="fw-bold fs-1 text-white"
                animate={{ y: "0" }}
                initial={{ y: "100%" }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Spices
              </m.h1>
            </div>
          </m.div>
        )}

        <div className="products-view p-3">
          {products.map((product, index) => {
            return (
              <>
                <SingleProductInfo product={product} index={index} />
              </>
            )
          })}

        </div>
      </m.div>
    </>
  )
}

export default ProductsPage