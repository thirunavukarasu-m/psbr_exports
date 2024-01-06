import React, { useEffect, useState } from 'react'
import './SingleProductInfo.css'
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';
import { motion as m } from 'framer-motion'

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;


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
            <div className={index % 2 !== 0 ? "single-product-view-container pt-5" : "single-product-view-container pt-5 flex-row-reverse"}
            >
                <div className="overflow-hidden">
                    <m.div className="product-img" id={product.heading.split(" ")[1] ? product.heading.split(" ")[1] : product.heading}
                        // initial={{ x: index % 2 !== 0 ? "20%" : "-20%" }}
                        // whileInView={{ opacity: 1, x: "0%" }}
                        // transition={{ duration: 0.3, ease: "easeIn" }}
                        // viewport={{ once: true }}
                        // initial={false}
                        whileInView={
                            (showImage)
                                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                        }
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {showSkeleton && <SkeletonLoader height={600} width={400} />}
                        {showImage && <img src={product.img} alt=""/>}
                    </m.div>
                </div>
                <m.div className="product-info"
                    initial={{ x: index % 2 !== 0 ? "-20%" : "20%" }}
                    whileInView={{ opacity: 1, x: "0%" }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                >
                    <h2 className={page ? 'text-white fs-1 pb-3 fw-bold' : 'blue-text fs-1 pb-3 fw-bold'}>
                        {product.heading}
                    </h2>
                    <p className={page ? 'text-white m-0' : 'text-dark m-0'}>
                        {product.para_one && product.para_one}
                    </p>
                    <p className={page ? 'text-white m-0' : 'text-dark m-0'} >
                        {product.para_two && product.para_two}
                    </p>
                    <p className={page ? 'text-white m-0' : 'text-dark m-0'}>
                        {product.para_three && product.para_three}
                    </p>
                </m.div>
            </div>
        </>
    )
}

export default SingleProductInfo