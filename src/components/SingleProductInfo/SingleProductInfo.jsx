import React, { useEffect, useState } from 'react'
import './SingleProductInfo.css'
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';

const SingleProductInfo = ({product,index,page}) => {
    const [showSkeleton, setShowSkeleton] = useState(true);
    const [showImage, setShowImage] = useState(false);

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
                    sessionStorage.setItem('imageInProductsLoaded', 'true');
                }, 2000);
                return () => clearTimeout(timeoutId);
            };

        }
    }, [product.img]);
    return (
        <>
            <div className={index % 2 !== 0 ? "single-product-view-container pt-5": "single-product-view-container pt-5 flex-row-reverse"}>
                <div className="product-img" >
                    {showSkeleton && <SkeletonLoader height={400} width={300}/>}
                    {showImage && <img src={product.img} alt="" />}
                </div>
                <div className="product-info w-75">
                    <h2 className={page ? 'text-white fs-1 pb-3 fw-bold': 'blue-text fs-1 pb-3 fw-bold'} id={product.heading.split(" ")[1] ?product.heading.split(" ")[1] : product.heading }>
                        {product.heading}
                    </h2>
                    <p className={page ? 'text-white m-0': 'text-dark m-0'}>
                        {product.para_one && product.para_one}
                    </p>
                    <p className={page ? 'text-white m-0': 'text-dark m-0'} >
                        {product.para_two && product.para_two}
                    </p>
                    <p className={page ? 'text-white m-0': 'text-dark m-0'}>
                        {product.para_three && product.para_three}
                    </p>
                </div>
            </div>
        </>
    )
}

export default SingleProductInfo