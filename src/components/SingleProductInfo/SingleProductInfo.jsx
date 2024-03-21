import React, { useEffect, useState } from 'react'
import './SingleProductInfo.css'
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';
import { motion as m } from 'framer-motion'
import HeadingDecorator from '../HeadingDecorator/HeadingDecorator';


const SingleProductInfo = ({ product, index, page }) => {
    const [showSkeleton, setShowSkeleton] = useState(true);
    const [showImage, setShowImage] = useState(false);
    // const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const imageAlreadyLoaded = sessionStorage.getItem('imageInProductsLoaded');
        if (imageAlreadyLoaded) {
            setShowSkeleton(false);
            setShowImage(true);
        } else {
            const image = new Image();
            image.src = product.img;
            image.onload = () => {
                const timeoutId = setTimeout(() => {
                    setShowSkeleton(false);
                    setShowImage(true);
                    sessionStorage.setItem(`imageInProductsLoaded${product.img}`, 'true');
                }, 2000);
                return () => clearTimeout(timeoutId);
            };

        }
    }, [product.img]);

    return (
        <>
            <m.div className={index % 2 !== 0 ? "single-product-view-container pt-3" : "single-product-view-container pt-3 flex-row-reverse"}
                initial={page.type ===  "about_founder" ? { x: "100%" } :{ y: "50%" }}
                whileInView={page.type ===  "about_founder" ? { opacity: 1, x: "0%" } : { opacity: 1, y: "0%" }}
                transition={{ duration: 0.4, ease: "easeIn", delay: 0.25 }}
                viewport={{ once: true }}
            >
                <div className="overflow-hidden product-img-container">
                    <div className="product-img" id={product.heading.split(" ")[1] ? product.heading.split(" ")[1] : product.heading}
                    >
                        {showSkeleton && <SkeletonLoader height={600} width={400} style={page.type === "home" ? {height : 300 + "px"} : {height:600 + "px"}}/>}
                        {showImage && <img src={product.img} alt=""  />}
                    </div>
                </div>
                <m.div className="product-info">
                    <h2 className={`${page === "home" || page.type ===  "normal" ? 'text-dark pb-3 fw-bold' : 'blue-text pb-3 fw-bold'} ${page.type ===  "about_founder" ? 'text-white font-40-px' : "text-dark"}` } >
                        <HeadingDecorator page={page} />
                        {product.heading}
                    </h2>
                    <p className={` ${page === 'home' ? 'text-dark' : 'text-dark'} ${page.type==="about_founder" ? "text-white" : "text-dark"}`}>
                        {product.para_one && product.para_one}
                    </p>
                    <p className={` ${page === 'home' ? 'text-dark' : 'text-dark'} ${page.type==="about_founder" ? "text-white" : "text-dark"}`} >
                        {product.para_two && product.para_two}
                    </p>
                    <p className={` ${page === 'home' ? 'text-dark' : 'text-dark'} ${page.type==="about_founder" ? "text-white" : "text-dark"}`}>
                        {product.para_three && product.para_three}
                    </p>
                </m.div>
            </m.div>
        </>
    )
}

export default SingleProductInfo