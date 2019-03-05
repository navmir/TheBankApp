import React from 'react'
import { NavLink } from "react-router-dom";

import './NavMenu.css'

const Navigation = () => {
    return (
        <div className="nav-items">
            <NavLink to="/">Startsida</NavLink>
            <NavLink to="/ansokan">Ansök om lån</NavLink>
            <NavLink to="/logga-in">Logga in</NavLink>
        </div>
    );
}

export default Navigation