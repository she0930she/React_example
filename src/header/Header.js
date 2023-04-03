import React from 'react';
//import ReactDOM from 'react-dom';
import './Header.css';


function Header() {
    return (
        <div className="header">
            <a href="home">Home</a>
            <a href="about">About</a>
            <a href="policy">Policy</a>
            <a href="suggestion">Suggestion</a>
            <a href="login">Login</a>
            <a href="registration">Registration</a>
            <a href="register2">Register2</a>
        </div>
    );
}
export default Header;