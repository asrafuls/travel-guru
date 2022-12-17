import React, { useEffect, useState } from 'react';
import './TourPackages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useContextItems } from '../../contextApiMenager/contextApiMenager';

const TourPackages = () => {

    const [finalTourItems, setFinalTourItems] = useState(null)
    const [tourError, setTourError] = useState(false)
    const [tourErrorMsg, setTourErrorMsg] = useState(null)
    const [destinationTitle, setdestinationTitle] = useState(null)
    const [destinationId, setdestinationId] = useState(null)
    const [searchResultShow, setSearchResultShow] = useState(false)

    const { homeLoading, searchResult, handleSearchItems, tourItems, destinasonItems } = useContextItems()


    const params = new URLSearchParams(window.location.search)

    // Set default destinason id 
    useEffect(() => {
        setdestinationId(params.get("desId"))
    }, [])


    // Check Default Chack
    useEffect(() => {
        if (document.querySelector(`#destinasonFilterItem-${destinationId}`)) {
            document.querySelector(`#destinasonFilterItem-${destinationId}`).checked = true
        }
    }, [destinationId, params])


    // Handle Tours 
    useEffect(() => {
        if (destinationId) {
            if (tourItems?.status === 200) {
                const filteredItems = tourItems.data.filter(it => it.destinationId === destinationId)
                setFinalTourItems(filteredItems)
                setTourError(false)
            } else if (tourItems?.status === 400) {
                setTourError(true)
                setTourErrorMsg(tourItems.data)
                setFinalTourItems(null)
            }
        } else {
            if (tourItems?.status === 200) {
                setFinalTourItems(tourItems.data)
                setTourError(false)
            } else if (tourItems?.status === 400) {
                setTourError(true)
                setTourErrorMsg(tourItems.data)
                setFinalTourItems(null)
            }
        }
    }, [destinationId, tourItems])


    // Handle Search
    const handleSearch = (e) => {
        if (e?.length > 1) {
            handleSearchItems(e)
            setSearchResultShow(true)
        } else (
            setSearchResultShow(false)
        )
    }

    // Handle Title
    useEffect(() => {
        if (destinasonItems) {
            if (destinationId) {
                const findItemForTitle = destinasonItems?.status === 200 && destinasonItems.data.find(item => item.cId === destinationId)
                setdestinationTitle(findItemForTitle.title)
            } else {
                setdestinationTitle(null)
            }
        } else {
            setdestinationTitle(null)
        }
    }, [destinasonItems, destinationId, homeLoading])


    return (
        <div className='tour-packages' style={{ paddingTop: "80px" }}>
            <div className="message-col text-center">
                <div className="text-center text-light pt-5 message-col-text w-100 h-100">
                    <h3 className=''>Hello Traveller!</h3>
                    <h5>What You'd Like To Experience?</h5>
                </div>
            </div>
            <div className="container mt-3">
                {
                    homeLoading ?
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
                                                    <input type="text" class="form-control dropdown-toggle" onChange={(e) => handleSearch(e.target.value)} />
                                                    {
                                                        searchResultShow &&
                                                        <ul class="search-result-dropdown w-100 card rounded">
                                                            <div className="card-body">
                                                                {
                                                                    searchResult === null ?
                                                                        <div className='d-flex align-items-center justify-content-center'>
                                                                            <div class="spinner-grow text-warning" role="status">
                                                                                <span class="visually-hidden">Loading...</span>
                                                                            </div>
                                                                        </div>
                                                                        :
                                                                        <>
                                                                            {
                                                                                searchResult &&
                                                                                <>
                                                                                    {
                                                                                        searchResult?.map(dt =>
                                                                                            <div class="list-group">
                                                                                                <Link to={`/tour/${dt.cId}`} class="list-group-item list-group-item-action mb-2" aria-current="true">
                                                                                                    <div class="w-100">
                                                                                                        <small class="mb-1">{dt.title}</small>
                                                                                                    </div>
                                                                                                </Link>
                                                                                            </div>
                                                                                        )

                                                                                    }
                                                                                </>
                                                                            }
                                                                        </>
                                                                }
                                                            </div>
                                                        </ul>
                                                    }
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
                                                    destinasonItems?.status === 200 ? destinasonItems.data.map(dt => (
                                                        <div class="form-check mb-3">
                                                            <input class="form-check-input" type="radio" name="destinasonFilterItem" id={"destinasonFilterItem-" + dt?.cId} style={{ cursor: "pointer" }} onClick={() => setdestinationId(dt.cId)} />
                                                            <label class="form-check-label text-start" for={"destinasonFilterItem-" + dt?.cId} style={{ cursor: "pointer" }} onClick={() => setdestinationId(dt.cId)}>
                                                                {dt.title}
                                                            </label>
                                                        </div>
                                                    ))
                                                        :
                                                        <div className="p-4 text-center">
                                                            <span>Get Some Error</span>
                                                        </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="text-center py-3">
                                    <h4>{destinationTitle ? destinationTitle + " Tour Packages" : "All Tour Packages"}</h4>
                                </div>
                                <div className="search-items h-100 row">
                                    {
                                        homeLoading ?
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
                                                                finalTourItems?.length ?
                                                                    <>
                                                                        {
                                                                            finalTourItems.map(item => (
                                                                                <div className="col-4">
                                                                                    <div class="card">
                                                                                        <div style={{ height: "180px" }}>
                                                                                            <img src={item?.imgs[0]} class="card-img-top" alt="" style={{ height: "inherit" }} />
                                                                                        </div>
                                                                                        <div class="card-body text-start">
                                                                                            <h5 class="card-title">{item?.title}</h5>
                                                                                            <br />
                                                                                            <h6>Start From <span className='text-warning'>{item?.price}</span><b> ৳ </b></h6>
                                                                                            <small>{item.day} Day, {item.night} Night</small><br />
                                                                                            <Link to={`/tour/${item.cId}`} class="mt-5">
                                                                                                <Button size="small" className='btn btn-warning bg-warning text-light px-4 mt-3'>BOOK</Button>
                                                                                            </Link>
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