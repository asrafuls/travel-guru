import React from 'react';
import './Header.css';
import logo from './../../logo/Logo.png';
import logoDarkImg from './../../logo/LogoDark.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from './../../authenticationMenager/authentication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Header = () => {

    const { user, singOut } = useAuth()

    const [logoDark, setLogoDark] = useState(true)
    const locationPath = window.location.pathname;

    useEffect(() => {
        if (locationPath === '/') {
            setLogoDark(false)
            document.querySelector('#header').classList.remove('textDark')
        }
    }, [])

    return (
        <div id='header' className='headerMain textDark'>
            <div className='container'>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="/">
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
                    </a>
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
                                <a class="nav-link text-light" href="/tour-packages">Tours</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/hotels">Hotels</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/flight">Flight</a>
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