import React, { useEffect } from 'react'
import './ModalPopup.css'
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
                                    <input type="text" className="form-control" id="name" placeholder='Name*'/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="email" placeholder='Email*'/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="phone" placeholder='Phone*'/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="interested-products" placeholder='Interested Products'/>
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" id="message-text inputGroup-sizing-lg" placeholder='Message'></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer d-flex justify-content-center mb-3">
                            <button type="button" className="btn btn-primary">Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalPopup