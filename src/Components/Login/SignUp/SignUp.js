import React, { useState } from 'react';
import { useAuth } from '../../../authenticationMenager/authentication';
import { Button, TextField } from '@material-ui/core';

const SignUp = ({ setSingIn }) => {

    const [fullName, setFullName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const [emailPrimaryVerify, setEmailPrimaryVerify] = useState(false)
    const [passwordPrimaryVerify, setPasswordPrimaryVerify] = useState(false)

    const auth = useAuth()
    const { passwordSignUp } = auth;


    // Email Validation Function
    const validateEmail = () => {
        if ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
            return true
        } else {
            return false
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
        if (fullName || email || password) {
            if (validateEmail || validatePassword) {
                setEmailPrimaryVerify(false)
                setPasswordPrimaryVerify(false)
                passwordSignUp(fullName, email, password)
            } else {
                if (!validateEmail) {
                    setEmailPrimaryVerify(true)
                } else if (!validatePassword) {
                    setPasswordPrimaryVerify(true)
                }
            }
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={handleCreateAccount} className="loginForm">
                    <div className="text-center">
                        <h4 className="login">Create Account</h4>
                    </div>
                    <br />
                    <div className="loginFromCtrl">
                        <TextField onChange={(e) => setFullName(e.target.value)} type='name' id="loginFName" label="First Name" />
                    </div><br />
                    <div className="loginFromCtrl">
                        <TextField onChange={(e) => setEmail(e.target.value)} type='email' id="loginUserEmail" label="Email" />
                    </div><br />
                    <div className="loginFromCtrl">
                        <TextField onChange={(e) => setPassword(e.target.value)} type='password' id="loginRePass" label="Confirm Password" />
                    </div><br />
                    <Button className='loginFormSubmit' type='submit'>Sign Up</Button>
                    <br /><br />
                    <small className="loginFormChange mt-4">Have an account? <small className='text-warning' role="button" onClick={() => setSingIn(true)}><u> Login</u></small></small>
                </form>
            </div>
        </div>
    );
};

export default SignUp;