import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import './BooksProduct.css';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const BooksProduct = () => {

    return (
        <div className='productBookingMain'>
            <div style={{ display: 'flex' }} className="container">
                <div className="bookingLeft text-start text-light">
                    <br/><br/><br/>
                    <h1 className="">Cox's bazar</h1>
                    <span>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</span>
                </div>
                <div className="bookingRight">
                    <form className="bookingForm text-start">
                        <div className="inputControl">
                            <label htmlFor="fromOrigin">Origin</label><br />
                            <select style={{ width: '100%' }} id='fromOrigin' type="text" name='origin' className="bookingFormOrigin" >
                                <option value="dhaka">Dhaka</option>
                                <option value="munshiganj">Munshiganj</option>
                                <option value="narayanganj">Narayanganj</option>
                                <option value="manikganj">Manikganj</option>
                                <option value="gazipur">Gazi Pur</option>
                                <option value="savar">Savar</option>
                            </select><br />
                        </div>
                        <div className="inputControl">
                            <label htmlFor="fromDestination">Destination</label><br />
                            <select style={{ width: '100%' }} name="destination" id="fromDestination">
                                <option value="coxsbazar">Cox's Bazar</option>
                                <option value="sajek">Sajek</option>
                                <option value="sreemangal">Sreemangal</option>
                                <option value="saintmartin">Saint Martin</option>
                            </select><br />
                        </div>
                        <div style={{ display: 'flex' }} className="inputControl">
                            <div style={{ width: '49%', marginRight: '2%' }}>
                                <label for="fromForm">Form:</label><br />
                                <input style={{ width: '100%' }} type="date" id="fromForm" name="form" />
                            </div>
                            <div style={{ width: '49%' }}>
                                <label for="fromTo">To:</label><br />
                                <input style={{ width: '100%' }} type="date" id="fromTo" name="to" />
                            </div>
                        </div>
                        <br />
                        <Link className='submitBooking' to='./../../booking' ><Button style={{ width: '100%' }} id="fromSubmit" name="to">Start Booking</Button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BooksProduct;