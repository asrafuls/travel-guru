import React from 'react';

const ErrorPage = () => {

    // Set page title
    document.title = "Travel Guru By Asraful - Page Not Found";

    return (
        <div className='errorPage'>
            <div className="container d-flex justify-content-center pt-5">
                <div className="text-center h4 d-flex" style={{ marginTop: "40vh" }}>
                    <div className="h2 pe-3" style={{ borderRight: "2px solid #444" }}>404</div>
                    <div className="h5 mt-2 ps-3">PAGE NOT FOUND</div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;