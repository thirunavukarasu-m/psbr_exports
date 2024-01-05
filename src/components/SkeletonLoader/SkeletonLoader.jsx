import React from 'react'
import "./SkeletonLoader.css"
const SkeletonLoader = ({height,width, style}) => {
  return (
    <div className="cover-image-skeleton" style={style? style: {height:  height + "px" ,width: width + "px"}}></div>
  )
}

export default SkeletonLoader