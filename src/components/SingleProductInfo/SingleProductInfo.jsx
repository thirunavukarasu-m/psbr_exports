import React from 'react'
import './SingleProductInfo.css'

const SingleProductInfo = ({product}) => {
    console.log(product);
    return (
        <>
            <div className="single-product-view-container pt-5">
                <div className="product-img">
                    <img src={product} alt="" />
                </div>
                <div className="product-info">
                    <h2>
                        Turmaric
                    </h2>
                    <p>
                        Exporter and supplier of quality Turmeric from India.
                    </p>
                    <p>
                        The Indian subcontinent is the native habitat for this rhizomatous plant. The compound curcumin present in turmeric is a very active ingredient that fights against inflammation and is a powerful antioxidant.
                    </p>
                    <p>
                        Turmeric, a versatile herb that grows up to 1 metre tall, is now available for export through JVR Exports. This herb is known for its highly branched, yellow to orange, cylindrical, and aromatic rhizomes, making it an essential ingredient in various culinary and medicinal preparations. Its leaves are arranged in two rows, giving the plant a unique appearance. With its rich history and health benefits, JVR Exports is proud to bring the best of turmeric to you. Get ready to experience the versatility of this aromatic herb!
                    </p>
                </div>
            </div>
        </>
    )
}

export default SingleProductInfo