import React from 'react'
import logo from "../../assets/psbr_logo.jpeg"
import facebook from "../../assets/social-icons/facebook.png"
import youtube from "../../assets/social-icons/youtube.png"
import threads from "../../assets/social-icons/threads.png"
import instagram from "../../assets/social-icons/instagram.png"
import linkedIn from "../../assets/social-icons/linkedIn.png"
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer-container p-5 d-flex justify-content-center align-items-start">
        <div className="footer-contact-info d-flex justify-content-center align-items-center flex-column">
          <img src={logo} alt="PSBR Exports logo" loading="lazy" className='psbr-logo' />
          <div className="d-flex justify-content-center align-items-center social-icons pt-3">
            <img src={facebook} alt="PSBR Exports logo" loading="lazy" className='psbr-logo' />
            <img src={youtube} alt="PSBR Exports logo" loading="lazy" className='psbr-logo' />
            <img src={threads} alt="PSBR Exports logo" loading="lazy" className='psbr-logo' />
            <img src={instagram} alt="PSBR Exports logo" loading="lazy" className='psbr-logo' />
            <img src={linkedIn} alt="PSBR Exports logo" loading="lazy" className='psbr-logo' />
          </div>
          <p className='m-0 fw-bold pt-2'>Phone: +91 6381693069</p>
          <p className='m-0 fw-bold pt-2'>Email: info@psbrexports.com</p>

        </div>
        <div className="quick-links-footer-container">
          <h1 className='fw-bold'>
            Quick Links
          </h1>
          <div className="quick-links-footer d-flex flex-column justify-content-center align-items-start">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/products">Our Products</Link>

          </div>
        </div>
        <div className="our-products-footer-container">
          <h1 className='fw-bold'>
            Our Products
          </h1>
          <div className="our-products-footer d-flex justify-content-center align-items-start">
            <div className='our-products-footer-part-one d-flex flex-column justify-content-center align-items-start'>
              <Link to="/products">Turmeric</Link>
              <Link to="/products">Red Chilli</Link>
              <Link to="/products">Black Pepper</Link>
              <Link to="/products">Cumin</Link>
            </div>
            <div className='our-products-footer-part-two d-flex flex-column justify-content-center align-items-start'>
              <Link to="/products">Coriander</Link>
              <Link to="/products">Cardamom</Link>
              <Link to="/products">Cloves</Link>
              <Link to="/products">Cinnamon</Link>
              <Link to="/products">Tamarind</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer