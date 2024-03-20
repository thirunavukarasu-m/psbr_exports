import React from 'react'
import logo from "../../assets/psbr_bg_removed.png"
import facebook from "../../assets/social-icons/facebook.png"
import instagram from "../../assets/social-icons/instagram.png"
import x from "../../assets/social-icons/x.png"
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const handleContact = () => {
    const emailAddress = 'psbrexports.in@gmail.com';
    const subject = 'Subject of the email';
    const body = 'Body of the email';

    // Use encodeURIComponent to properly format the email address, subject, and body
    const mailtoLink = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  };
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
          <div className="d-flex justify-content-center align-items-center social-icons pb-3">
            <Link to={'https://www.facebook.com/profile.php?id=61555495640843&mibextid=ZbWKwL'} target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="PSBR Exports logo" loading="lazy" className='psbr-logo-social' height={25} width={25} />
            </Link>
            <Link to={'https://x.com/psbrexports?t=mimBosrtQqRrbdqkjQiHrA&s=09'} target="_blank" rel="noopener noreferrer">
              <img src={x} alt="PSBR Exports logo" loading="lazy" className='psbr-logo-social' height={25} width={25} />
            </Link>
            <Link to={'https://www.instagram.com/psbrexports?igsh=OGQ5ZDc2ODk2ZA=='} target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="PSBR Exports logo" loading="lazy" className='psbr-logo-social' height={25} width={25} />
            </Link>
          </div>
          <p className='m-0 fw-bold pt-2 text-dark'>Phone:</p>
          <p className='m-0 fw-bold pt-2 text-dark'>+91 8610393469</p>
          <p className='m-0 fw-bold pt-2 text-dark'>+91 9786251609</p>
          <p className='m-0 fw-bold pt-2 text-center pointer' onClick={handleContact}>Email: psbrexporters@gmail.com</p>

        </div>
        <div className="quick-links-footer-container mt-5">
          <h1 className='fw-bold blue-text font-25-px'>
            Quick Links
          </h1>
          <div className="quick-links-footer d-flex flex-column">
            <Link to="/" onClick={scrollToTop} className='font-20-px'>Home</Link>
            <Link to="/about-us/" onClick={scrollToTop} className='font-20-px'>About Us</Link>
            <Link to="/contact-us/" onClick={scrollToTop} className='font-20-px'>Contact Us</Link>
            <Link to="/products/" onClick={scrollToTop} className='font-20-px'>Our Products</Link>
          </div>
        </div>
        <div className="our-products-footer-container mt-5">
          <h1 className='fw-bold blue-text text-center font-25-px'>
            Our Products
          </h1>
          <div className="our-products-footer d-flex flex-column justify-content-center">
            <Link to="/products#Cumin" className='font-20-px'>Cumin</Link>
            <Link to="/products#Cloves" className='font-20-px'>Cloves</Link>
            <Link to="/products#Tamarind" className='font-20-px'>Tamarind</Link>
            <Link to="/products#Coriander" className='font-20-px'>Coriander</Link>
            <Link to="/products#Cinnamon" className='font-20-px'>Cinnamon</Link>
            <Link to="/products#Turmeric" className='font-20-px' >Turmeric</Link>
            <Link to="/products#Cardamom" className='font-20-px'>Cardamom</Link>
            <Link to="/products#Nutmeg" className='font-20-px'>Nutmeg</Link>
            <Link to="/products#chilli"className='font-20-px' >Red Chilli</Link>
            <Link to="/products#Pepper" className='font-20-px'>Black Pepper</Link>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer