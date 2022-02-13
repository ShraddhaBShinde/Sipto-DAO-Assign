import React from 'react';
import "../../Styles/MainPage.css"

function MainPage() {
    return (
        <>
            <div className="d-flex position-relative mt-0">
                <div className="">
                    <img src="https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="hero-image" className="img-fluid opacity-50">
                    </img>
                </div>

                <div className="mainPage d-flex align-center font-weight-bold w-full h-full position-absolute  mt-5  p-5">
                    <div className="mt-5">
                        <h1>DAO - Investement Platform</h1> 
                    </div>
                    <div className="mt-5">
                        <p> I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                        <button type="button" className="button">Get Started</button>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default MainPage;