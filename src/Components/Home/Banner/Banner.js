import React from 'react';
import './Banner.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useEffect } from 'react';
import { useState } from 'react';
import destinationData from './../../../destinationData/index'
import { Link } from 'react-router-dom';
import { useContextItems } from '../../../contextApiMenager/contextApiMenager';

const Banner = ({ setLoading }) => {

    const [carouselId, setCarouselId] = useState(null)

    const { homeLoading, bannerItems } = useContextItems()

    const responsive = {
        0: { items: 1 },
        568: { items: 2 }
    };


    let items = []



    // Push Items In Items Array
    useEffect(() => {
        if (homeLoading === false && bannerItems?.status === 200) {
            bannerItems?.data?.map((dt) => (
                items.push(
                    <>
                        <div className='text-start text-light d-none banner-item-texts'>
                            <h1 className="bannerCarouselLeftHeader">{dt.title}</h1>
                            <span className="bannerCarouselLeftDes">{dt.description.substring(0, 200)} ...</span>
                            <br /><br />
                            <Link to={`./tour-packages?desId=${dt.cId}`} className="btn btn-primary bannerCarouselLeftBtn">
                                <span className='me-1'>Booking</span>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </Link>
                        </div>
                        <Link to={`./tour-packages?desId=${dt.cId}`} class="carousel-item bannerCarouselRightSection active">
                            <img src={dt.img} class="d-block sliderImg" alt="" />
                            <div class="carousel-caption d-none d-md-block">
                                <h3 className='bannerCarouselRightItems'><span>{dt.title}</span></h3>
                            </div>
                        </Link>
                    </>
                )
            ))
        }
    }, [bannerItems?.data, bannerItems?.status, homeLoading, items])

    console.log(bannerItems?.data)

    // Find active item
    useEffect(() => {
        // document.querySelector(".__target").addEventListener("mouseover", (e) => {
        //     console.log(e.target.className)
        // })
    }, [])


    return (
        <div className='bannerMain'>
            <div className="container">
                <div className="bannerCarousel">
                    {
                        homeLoading ?
                            <>
                            </>
                            :
                            <>
                                {
                                    items &&
                                    <>
                                        {
                                            destinationData ?
                                                <AliceCarousel
                                                    mouseTracking
                                                    items={items}
                                                    responsive={responsive}
                                                    controlsStrategy="alternate"
                                                />
                                                :
                                                <>
                                                    {
                                                        setLoading(false)
                                                    }
                                                </>
                                        }
                                        </>
                                }
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;