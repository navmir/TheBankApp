import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import './start.scss'

const StartView = (props) => {
    return <div className="start-form">
        <CssBaseline />
        <div className="space"></div>
        <Link to="/ansokan">
            <Button className="btn-apply" color="primary" >
                <div className="house-logo">
                    Gör en lånelöftesansökan
                </div >
            </Button>
        </Link>
        <div className="space"></div>
        <Link to="/logga-in">
            <Button className="btn-login" color="primary" >
                <div className="login-logo">
                    Logga in
                </div >
            </Button>
        </Link>
        <div className="space"></div>
        <Link to="/kontakt">
            <Button className="btn-contact" color="primary" >
                <div className="contact-logo">
                    Kontakta oss
                </div >
            </Button>
        </Link>
    </div >
}

export default StartView