import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContextItems } from '../../contextApiMenager/contextApiMenager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"
import './Login.css'
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import logo from '../../logo/LogoDark.png'

const Login = () => {

    const [fullName, setFullName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [cPassword, setCPassword] = useState(null)

    const [singIn, setSingIn] = useState(true)

    const auth = useContextItems()
    const { googleSignIn, passwordSignUp } = auth;


    // Email Validation Function
    const validateEmail = (email) => {
        const em = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
        console.log(em)
        if (em) {
            setEmail(email)
        }
    }

    // Password Validation Function
    const validatePassword = () => {
        if ((/^[A-Za-z]\w{7,14}$/.test(password))) {
            return true
        } else {
            return false
        }
    }

    // Create Account Function
    const handleCreateAccount = (e) => {
        e.preventDefault()
        e.target.reset()
        if (fullName && email && cPassword) {
            passwordSignUp(fullName, email, cPassword)
        }

    }

    // Logged In User Manage
    useEffect(() => {
        if (auth.user) {
            window.location.pathname = '/'
        }
    })

    console.log(singIn)

    return (
        <>
            {
                auth.user ?
                    <div className="container pt-5">
                        <div className="text-center" style={{ marginTop: "40vh" }}>You are Logged In</div>
                    </div>
                    :
                    <div className='loginMain'>
                        <div className="container">
                            <div className="text-center">
                                <a href="/">
                                    <img className='mb-5' style={{width: "100px"}} src={logo} alt="" />
                                </a>
                            </div>
                            <div className="loginSection d-flex justify-content-center">
                                <div className="w-25">
                                    {
                                        singIn ?
                                            <SignIn setSingIn={setSingIn} />
                                            :
                                            <SignUp setSingIn={setSingIn} />
                                    }
                                    <div className="loginBottomOrSection">
                                        <span className="loginOrText">Or</span>
                                        <div className="loginOrTextBgLine"></div>
                                    </div>
                                    <div className="loginBottomOtherLoginOption">
                                        <Button className='loginWithFacebook loginOtherLoginBtn text-primary w-100 border mb-3'>
                                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                                            <span className='ms-3 text-dark'>Sign In With Facebook</span>
                                        </Button><br />
                                        <Button onClick={googleSignIn} className='loginWithGoogle loginOtherLoginBtn text-danger w-100 border'>
                                            <FontAwesomeIcon icon={faGoogle} size="2x" />
                                            <span className='ms-3 text-dark'>Sign In With Google</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Login;