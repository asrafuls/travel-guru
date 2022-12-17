import React from 'react';
import './BannerTest.css';

const BannerTest = () => {
    return (
        <div className="test-carousel">
            <div className="wrapper">
                <div className="carousell">
                    <div className="carousel_item">
                        <img className="img" src="https://fervent-ardinghelli-1b9493.netlify.app/1.png" alt="" />
                    </div>
                    <div className="carousel_item">
                        <img className="img" src="https://ttg.com.bd/uploads/tours/plans/115_05jpg.jpg" alt="" />
                    </div>
                    <div className="carousel_item">
                        <img className="img" src="https://cdn.bangladeshscenictours.com/wp-content/uploads/2019/11/Exploring-Coxs-Bazar-990x490.jpg" alt="" />
                    </div>
                    <div className="carousel_item">
                        <img className="img" src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogL0cqliTMhCijWRKpxzkddXqIo4u44Y3O.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTest;