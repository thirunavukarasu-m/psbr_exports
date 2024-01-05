import React from 'react'
import logo from "../../assets/psbr_bg_removed.png"
import facebook from "../../assets/social-icons/facebook.png"
import youtube from "../../assets/social-icons/youtube.png"
import threads from "../../assets/social-icons/threads.png"
import instagram from "../../assets/social-icons/instagram.png"
import linkedIn from "../../assets/social-icons/linkedIn.png"
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
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
          <p className='m-0 fw-bold pt-2 text-dark'>Phone:</p>
          <p className='m-0 fw-bold pt-2 text-dark'>8610393469</p>
          <p className='m-0 fw-bold pt-2 text-dark'>9786251609</p>
          <p className='m-0 fw-bold pt-2 text-dark text-center'>Email: Psbrexporters@gmail.com</p>

        </div>
        <div className="quick-links-footer-container mt-5">
          <h1 className='fw-bold blue-text fs-1'>
            Quick Links
          </h1>
          <div className="quick-links-footer d-flex flex-column justify-content-center align-items-center">
            <Link to="/" onClick={scrollToTop}>Home</Link>
            <Link to="/about-us" onClick={scrollToTop}>About Us</Link>
            <Link to="/contact-us" onClick={scrollToTop}>Contact Us</Link>
            <Link to="/products" onClick={scrollToTop}>Our Products</Link>
          </div>
        </div>
        <div className="our-products-footer-container mt-5">
          <h1 className='fw-bold blue-text fs-1 text-center'>
            Our Products
          </h1>
          <div className="our-products-footer d-flex justify-content-center align-items-center">
            <div className='our-products-footer-part-one d-flex flex-column justify-content-center align-items-center'>
              <Link to="/products#Cumin">Cumin</Link>
              <Link to="/products#Turmeric" >Turmeric</Link>
              <Link to="/products#chilli" >Red Chilli</Link>
              <Link to="/products#Pepper">Black Pepper</Link>
            </div>
            <div className='our-products-footer-part-two d-flex flex-column justify-content-center align-items-center'>
              <Link to="/products#Cloves">Cloves</Link>
              <Link to="/products#Cinnamon">Cinnamon</Link>
              <Link to="/products#Tamarind">Tamarind</Link>
              <Link to="/products#Coriander">Coriander</Link>
              <Link to="/products#Cardamom">Cardamom</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer