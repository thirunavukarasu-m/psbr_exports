import React from 'react'
import './BannerVideo.css'
import videoOne from '../../assets/truck_video.mp4'
import video from '../../assets/volvo_truck.mp4'
import useWindowSize from '../../utils/useWindowSize'


const BannerVideo = () => {
  const { width } = useWindowSize();
  const threshold = 768;
  return (
    <div className="video-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video"
        src={width > threshold ? videoOne : video}
      ></video>
      <div className="overlay d-flex flex-column">
        <p className='fw-bold text-center font-20-px '>
          Welcome to
        </p>
        <h1 className='fw-bold font-80-px  text-white'>
          PSBR Exports
        </h1>
        <p className='text-center font-20-px '>We Export Quality</p>
      </div>
    </div>
  );
}

export default BannerVideo