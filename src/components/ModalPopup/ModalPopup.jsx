import React, { useEffect, useState } from 'react'

const ModalPopup = () => {
    useEffect(() => {
        // Check if it's the first visit by looking at local storage
        const isFirstVisit = localStorage.getItem('isFirstVisit');
    
        if (!isFirstVisit) {
          // If it's the first visit, show the modal after 5 seconds
          const timeoutId = setTimeout(() => {
            const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
            modal.show();
            // Set a flag in local storage to indicate that the modal has been shown
            localStorage.setItem('isFirstVisit', 'true');
          }, 5000);
    
          // Clean up the timeout to prevent memory leaks
          return () => clearTimeout(timeoutId);
        }
      }, []);

    return (
        <>
            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}
            <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalPopup