import React, { useEffect, useState } from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader'
import { motion as m } from 'framer-motion'


const ProductCard = ({ product }) => {
    const [showSkeleton, setShowSkeleton] = useState(true);
    const [showImage, setShowImage] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        const imageAlreadyLoaded = sessionStorage.getItem('imageInHomeLoaded');
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
                    sessionStorage.setItem('imageInHomeLoaded', 'true');
                }, 2000);
                return () => clearTimeout(timeoutId);
            };
        }
    }, [product.img]);

    return (
        <>
            <Link to={product.heading.split(" ")[1] ? "/products#" + product.heading.split(" ")[1] : "/products#" + product.heading} onClick={scrollToTop}

            >
                {showSkeleton && <SkeletonLoader height={300} width={350} />}

                {showImage && (
                    <m.div className="product-card"
                        initial={{ opacity: 0,x:"100%" }}
                        whileInView={{ opacity: 1,x:"0%" }}
                        transition={{ duration: 0.75, ease: "easeOut",delay:0.4 }}
                    >
                        <h3 className='text-center fs-3 pt-2 blue-text'>{product.heading}</h3>
                        <img src={product.img} alt="" />
                    </m.div>
                )}
            </Link>

        </>
    )
}

export default ProductCard