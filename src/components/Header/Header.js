import React from 'react';
import "./Header.css"
import logo from "../../images/logo1.png"

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <h1>Fitness Hub</h1>
        </div>
    );
};

export default Header;