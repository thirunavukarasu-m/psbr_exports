import React from 'react'
import './ContactUsPage.css'
import email from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import address from '../../assets/address.png'



const ContactUsPage = () => {
  return (
    <div className="contact-us-container mt-3 mb-5">
      <div className="contact-us-banner d-flex align-items-center justify-content-center mb-5">
        <h1 className="fw-bold font-5 text-white">
          Contact Us
        </h1>
      </div>
      <h1 className='text-dark p-4 text-center fw-bold'> Get In Touch</h1>
      <div className="contact-us-cards bg-dark-blue d-flex p-4">
        <div className="contact-us-card p-4">
          <div className="contact-type">
            <img src={email} alt="" height={50} width={50} />
            <div className="contact-content">
              <h1>Email:</h1>
              <p className='text-dark'>Psbrexporters@gmail.com</p>
            </div>
          </div>
          <div className="contact-type">
            <img src={phone} alt="" height={50} width={50} />
            <div className="contact-content">
              <h1>Phone:</h1>
              <p className='text-dark'>8610393469</p>
              <p className='text-dark'>9786251609</p>
            </div>
          </div>
          <div className="contact-type">
            <img src={address} alt="" height={50} width={50} />
            <div className="contact-content">
              <h1>Address:</h1>
              <p className='text-dark m-0'>PSBR Exports, 36/1 Raghav, Amman Nagar,</p>
              <p className='text-dark'>
                Saravanampatti, Coimbatore , Tamil Nadu , India - 641 035
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31287.520794292028!2d76.67282197251521!3d11.411893949236184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd84b5f3d78d%3A0x179bdb14c93e3f42!2sOoty%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1704382951189!5m2!1sen!2sin"  style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage