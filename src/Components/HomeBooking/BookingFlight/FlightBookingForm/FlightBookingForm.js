import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Calendar from 'react-calendar';


const FlightBookingForm = ({ setFlightWay, flightWay, multi }) => {

    const [airportFrom, setAirportFrom] = useState(null)
    const [airportTo, setAirportTo] = useState(null)
    const [airportFromList, setAirportFromList] = useState(false)
    const [airportToList, setAirportToList] = useState(false)
    const [airportFromItemDetails, setairportFromItemDetails] = useState(null)
    const [airportToItemDetails, setairportToItemDetails] = useState(null)
    const [journeyStart, setJourneyStart] = useState(false)
    const [journeyReturn, setJourneyReturn] = useState(false)
    const [passengerMenuActive, setPassengerMenuActive] = useState(false)

    // Passenger Items
    const [passengerAdult, setPassengerAdult] = useState(1)
    const [passengerChildren, setPassengerChildren] = useState(0)
    const [passengerInfants, setPassengerInfants] = useState(0)
    const [passengerClassEconomy, setPassengerClassEconomy] = useState(true)

    // Airport Items List
    const airpotItems = [
        {
            code: "DAC",
            name: "Hajrat Sahajalal International Airport",
            city: "Dhaka",
            country: "Bangladesh",
            Address: "Kurmitola, Dhaka, Bangladesh",
            id: "DACBD"
        },
        {
            code: "CXB",
            name: "Cox's Bazar Airport",
            city: "Cox's Bazar",
            country: "Bangladesh",
            Address: "Cox's Bazar, Bangladesh",
            id: "CXBBD"
        },
        {
            code: "KUL",
            name: "Kuala Lumpur International Airport",
            city: "Kuala Lumpur",
            country: "Malaysia",
            Address: "Kuala Lumpur, Malaysia",
            id: "KULMY"
        },
        {
            code: "ZYL",
            name: "Osmani International Airport",
            city: "Sylhet",
            country: "Bangladesh",
            Address: "Sylhet, Bangladesh",
            id: "ZYLBD"
        },
        {
            code: "CCU",
            name: "Netaji Subhash Chandra Bose International Airport",
            city: "Kolkata",
            country: "India",
            Address: "Kolkata, India",
            id: "CCUIN"
        },
        {
            code: "CGP",
            name: "Shah Amanat International Airport",
            city: "Chattogram",
            country: "Bangladesh",
            Address: "Chattogram, Bangladesh",
            id: "CGPBD"
        },
    ]


    // Flight From Menu Active
    const flightFromToMenu = (dt) => {
        if (dt) {
            setAirportFromList(true);
            setAirportToList(false)
        } else {
            setAirportFromList(false);
            setAirportToList(true)
        }
    }

    // Handle Airport Item Add Or Change
    const addAirportItem = (from, itemId) => {
        if (from) {
            setAirportFrom(itemId)
            if (airportFromList) {
                setAirportFromList(false)
            } else {
                flightFromToMenu(true)
            }
        } else {
            setAirportTo(itemId)
            if (airportToList) {
                setAirportToList(false)
            } else {
                flightFromToMenu(false)
            }
        }
    }

    // Handle Journey Date Control
    const handleJourneyDate = (start) => {
        if (start) {
            if (journeyStart) {
                setJourneyStart(false)
            } else {
                setJourneyStart(true)
                setJourneyReturn(false)
                setPassengerMenuActive(false)
            }
        } else {
            if (journeyReturn) {
                setJourneyReturn(false)
            } else {
                setJourneyStart(false)
                setJourneyReturn(true)
                setPassengerMenuActive(false)
            }
        }
    }

    // Handle Passengers Add Or Remove
    const handlePassengersAddOrRemove = (type, add) => {
        if (type === 'adult') {
            if (add) {
                setPassengerAdult(passengerAdult === 5 ? 5 : passengerAdult < 5 && passengerAdult + 1)
            } else {
                setPassengerAdult(passengerAdult === 1 ? 1 : passengerAdult > 1 ? passengerAdult - 1 : 1)
            }
        } else if (type === 'children') {
            if (add) {
                setPassengerChildren(passengerChildren === 3 ? 3 : passengerChildren < 3 && passengerChildren + 1)
            } else {
                setPassengerChildren(passengerChildren === 0 ? 0 : passengerChildren > 0 ? passengerChildren - 1 : 0)
            }
        } else if (type === "infants") {
            if (add) {
                setPassengerInfants(passengerInfants === 3 ? 3 : passengerInfants < 3 && passengerInfants + 1)
            } else {
                setPassengerInfants(passengerInfants === 0 ? 0 : passengerInfants > 0 ? passengerInfants - 1 : 0)
            }
        } else {

        }
    }

    // Find Default Destination Infos
    useEffect(() => {
        if (airportFrom) {
            setairportFromItemDetails(airportFrom && airpotItems.find(dt => dt.id === airportFrom))
        }
        if (airportTo) {
            setairportToItemDetails(airportTo && airpotItems.find(dt => dt.id === airportTo))
        }
    }, [airportFrom, airportTo])


    // Set Default Destination
    useEffect(() => {
        setAirportFrom("DACBD")
        setAirportTo("CXBBD")
    }, [])

    console.log(airportFromList, airportToList, journeyStart, journeyReturn, passengerMenuActive)


    return (
        <>
            <div className="flight-start-to-end col-6 mb-3">
                <div className="border bg-light p-2 w-100 rounded d-flex">
                    <div className="flying-from text-start p-1 w-50 airport-section-item" style={{ borderRight: "1px solid #DEE2E6" }}>
                        <div className="airport-section-item-option-btn" onClick={() => airportFromList ? setAirportFromList(false) : flightFromToMenu(true)}>
                            <small>FROM</small>
                            {
                                airportFromItemDetails &&
                                <>
                                    <h5>{airportFromItemDetails.city}</h5>
                                    <small>{airportFromItemDetails.code}, {airportFromItemDetails.name}</small>
                                </>
                            }
                        </div>
                        {
                            airportFromList &&
                            <div className="card py-2 airpot-from-list airpot-destinaton-list" >
                                <div class="input-group flex-nowrap px-2 mb-2">
                                    <span class="input-group-text" id="addon-wrapping" style={{ borderRadius: ".25rem 0 0 .25rem" }}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </span>
                                    <input type="text" class="form-control rounded-end" placeholder="Search" aria-label="Search" aria-describedby="addon-wrapping" />
                                </div>
                                <div className="airpot-from-list-items" style={{ maxHeight: "300px", overflowX: "hidden" }}>
                                    {
                                        airpotItems.map(dt => (
                                            <div className={airportFrom === dt.id ? 'airport-items-item text-start border-bottom px-3 py-2 d-flex bg-warning text-light' : 'airport-items-item text-start border-bottom px-3 py-2 d-flex'} onClick={() => addAirportItem(true, dt.id)}>
                                                <div className="airport-items-item-left" style={{ width: "85%" }}>
                                                    <span className='h6 me-3'>{dt.Address} </span><br />
                                                    <small> {dt.name}</small>
                                                </div>
                                                <div className="airport-items-item-right" style={{ width: "15%", marginTop: "10px" }}>
                                                    <div className="h4 text-warning">{dt.code}</div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                    </div>
                    <div className="flying-from text-start p-1 w-50 airport-section-item">
                        <div className="airport-section-item-option-btn" onClick={() => airportToList ? setAirportToList(false) : flightFromToMenu(false)}>
                            <small>TO</small>
                            {
                                airportToItemDetails &&
                                <>
                                    <h5>{airportToItemDetails.city}</h5>
                                    <small>{airportToItemDetails.code}, {airportToItemDetails.name}</small>
                                </>
                            }
                        </div>
                        {
                            airportToList &&
                            <div className="card py-2 airpot-to-list airpot-destinaton-list">
                                <div class="input-group flex-nowrap px-2 mb-2">
                                    <span class="input-group-text" id="addon-wrapping" style={{ borderRadius: ".25rem 0 0 .25rem" }}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </span>
                                    <input type="text" class="form-control rounded-end" placeholder="Search" aria-label="Search" aria-describedby="addon-wrapping" />
                                </div>
                                <div className="airpot-from-list-items" style={{ maxHeight: "300px", overflowX: "hidden" }}>
                                    {
                                        airpotItems.map(dt => (
                                            <div className={airportTo === dt.id ? 'airport-items-item text-start border-bottom px-3 py-2 d-flex bg-warning text-light' : 'airport-items-item text-start border-bottom px-3 py-2 d-flex'} onClick={() => addAirportItem(false, dt.id)}>
                                                <div className="airport-items-item-left" style={{ width: "85%" }}>
                                                    <span className='h6 me-3'>{dt.Address} </span><br />
                                                    <small> {dt.name}</small>
                                                </div>
                                                <div className="airport-items-item-right" style={{ width: "15%", marginTop: "10px" }}>
                                                    <div className="h4 text-warning">{dt.code}</div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="flight-date-section col-3">
                <div className="border bg-light p-2 w-100 rounded d-flex">
                    <div className="w-50 p-1 text-start border-end" style={{ borderRight: "1px solid rgb(222, 226, 230)", cursor: "pointer" }}>
                        <div className="" onClick={() => handleJourneyDate(true)}>
                            <small>JOURNEY DATE</small><br />
                            <h5>17 Jul'22</h5>
                            <small>Sunday</small>
                        </div>
                        {
                            journeyStart &&
                            <div className='return-date-calender'>
                                <Calendar />
                            </div>
                        }
                    </div>
                    {
                        flightWay === "round" ?
                            <div className="w-50 p-1 text-start" style={{ cursor: "pointer" }}>
                                <div className='' onClick={() => handleJourneyDate(false)}>
                                    <small>RETURN DATE</small><br />
                                    <h5>18 Jul'22</h5>
                                    <small>Sunday</small>
                                </div>
                                {
                                    journeyReturn &&
                                    <div className='return-date-calender'>
                                        <Calendar />
                                    </div>
                                }
                            </div>
                            : flightWay === "multi" ?
                                <></>
                                :
                                <div className="w-50 p-1 text-start" style={{ cursor: "pointer" }} onClick={() => setFlightWay("round")}>
                                    <small>RETURN DATE</small><br />
                                    <small>Save more on return flight</small>
                                    {
                                        journeyReturn &&
                                        <div className='return-date-calender'>
                                            <Calendar />
                                        </div>
                                    }
                                </div>
                    }
                </div>
            </div>
            {
                multi === false &&
                <div className="col-3 flight-passenger-section">
                    <div className="border text-start bg-light p-2 w-100 rounded" style={{ cursor: "pointer" }} onClick={() => passengerMenuActive ? setPassengerMenuActive(false) : setPassengerMenuActive(true)}>
                        <div className="p-1">
                            <small>Passengers & Cabin Class</small>
                            <h5>{passengerAdult + passengerChildren + passengerInfants} Person</h5>
                            <small className="text-bold">{passengerClassEconomy ? "Economy Class" : "Business Class"}</small>
                        </div>
                    </div>
                    {
                        passengerMenuActive &&

                        <div className="card flight-passenger-section-menu">
                            <div className="card-body text-start">
                                <h6>Class</h6>
                                <button className={passengerClassEconomy ? "btn btn-warning text-light w-100 mb-2" : "btn w-100 mb-2"} onClick={() => setPassengerClassEconomy(true)}>Economy Class</button>
                                <button className={passengerClassEconomy === false ? "btn btn-warning text-light w-100 mb-2" : "btn w-100 mb-2"} onClick={() => setPassengerClassEconomy(false)} >Business Class</button>
                                <hr />
                                <h6>Passengers</h6>
                                <div className="mb-2 d-flex">
                                    <div className="w-50">
                                        <span>Adult</span><br />
                                        <small className='fw-lighter'>12+</small>
                                    </div>
                                    <div className='w-50 d-inline text-end mt-2'>
                                        <button type="button" class="btn btn-warning text-light btn-sm me-3" onClick={() => handlePassengersAddOrRemove("adult", false)}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <span>{passengerAdult}</span>
                                        <button type="button" class="btn btn-warning text-light btn-sm ms-3" onClick={() => handlePassengersAddOrRemove("adult", true)}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-2 d-flex">
                                    <div className="w-50">
                                        <span>Children</span><br />
                                        <small className='fw-lighter'>2-12 Years</small>
                                    </div>
                                    <div className='w-50 d-inline text-end mt-2'>
                                        <button type="button" class="btn btn-warning text-light btn-sm me-3" onClick={() => handlePassengersAddOrRemove("children", false)}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <span>{passengerChildren}</span>
                                        <button type="button" class="btn btn-warning text-light btn-sm ms-3" onClick={() => handlePassengersAddOrRemove("children", true)}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-2 d-flex">
                                    <div className="w-50">
                                        <span>Infants</span><br />
                                        <small className='fw-lighter'>Below 2 Years</small>
                                    </div>
                                    <div className='w-50 d-inline text-end mt-2'>
                                        <button type="button" class="btn btn-warning text-light btn-sm me-3" onClick={() => handlePassengersAddOrRemove("infants", false)}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <span>{passengerInfants}</span>
                                        <button type="button" class="btn btn-warning text-light btn-sm ms-3" onClick={() => handlePassengersAddOrRemove("infants", true)}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button type='button' className="ms-auto w-25 btn btn-sm btn-warning text-light mb-3 me-3" onClick={() => setPassengerMenuActive(false)}>DONE</button>
                        </div>
                    }
                </div>
            }
        </>
    );
};

export default FlightBookingForm;