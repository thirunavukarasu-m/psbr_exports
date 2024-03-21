import React from 'react';
import axios from 'axios';

class PdfDownloader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pdfUrl: 'https://drive.google.com/uc?export=download&id=1VeHjoCeHhkFdRE21c-CbDzHXh6J-VFAz', // Replace with your PDF link
        };
        this.handleDownload = this.handleDownload.bind(this);
    }

    handleDownload() {
        axios({
            url: this.state.pdfUrl,
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'downloaded.pdf'); // Change the filename as needed
            document.body.appendChild(link);
            link.click();
        });
    }

    render() {
        return (
            <>
                {/* <li>
                    <button className='btn btn-danger'> <Link href='#' download="PSBR.pdf" className='text-white' target="_blank"
                        type="application/octet-stream">Download Brochure</Link></button>
                </li> */}
                <div>
                    <button className='btn btn-danger text-white' onClick={this.handleDownload}>Download Brochure</button>
                </div>
            </>

        );
    }
}

export default PdfDownloader;
