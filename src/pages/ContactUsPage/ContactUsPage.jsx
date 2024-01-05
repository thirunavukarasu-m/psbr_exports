import React, { useEffect, useState } from 'react'
import './ContactUsPage.css'
import email from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import address from '../../assets/address.png'
import { motion as m } from 'framer-motion'
import contact_us_img from "../../assets/contact-us.jpg"
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader'




const ContactUsPage = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    const imageAlreadyLoaded = sessionStorage.getItem('bannerInContactPage');
    if (imageAlreadyLoaded) {
      setShowSkeleton(false);
      setShowImage(true);
    } else {
      const image = new Image();
      image.src = contact_us_img;
      image.onload = () => {
        const timeoutId = setTimeout(() => {
          setShowSkeleton(false);
          setShowImage(true);
          sessionStorage.setItem('bannerInContactPage', 'true');
        }, 2000);
        return () => clearTimeout(timeoutId);
      };
    }
  }, []);
  return (
    <m.div className="contact-us-container mt-3 mb-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: 0.4 }}
    >
      {(!showImage && showSkeleton) && <SkeletonLoader style={{ height: 60 + "vh", width: 100 + "%" }} />}
      {showImage && (
        <div className="overflow-hidden">
          <m.div className="contact-us-banner d-flex align-items-center justify-content-center mb-5"
            initial={{ y: "150%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          >
            <div className="overflow-hidden p-2 mt-5">
              <m.h1 className="fw-bold font-5 text-white"
                animate={{ y: "0" }}
                initial={{ y: "100%" }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Contact Us
              </m.h1>
            </div>
          </m.div>
        </div>
      )}

      <h1 className='text-dark p-4 text-center fw-bold'> Get In Touch</h1>
      <div className="contact-us-cards bg-dark-blue d-flex p-4">
        <div className="contact-us-card p-4">
          <div className="contact-type">
            <img src={email} alt="" height={30} width={30} />
            <div className="contact-content">
              <h4>Email:</h4>
              <p className='text-dark'>Psbrexporters@gmail.com</p>
            </div>
          </div>
          <div className="contact-type">
            <img src={phone} alt="" height={30} width={30} />
            <div className="contact-content">
              <h4>Phone:</h4>
              <p className='text-dark'>8610393469</p>
              <p className='text-dark'>9786251609</p>
            </div>
          </div>
          <div className="contact-type">
            <img src={address} alt="" height={30} width={30} />
            <div className="contact-content">
              <h4>Address:</h4>
              <p className='text-dark m-0'>PSBR Exports, No.2/2, Kasthuribai street, Ettimadai</p>
              <p className='text-dark'>
                Madukkarai, Coimbatore , Tamil Nadu , India - 641 105
              </p>
            </div>
          </div>
        </div>
        <div className="contact-us-card p-5">
          <form className='p-4'>
            <div className="input-group input-group-md mb-3">
              <input type="text" className="form-control" id="name" placeholder='Name*' />
            </div>
            <div className="input-group input-group-md mb-3">
              <input type="text" className="form-control" id="email" placeholder='Email*' />
            </div>
            <div className="input-group input-group-md mb-3">
              <input type="text" className="form-control" id="phone" placeholder='Phone*' />
            </div>
            <div className="input-group input-group-md mb-3">
              <input type="text" className="form-control" id="interested-products" placeholder='Interested Products' />
            </div>
            <div className="input-group input-group-md mb-3">
              <textarea className="form-control" id="message-text inputGroup-sizing-lg" placeholder='Message'></textarea>
            </div>
          </form>
          <div className="modal-footer d-flex justify-content-center">
            <button type="button" className="btn btn-danger">Send message</button>
          </div>
        </div>

        <div className="google-map mt-5 mb-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3917.966119385119!2d76.907889!3d10.8901794!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDUzJzI0LjciTiA3NsKwNTQnMjguNCJF!5e0!3m2!1sen!2sin!4v1704443820387!5m2!1sen!2sin" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </m.div>
  )
}

export default ContactUsPage