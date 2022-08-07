import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClockFive, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TourItem = () => {

    const [tourItemData, setTourItemData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [itemError, setItemError] = useState(false)
    const [itemErrorMsg, setItemErrorMsg] = useState(null)
    const [travelers, setTravelers] = useState(null)


    const itemId = useParams()?.itemId


    // Get item data 
    useEffect(() => {
        setLoading(true)
        axios.get(`/tour-item/${itemId}`)
            .then(data => {
                setTourItemData(data.data)
                setLoading(false)
            })
            .catch(error => {
                setItemError(true)
                setItemErrorMsg(error.message)
            })
    }, [itemId])


    // Set Default Travelers
    useEffect(() => {
        if (tourItemData) {
            setTravelers(tourItemData.person)
        }
    }, [tourItemData])

    // Handle 
    const handlePassengersAddOrRemove = () => {

    }

    console.log(travelers)

    return (
        <div className='tour-item-page' style={{ paddingTop: "100px" }}>
            <div className="container h-100">
                {
                    loading ?
                        <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "30vh" }}>
                            <div class="spinner-border text-warning" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        :
                        <>
                            {
                                itemError ?
                                    <div style={{ marginTop: "30vh" }}>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <span>{itemErrorMsg ? itemErrorMsg : "We got an error."}</span>
                                        </div>
                                    </div>
                                    :
                                    <>
                                        {
                                            tourItemData &&
                                            <div className="tour-item-content">
                                                {/* Images Gallery Carosel */}
                                                <div className='mt-4 row'>
                                                    <div className="col-9">
                                                        <Carousel >
                                                            {
                                                                tourItemData.imgs?.map(image => (
                                                                    <div>
                                                                        <img src={image} alt="" />
                                                                        {/* <p className="legend">Legend 1</p> */}
                                                                    </div>
                                                                ))
                                                            }
                                                        </Carousel>
                                                    </div>
                                                    <div className="col-3 ps-3 text-start">
                                                        <h4 className='text-dark'>{tourItemData.title}</h4>
                                                        <h6 className='text-danger mt-3'>
                                                            <span className="me-2"><FontAwesomeIcon icon={faLocationDot} /></span>
                                                            <span className=''>{tourItemData?.destinations?.map(dt => (<span>{dt}</span>))}</span>
                                                        </h6>
                                                        <div className="mt-4 mb-4 card">
                                                            <div className="card-body text-start">
                                                                <div className="d-flex">
                                                                    <div className="col-4 text-end pe-2 mt-3">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                                                        </svg>
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <h5>Duration</h5>
                                                                        <small>{tourItemData.day} Day & {tourItemData.night} Night</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Booking Section */}
                                                        <div className="tour-item-booking-section card bg-light">
                                                            <div className="card-body">
                                                                <h5>Want To Purchase ?</h5>
                                                                <label htmlFor=""></label>
                                                                <div class="mb-3">
                                                                    <label for="tour-item-booking-date" class="form-label">Date</label>
                                                                    <input type="date" class="form-control" id="tour-item-booking-date" />
                                                                </div>
                                                                {/* Travelers */}
                                                                <div className="tour-item-booking-travelers border rounded p-2 mb-4" style={{ background: "#fff" }}>
                                                                    {
                                                                        travelers.map(dt =>
                                                                            <>
                                                                                {
                                                                                    dt.av &&
                                                                                    <div className="tour-item-booking-travelers-adalt d-flex">
                                                                                        <h6 className='col-7'>{dt.name}</h6>
                                                                                        <div className="col-5">
                                                                                            <button type="button" class="btn btn-warning text-light btn-sm me-3" onClick={() => handlePassengersAddOrRemove("infants", false)}>
                                                                                                <FontAwesomeIcon icon={faMinus} />
                                                                                            </button>
                                                                                            <span>{dt.travelers}</span>
                                                                                            <button type="button" class="btn btn-warning text-light btn-sm ms-3" onClick={() => setTravelers(() => {
                                                                                                
                                                                                            })}>
                                                                                                <FontAwesomeIcon icon={faPlus} />
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                }
                                                                            </>
                                                                        )
                                                                    }
                                                                </div>
                                                                <button className="btn btn-warning w-100 headerLoginBtn">Book Now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-8 text-start">
                                                        {/* Importent Heilight  */}

                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </>
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default TourItem;