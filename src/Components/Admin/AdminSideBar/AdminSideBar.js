import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../logo/LogoDark.png';
import './AdminSideBar.css'

const AdminSideBar = ({ menus }) => {

    const path = window.location.pathname

    console.log(path)

    return (
        <div className='px-2 mt-3'>
            <div className="admin-side-bar-logo">
                <a href="/admin">
                    <img src={logo} alt="" className='ms-5 mt-3' style={{ width: "100px" }} />
                </a>
            </div>
            <div className="admin-sidebar-links mt-5 mb-auto">
                {
                    menus.map(dt => (
                        <>
                            <Link to={dt.link}>
                                <Button className={path === dt.link ? "admin-nav-item px-3 w-100 text-start text-dark admin-menu-actived mb-3" : path === dt.link + "/" ? "admin-nav-item px-3 w-100 text-start text-dark admin-menu-actived mb-3" : "admin-nav-item px-3 w-100 text-start text-dark mb-3"}><b>{dt.name}</b></Button>
                            </Link>
                            <br />
                        </>
                    ))
                }

            </div>
            <Button className="admin-nav-item px-3 w-100 text-start text-dark admin-menu-actived mb-3 footer mt-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle me-3" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg>
                <b>Log Out</b>
            </Button>
        </div>
    );
};

export default AdminSideBar;