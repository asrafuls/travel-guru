import React, { useState } from 'react';
import { useEffect } from 'react';
import AdminSideBar from './AdminSideBar/AdminSideBar';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useContextItems } from '../../contextApiMenager/contextApiMenager';
import axios from 'axios';

const Admin = () => {

    const [admins, setAdmins] = useState(null)
    const [adminItem, setAdminItem] = useState(null)

    const path = window.location.pathname

    const menus = [
        {
            name: "Home",
            link: "/admin/home"
        },
        {
            name: "Tour Items",
            link: "/admin/tour-items"
        },
        {
            name: "Our Hotels",
            link: "/admin/our-hotels"
        },
        {
            name: "Booked Tours",
            link: "/admin/booked-tours"
        },
        {
            name: "Booked hotels",
            link: "/admin/booked-hotels"
        },
        {
            name: "Booked flights",
            link: "/admin/booked-flights"
        }
    ]

    const user = useContextItems().user

    // Get Admin items fro db
    useEffect(() => {
        axios.get('/admins')
            .then(data => {
                setAdmins(data.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])

    // Redayrect In Home
    useEffect(() => {
        if (path === "/admin" && "/admin/") {
            window.location.replace('/admin/home')
        } else {

        }
    }, [path])

    // Verify Admin Email
    useEffect(() => {
        if (admins) {
            console.log("admins")
            if (user) {
                console.log("user")
                for (let i = 0; i < admins.length; i++) {
                    if (admins[i].email === user.email) {
                        setAdminItem(admins[i])
                        // console.log(admins[i].email)
                    } else {
                        
                    }
                }
            } else {
                setAdminItem(null)
            }
        } else {
            setAdminItem(null)
        }
    }, [user, admins])

    // console.log(admins)
    // console.log(user)
    // console.log(adminItem)

    return (
        <div className="container-fluid admin-main">
            <Router>
                <Switch>
                    {
                        user ?
                            <>
                                {
                                    user?.email === adminItem?.email ?
                                        <>
                                            {
                                                menus.map(dt => (
                                                    <Route exact path={dt.link}>
                                                        <div className="row">
                                                            <div className="admin-side-bar col-sm-2 bg-light" style={{ height: "100vh" }}>
                                                                <AdminSideBar menus={menus} />
                                                            </div>
                                                            <div className="col-sm-10">
                                                                <h2>{dt.name}</h2>
                                                            </div>
                                                        </div>
                                                    </Route>
                                                ))
                                            }
                                        </>
                                        :
                                        <div className="d-flex justify-content-center align-item-center">
                                            <div className="card pt-2 text-center" style={{ width: "400px", height: "150px", marginTop: "35vh" }}>
                                                <div className="card-body py-5">
                                                    <h5>You Are Not Authorized.</h5>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </>
                            :
                            <div className="d-flex justify-content-center align-item-center">
                                <div className="card pt-2 text-center" style={{ width: "300px", height: "150px", marginTop: "35vh" }}>
                                    <div className="card-body">
                                        <h6> You Are Not Logged In.</h6>
                                        <a href="/login"><button className="btn btn-primary px-4 mt-4">LogIn</button></a>
                                    </div>
                                </div>
                            </div>
                    }
                </Switch>
            </Router>
        </div>
    );
};

export default Admin;