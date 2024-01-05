import React, { useEffect, useState } from 'react'
import './Banner.css'
import { motion as m } from 'framer-motion'
import ship from '../../assets/ship.jpg'
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader'

const Banner = () => {
    const [showSkeleton, setShowSkeleton] = useState(true);
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const imageAlreadyLoaded = sessionStorage.getItem('bannerInHomePage');
        if (imageAlreadyLoaded) {
            setShowSkeleton(false);
            setShowImage(true);
        } else {
            const image = new Image();
            image.src = ship;
            image.onload = () => {
                // const timeoutId = setTimeout(() => {
                //   setShowSkeleton(false);
                //   setShowImage(true);
                //   sessionStorage.setItem('bannerInProductPage', 'true');
                // }, 2000);
                setShowSkeleton(false);
                setShowImage(true);
                sessionStorage.setItem('bannerInHomePage', 'true');
                // return () => clearTimeout(timeoutId);
            };
        }
    }, []);

    return (
        <>
            {(!showImage && showSkeleton) && <SkeletonLoader style={{ height: 60 + "vh", width: 100 + "%" }} />}

            {showImage && (
                <m.div className="banner-container text-center d-flex flex-column overflow-hidden"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ opacity: 1 }}
                    transition={{ duration: 0.75, ease: "easeOut", delay: 0.4  }}
                >

                    <div className="overflow-hidden p-2 mt-5">

                        <m.div
                            animate={{ y: "0" }}
                            initial={{ y: "100%" }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <p className='m-0 fw-bold fs-1'>
                                Welcome to
                            </p>
                            <h1 className='m-0 fw-bold banner-header text-black'>
                                PSBR Exports
                            </h1>
                            <p className='m-0 fs-1'>We Export Quality</p>
                        </m.div>
                    </div>
                </m.div>
            )}

        </>
    )
}

export default Banner