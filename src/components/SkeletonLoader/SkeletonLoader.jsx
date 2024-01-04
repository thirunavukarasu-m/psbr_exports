import React from 'react'
import "./SkeletonLoader.css"
const SkeletonLoader = ({height,width}) => {
  return (
    <div className="cover-image-skeleton" style={{height:  height + "px" ,width: width + "px"}}></div>
  )
}

export default SkeletonLoader