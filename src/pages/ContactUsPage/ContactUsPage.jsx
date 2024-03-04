import React, { useEffect, useState } from 'react'
import './ContactUsPage.css'
import email from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import address from '../../assets/address.png'
import { motion as m } from 'framer-motion'
import contact_us_img from "../../assets/contact.jpeg"
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader'
import { useFormik } from 'formik'
import { supportValidation } from '../../utils/validationSchema'
import { handleSendEmail } from '../../utils/EmailService'
import HeadingDecorator from '../../components/HeadingDecorator/HeadingDecorator'




const ContactUsPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      interested_products: "",
      message: ""
    },
    validationSchema: supportValidation,
    onSubmit: values => {
      handleSubmit(values)
    }
  });

  const handleSubmit = async (enquiry_info) => {
    handleSendEmail(enquiry_info, false, formik)
  }
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
    <m.div className="contact-us-container mb-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: 0.4 }}
    >
      {(!showImage && showSkeleton) && <SkeletonLoader style={{ height: 60 + "vh", width: 100 + "%" }} />}
      {showImage && (
        <div className="overflow-hidden">
          <m.div className="contact-us-banner d-flex align-items-center justify-content-center mb-5"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          >
            <div className="overflow-hidden p-2 mt-2">
              <m.h1 className="fw-bold font-5 text-white text-center"
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

      {/* <h1 className='text-dark p-4 text-center fw-bold'> Get In Touch</h1> */}
      <div className="w-100 d-flex justify-content-center">
        <HeadingDecorator page={{ type: "normal", text: "Get in touch" }} />
      </div>
      <div className="contact-us-cards d-flex p-4">

        <m.div className="contact-us-card p-4"
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          transition={{ duration: 0.25, ease: "easeIn", delay: 1 }}
          viewport={{ once: true }}
        >

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
        </m.div>
        <m.div className="contact-us-card p-5"
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          transition={{ duration: 0.25, ease: "easeIn", delay: 1 }}
          viewport={{ once: true }}
        >
          <form>
            <div className="mb-3">
              <input type="text" className={(formik.errors.name && formik.touched.name) ? "form-control error" : "form-control"} id="name" placeholder='Name*'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
            <div className="mb-3">
              <input type="text" className={(formik.errors.email && formik.touched.email) ? "form-control error" : "form-control"} id="email" placeholder='Email*'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            <div className="mb-3">
              <input type="text" className={(formik.errors.phone && formik.touched.phone) ? "form-control error" : "form-control"} id="phone" placeholder='Phone*'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
            </div>
            <div className="mb-3">
              <input type="text" className={(formik.errors.interested_products && formik.touched.interested_products) ? "form-control error" : "form-control"} id="interested_products" placeholder='Interested Products*'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.interested_products}
              />
            </div>
            <div className="mb-3">
              <textarea className={(formik.errors.message && formik.touched.message) ? "form-control error" : "form-control"} id="message" placeholder='Message*'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
            </div>
          </form>
          <div className="modal-footer d-flex justify-content-center">
            <button type="button" className="btn btn-danger" onClick={formik.handleSubmit}>Send message</button>
          </div>
        </m.div>

        <div className="overflow-hidden">
          <m.div className="google-map mt-5 mb-5"
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3917.966119385119!2d76.907889!3d10.8901794!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDUzJzI0LjciTiA3NsKwNTQnMjguNCJF!5e0!3m2!1sen!2sin!4v1704443820387!5m2!1sen!2sin" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </m.div>
        </div>
      </div>
    </m.div>
  )
}

export default ContactUsPage