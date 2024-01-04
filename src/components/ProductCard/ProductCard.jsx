import React, { useEffect, useState } from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader'

const ProductCard = ({ product }) => {
    const [showSkeleton, setShowSkeleton] = useState(true);
    const [showImage, setShowImage] = useState(false);

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
    }, []);

    return (
        <>
            <Link to="/products">
                {showSkeleton && <SkeletonLoader height={300} width={350} />}

                {showImage && (
                    <div className="product-card">
                        <h3 className='text-center fs-3 pt-2 blue-text'>{product.heading}</h3>
                        <img src={product.img} alt="" />
                    </div>
                )}

            </Link>

        </>
    )
}

export default ProductCard