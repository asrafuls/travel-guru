import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useAuth } from '../../authenticationMenager/authentication';
import './ForgotPassword.css'

const ForgotPassword = () => {

    const auth = useAuth()

    const [ email, setEmail ] = useState('')

    const handelForgotPassword = (e) => {
        auth.forgotPassword(email)
        e.preventDefault()
        e.target.reset()
    }

    return (
        <div className="forgotPassword">
            <div className="container">
                <form onSubmit={handelForgotPassword} action="" className="forgotPassForm text-start">
                    <h3 className="">Forgot Password</h3>
                    <br/>
                    <TextField onChange={(e) => setEmail(e.target.value)} label='Type your email'/>
                    <br/><br/>
                    <Button type='submit' variant='contained' color='secondary'>Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;