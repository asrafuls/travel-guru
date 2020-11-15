import React from 'react';
import './Banner.css';
import destinationData from './../../destinationData/index.js';
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <div className='bannerMain'>
            <div className="container">
                <div className="bannerCarousel">
                    <div style={{ width: '330px' }} className="bannerCarouselLeftText text-light text-left">
                        <div className="carouselActive">
                            <h1 className="bannerCarouselLeftHeader">Cox's bazar</h1>
                            <span className="bannerCarouselLeftDes">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and ...</span>
                            <br /><br />
                            <button className="btn btn-primary bannerCarouselLeftBtn">
                                <span>Booking</span>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="carouselExampleControls" class="carousel slide bannerCarouselRight" data-ride="carousel">
                        <div class="carousel-inner">
                            {
                                destinationData.map(data =>
                                    <Link to='./../../book' class="carousel-item bannerCarouselRightSection active">
                                        <img src={data.img1} class="d-block sliderImg" alt="" />
                                        <div class="carousel-caption d-none d-md-block">
                                            <h3 className='bannerCarouselRightItems'><span>{data.title}</span></h3>
                                        </div>
                                    </Link>
                                )
                            }
                        </div>

                    </div>
                </div>
                <div className="carouselChangeBtn">
                    <button class="btn btn-danger" style={{ marginRight: '10px' }}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                    <button class="btn btn-danger" >
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;