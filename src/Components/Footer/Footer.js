import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='main-footer footer mt-auto bg-dark'>
            <div className="container text-start py-4">
                <h6 className='text-light '>© {new Date().getFullYear()} <a className="text-warning" href="http://asrafulweb.com"> AsrafulWeb</a> All rights reserved.</h6>
            </div>
        </div>
    );
};

export default Footer;