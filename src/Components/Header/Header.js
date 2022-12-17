import React from 'react';
import './Header.css';
import logo from './../../logo/Logo.png';
import logoDarkImg from './../../logo/LogoDark.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContextItems } from '../../contextApiMenager/contextApiMenager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

const Header = () => {

    const { user, tourItems, singOut } = useContextItems()

    const [logoDark, setLogoDark] = useState(true)
    const locationPath = window.location.pathname;

    useEffect(() => {
        if (locationPath === '/') {
            setLogoDark(false)
            document.querySelector('#header').classList.remove('textDark')
        } else {
            setLogoDark(true)
            document.querySelector('#header').classList.add('textDark')
        }
    }, [locationPath])

    console.log(tourItems?.data)

    useEffect(() => {
        if (tourItems?.data) {
            const fisf = tourItems?.data.filter(dt => {
                if (dt.title.toLowerCase().includes("c")) {
                    return dt
                } else {
                    return null
                }
            })
            console.log(fisf)
        }
    }, [tourItems])

    return (
        <div id='header' className='headerMain textDark'>
            <div className='container'>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <Link class="navbar-brand" to="/">
                        {
                            logoDark ?
                                <>
                                    <img style={{ width: '90px' }} src={logoDarkImg} alt="Travel Guru Dark" />
                                </>
                                :
                                <>
                                    <img style={{ width: '90px' }} src={logo} alt="Travel Guru Dark" />
                                </>
                        }
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <from class="form-inline my-2 my-lg-0 me-auto text-light headerSearch d-flex">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <input class="form-control me-sm-2" type="search" placeholder="Search Tours" aria-label="Search" />
                        </from>
                        <ul class="navbar-nav headerMenu">
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/tour-packages">Tours</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/hotels">Hotels</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/contact-us">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/flight">Flight</Link>
                            </li>
                            <li class="nav-item active">
                                {
                                    user ?
                                        <button onClick={() => singOut()} class="btn text-light btn-danger headerLoginBtn">Log Out</button>
                                        :
                                        <a class="btn btn-danger headerLoginBtn " href="/login">Login</a>
                                }
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;