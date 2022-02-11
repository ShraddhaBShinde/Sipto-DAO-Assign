import React from "react";

// Components
import Navbar from "./components/Navbar/navbar";
import MainPage from "./components/MainPage/mainpage";

function App() {
  return (
    <>
        <div className="App">
            <Navbar />
            <MainPage />
            <button className="button">Click me</button>
        </div>
    </>
  );
};

export default App;
