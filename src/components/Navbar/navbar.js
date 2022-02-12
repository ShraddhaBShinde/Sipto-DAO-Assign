import React from "react";
import "../../Styles/Navbar.css"

function Navbar() {
    return (
        <>
        <div className="navbar shadow-lg p-3 mb-5 rounded bg-body">
            <div className="logo">
                <img src=""></img>
            </div>
            <div className ="links text-warning">
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