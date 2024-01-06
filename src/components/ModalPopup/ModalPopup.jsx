import React, { useEffect } from 'react'
import './ModalPopup.css'
import { useFormik } from 'formik';
import { supportValidation } from '../../utils/validationSchema';
import toast from 'react-hot-toast';
import { handleSendEmail } from '../../utils/EmailService';
const ModalPopup = () => {
    useEffect(() => {
        const isFirstVisit = localStorage.getItem('isFirstVisit');

        if (!isFirstVisit) {
            const timeoutId = setTimeout(() => {
                const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
                modal.show();
                localStorage.setItem('isFirstVisit', 'true');
            }, 3000);

            return () => clearTimeout(timeoutId);
        }
    }, []);

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
        handleSendEmail(enquiry_info, true)
    }

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <h1 className="modal-title fs-3 fw-bold text-center" id="exampleModalLabel">PSBR Exports</h1>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input type="text" className= {(formik.errors.name && formik.touched.name)? "form-control error": "form-control"} id="name" placeholder='Name*'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className={(formik.errors.email && formik.touched.email)? "form-control error": "form-control"} id="email" placeholder='Email*'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className={(formik.errors.phone && formik.touched.phone)? "form-control error": "form-control"} id="phone" placeholder='Phone*'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phone}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className={(formik.errors.interested_products && formik.touched.interested_products)? "form-control error": "form-control"} id="interested_products" placeholder='Interested Products*'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.interested_products}
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea className={(formik.errors.message && formik.touched.message)? "form-control error": "form-control"} id="message" placeholder='Message*'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.message}
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer d-flex justify-content-center mb-3">
                            <button type="button" className="btn btn-primary" onClick={formik.handleSubmit}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalPopup