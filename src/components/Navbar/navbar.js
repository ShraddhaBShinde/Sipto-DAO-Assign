import React from "react";
import "../../Styles/Navbar.css"

function Navbar() {
    return (
        <>
        <div className="navbar">
            <div className="logo">
                <img src="logo.png"></img>
            </div>
            <div className = "links ">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/services">Service</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
        </>
    );
};

export default Navbar;