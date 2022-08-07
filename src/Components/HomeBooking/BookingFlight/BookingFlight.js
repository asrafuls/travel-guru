import React, { useState } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import FlightBookingForm from './FlightBookingForm/FlightBookingForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const BookingFlight = ({type}) => {
    const [flightWay, setFlightWay] = useState("round")

    return (
        <div className="booking-section-flight mt-3 row">
            <div className="py-4">
                <div className=" text-center">
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button className={flightWay === "one" ? 'btn active' : 'btn'} onClick={() => setFlightWay("one")}>One Way</Button>
                        <Button className={flightWay === "round" ? 'btn active' : 'btn'} onClick={() => setFlightWay("round")}>Round Way</Button>
                        <Button className={flightWay === "multi" ? 'btn active' : 'btn'} onClick={() => setFlightWay("multi")}>Multi City</Button>
                    </ButtonGroup>
                </div>
            </div>
            <FlightBookingForm setFlightWay={setFlightWay} flightWay={flightWay} multi={false}  />
            {
                flightWay === "multi" &&
                <FlightBookingForm setFlightWay={setFlightWay} flightWay="multi" multi={true} />
            }
            <div className="text-center mt-4">
                <Button className='py-2 px-5 bg-success text-light' >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <span className="ms-2">Search Flight</span>
                </Button>
            </div>
        </div>
    );
};

export default BookingFlight;