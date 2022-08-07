import React, { useState } from 'react';
import { useAuth } from '../../../authenticationMenager/authentication';
import { Button, Checkbox, TextField } from '@material-ui/core';

const SignIn = ({ setSingIn }) => {

    const [fullName, setFullName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [cPassword, setCPassword] = useState(null)

    const auth = useAuth()
    const { passwordSignIn } = auth;


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

    // Login Account
    const handleSingIn = (e) => {
        e.preventDefault()
        e.target.reset()

    }

    return (
        <div className="card">
            <div className="card-body">
                <form action="" className="loginForm">
                    <div className="text-center">
                        <h4 className="login">Login</h4>
                    </div>
                    <br />
                    <div className="loginFromCtrl">
                        <TextField type='email' id="loginEmail" label="Email" />
                    </div><br />
                    <div className="loginFromCtrl">
                        <TextField type='password' id="loginPass" label="Password" />
                    </div><br />
                    <div className="loginFromCheckAndForgot w-100 d-flex">
                        <div className="w-50">
                            <Checkbox id='loginCheckbox' inputProps={{ 'aria-label': 'primary checkbox' }} />
                            <small className='mt-1'>Remember Me</small>
                        </div>
                        <div className="w-50 mt-2 text-warning">
                            <a href='/forgotpassword'><small><u>Forgot Password</u> </small></a>
                        </div>
                    </div><br />
                    <Button className='loginFormSubmit' type='submit'>Login</Button>
                    <br />
                    <br />
                    <small className="loginFormChange mt-4">Don’t have an account? <small className='text-warning' role="button" onClick={() => setSingIn(false)}> <u>Create an account</u></small></small>
                </form>
            </div>
        </div>
    );
};

export default SignIn;