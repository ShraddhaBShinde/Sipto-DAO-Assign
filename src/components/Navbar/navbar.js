import React from "react";
import "../../Styles/Navbar.css"

function Navbar() {
    return (
        <>
        <div className="navbar shadow-lg p-3 mb-5 rounded bg-body d-flex justify-content-center">
            <div className ="links text-warning hover-zoom">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/service">Service</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
        </>
    );
};

export default Navbar;