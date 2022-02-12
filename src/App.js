import React from "react";

// Components
import Navbar from "./components/Navbar/navbar";
import MainPage from "./components/MainPage/mainpage";
import JoinNowForm from "./components/Pages/JoinNowForm";
import OurServices from "./components/Pages/ServicesPage";
import Testimonials from "./components/Pages/Testimonials";
import Footer from "./components/Footer/footer"

function App() {
  return (
    <>
        <div className="App">
            <Navbar />
            <MainPage />
            <JoinNowForm />
            <OurServices />
            <Testimonials />
            <Footer />
        </div>
    </>
  );
};

export default App;
