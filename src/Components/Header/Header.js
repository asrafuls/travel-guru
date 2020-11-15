import React from 'react';
import './Header.css';
import logo from './../../logo/Logo.png';
import logoDarkImg from './../../logo/LogoDark.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../../authenticationMenager/authentication';

const Header = () => {

    const auth = useAuth()
    console.log(auth.user)

    const [logoDark, setLogoDark] = useState(false)
    const locationPath = window.location.pathname;

    useEffect(() => {
        if (locationPath === '/login') {
            setLogoDark(true)
            document.querySelector('#header').classList.add('textDark')
        } else if (locationPath === '/booking') {
            setLogoDark(true)
            document.querySelector('#header').classList.add('textDark')
        } else if (locationPath === '/contact') {
            setLogoDark(true)
            document.querySelector('#header').classList.add('textDark')
        } else if (locationPath === '/blog') {
            setLogoDark(true)
            document.querySelector('#header').classList.add('textDark')
        } else if (locationPath === '/destination') {
            setLogoDark(true)
            document.querySelector('#header').classList.add('textDark')
        } else if (locationPath === '/forgotpassword') {
            setLogoDark(true)
            document.querySelector('#header').classList.add('textDark')
        } else if (locationPath === '/news') {
            setLogoDark(true)
            document.querySelector('#header').classList.add('textDark')
        } else {
            setLogoDark(false)
            document.querySelector('#header').classList.remove('textDark')
        }
    }, [])

    return (
        <div id='header' className='headerMain'>
            <div className='container'>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="./../../">
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
                        <from class="form-inline my-2 my-lg-0 mr-auto headerSearch">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search searchIcon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            </svg>
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </from>
                        <ul class="navbar-nav headerMenu">
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/news">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/destination">Destination</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/blog">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/contact">Contact</a>
                            </li>
                            <li class="nav-item active">
                                <a class="btn btn-danger headerLoginBtn" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;