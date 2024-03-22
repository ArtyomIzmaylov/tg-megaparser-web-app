import React, {useState} from 'react';
import './Navbar.css'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="Navbar">
            <div className="navbar-logo">Logo Here</div>
                <NavLink to="/login">Sign up</NavLink>
            <button onClick={handleToggle}>
                {isOpen ? "Close Menu" : "Open Menu"}
            </button>
        </nav>
    );
};

export default Navbar;