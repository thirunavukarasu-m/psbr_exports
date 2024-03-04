import React from 'react'
import './HeadingDecorator.css'
import spicesPng from '../../assets/spices.png'

const HeadingDecorator = ({page}) => {
  return (
    <>
        <div className="heading-decorator d-flex align-items-center">
            <hr />
                {page.type === 'spices' && (
                    <img src={spicesPng} alt="" srcset="" height={40} width={40}/>
                )}
                
                {page.type === 'normal' && (
                    <p className='m-0 font-20-px'>{page.text}</p>
                )}
            <hr />
        </div>
    </>
  )
}

export default HeadingDecorator