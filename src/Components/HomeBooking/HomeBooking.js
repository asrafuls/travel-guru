import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJetFighter, faHotel, faMountainCity } from '@fortawesome/free-solid-svg-icons';
import BookingFlight from './BookingFlight/BookingFlight';
import './HomeBooking.css';
import 'react-calendar/dist/Calendar.css';
import BookingHotel from './BookingHotel/BookingHotel';

const HomeBooking = () => {

    const [bookingActive, setBookingActive] = useState('hotels')

    const [bg, setBg] = useState("https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg")


    // Flight Hotel and Touts Tab Change
    const handleTabChange = (info) => {
        if (info === "flight") {
            setBookingActive("flight")
            setBg("https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg")
        } else if (info === "hotels") {
            setBookingActive("hotels")
            setBg("https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg")
        } else if (info === "tours") {
            setBookingActive("tours")
            setBg("https://images.pexels.com/photos/1450340/pexels-photo-1450340.jpeg")
        }
    }


    return (
        <div className='homeBookingMain' style={{ background: `url("${bg}")` }}>
            <div className="container home-booking-card p-4 card">
                <nav class=" nav nav-pills flex-column flex-sm-row" style={{ fontWeight: "bold", cursor: "pointer" }}>
                    <span class={bookingActive === "flight" ? "flex-sm-fill text-sm-center nav-link text-dark active" : "flex-sm-fill text-sm-center nav-link text-dark"} onClick={() => handleTabChange("flight")}>
                        <FontAwesomeIcon icon={faJetFighter} />
                        <span className='ms-3'>Flight</span>
                    </span>
                    <span class={bookingActive === "hotels" ? "flex-sm-fill text-sm-center nav-link text-dark active" : "flex-sm-fill text-sm-center nav-link text-dark"} onClick={() => handleTabChange("hotels")}>
                        <FontAwesomeIcon icon={faHotel} />
                        <span className='ms-3'>Hotels</span>
                    </span>
                    <span class={bookingActive === "tours" ? "flex-sm-fill text-sm-center nav-link text-dark active" : "flex-sm-fill text-sm-center nav-link text-dark"} onClick={() => handleTabChange("tours")}>
                        <FontAwesomeIcon icon={faMountainCity} />
                        <span className='ms-3'>Tours</span>
                    </span>
                </nav>

                {/* Booking Sections */}
                {
                    bookingActive === "flight" ?
                        <>
                            <BookingFlight/>
                        </>
                        : bookingActive === "hotels" ?
                            <BookingHotel />
                            : bookingActive === "tours" ?
                                <></>
                                :
                                <></>
                }
            </div>
        </div>
    );
};

export default HomeBooking;