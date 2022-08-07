import React, { useEffect, useState } from 'react';
import './TourPackages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const TourPackages = () => {

    const [destinasonItems, setDestinasonItems] = useState(null)
    const [tourItems, setTourItems] = useState(null)
    const [desLoading, setDesLoading] = useState(true)
    const [tourLoading, setTourLoading] = useState(true)
    const [tourError, setTourError] = useState(false)
    const [tourErrorMsg, setTourErrorMsg] = useState(null)
    const [desError, setDesError] = useState(false)
    const [desErrorMsg, setDesErrorMsg] = useState(null)
    const [destinasonId, setDestinasonId] = useState(null)
    const [selectedDestinasonData, setSelectedDestinasonData] = useState(null)


    const params = new URLSearchParams(window.location.search)

    // Set default destinason id 
    useEffect(() => {
            setDestinasonId(params.get("desId"))
    }, [])


    // Selected destinason data
    useEffect(() => {
        if (destinasonId) {
            axios(`/destinason-item/${destinasonId}`)
                .then(data => {
                    setSelectedDestinasonData(data.data)
                })
        } else {
            setSelectedDestinasonData(null)
        }
    }, [destinasonId])


    // Get Destinason Data From Db
    useEffect(() => {
        setDesLoading(true)
        axios.get('/destinason-items')
            .then(data => {
                setDestinasonItems(data.data)
                setDesLoading(false)
            })
            .catch(error => {
                setDesLoading(false)
                setDesError(true)
                setDesErrorMsg(error.message)
            })
    }, [])


    // Check Default Chack
    useEffect(() => {
        if (document.querySelector(`#destinasonFilterItem-${destinasonId}`)) {
            document.querySelector(`#destinasonFilterItem-${destinasonId}`).checked = true
        }
    }, [destinasonId, params])


    // Get Tours 
    useEffect(() => {
        setTourLoading(true)
        if (destinasonId) {
            axios.get(`/tour-items?desId=${destinasonId}`)
                .then(response => {
                    setTourLoading(false)
                    setTourItems(response.data)
                })
                .catch(error => {
                    setTourError(true)
                    setTourErrorMsg(error.message)
                })
        } else {
            axios.get('/tour-items')
                .then(response => {
                    setTourLoading(false)
                    setTourItems(response.data)
                })
                .catch(error => {
                    setTourError(true)
                    setTourErrorMsg(error.message)
                })
        }
    }, [destinasonId])

    console.log(destinasonId)

    return (
        <div className='tour-packages' style={{ paddingTop: "80px" }}>
            <div className="message-col text-center">
                <div className="text-center text-light pt-5 message-col-text w-100 h-100 bg-dark">
                    <h3 className=''>Hello Traveller!</h3>
                    <h5>What You'd Like To Experience?</h5>
                </div>
            </div>
            <div className="container mt-3">
                {
                    desLoading ?
                        <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "26vh" }}>
                            <div class="spinner-border text-warning" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        :
                        <div className="row">
                            <div className="col-3">
                                <div className="card">
                                    <div className="card-body">
                                        {/* Destinason Section */}
                                        <div class="card text-bg-warning mb-3">
                                            <div class="card-header h6 text-light">Search Package</div>
                                            <div class="card-body">
                                                <div class="input-group mb-3" style={{ cursor: "pointer" }}>
                                                    <input type="text" class="form-control" placeholder="Search Package" />
                                                    <button class="input-group-text btn btn-primary" id="basic-addon2">
                                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Destinason Section */}
                                        <div className="card">
                                            <div class="card-header h6 text-dark">Destinason</div>
                                            <div className="card-body text-start">
                                                {
                                                    destinasonItems?.map(dt => (
                                                        <div class="form-check mb-3">
                                                            <input class="form-check-input" type="radio" name="destinasonFilterItem" id={"destinasonFilterItem-" + dt?.cId} style={{ cursor: "pointer" }} onClick={() => setDestinasonId(dt.cId)} />
                                                            <label class="form-check-label text-start" for={"destinasonFilterItem-" + dt?.cId} style={{ cursor: "pointer" }} onClick={() => setDestinasonId(dt.cId)}>
                                                                {dt.title}
                                                            </label>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="text-center py-3">
                                    <h4>{selectedDestinasonData ? selectedDestinasonData.title + " Tour Packages" : "All Tour Packages"}</h4>
                                </div>
                                <div className="search-items h-100 row">
                                    {
                                        tourLoading ?
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div class="spinner-border text-warning" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                            :
                                            <>
                                                {
                                                    tourError ?
                                                        <div className="d-flex justify-content-center align-items-center">
                                                            <span>{tourErrorMsg ? tourErrorMsg : "We Got Some Error."}</span>
                                                        </div>
                                                        :
                                                        <>
                                                            {
                                                                tourItems?.length ?
                                                                    <>
                                                                        {
                                                                            tourItems.map(item => (
                                                                                <div className="col-4">
                                                                                    <div class="card">
                                                                                        <div style={{ height: "180px" }}>
                                                                                            <img src={item?.imgs[0]} class="card-img-top" alt="..." style={{ height: "inherit" }} />
                                                                                        </div>
                                                                                        <div class="card-body text-start">
                                                                                            <h5 class="card-title">{item?.title}</h5>
                                                                                            <br />
                                                                                            <h6>Start From <span className='text-warning'>{item?.price}</span><b> ৳ </b></h6>
                                                                                            <small>{item.day} Day, {item.night} Night</small><br />
                                                                                            <a href={`/tour/${item.cId}`} class="btn btn-warning text-light px-4 mt-3 py-1">Book</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </>
                                                                    :
                                                                    <div className="d-flex justify-content-center align-items-center">
                                                                        <span>Don't have any packages in this destinason.</span>
                                                                    </div>
                                                            }
                                                        </>
                                                }
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default TourPackages;