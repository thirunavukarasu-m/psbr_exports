import React, { useEffect, useState } from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader'
import { motion as m } from 'framer-motion'


const ProductCard = ({ product, index }) => {
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
            <Link className='product-card-text' to={product.heading.split(" ")[1] ? "/products#" + product.heading.split(" ")[1] : "/products#" + product.heading} onClick={scrollToTop}

            >
                {showSkeleton && <SkeletonLoader height={300} width={350} />}

                {showImage && (
                    <m.div className="product-card d-flex flex-column align-items-center"
                        initial={{ opacity: 0, x: "100%" }}
                        whileInView={{ opacity: 1, x: "0%" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <img src={product.img} alt="" />
                        <div className="mt-4" >
                            <h3 className='text-center'>{product.heading}</h3>
                            <h6 className='text-center'>Read more {'>>'}</h6>
                        </div>
                    </m.div>
                )}
            </Link>

        </>
    )
}

export default ProductCard