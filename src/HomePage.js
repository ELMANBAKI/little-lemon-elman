import React from "react";
import CallToAction from "./CallToAction";
 
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="overlay">
          <h1>مرحبا بكم في مطعم Little Lemon</h1>
          <p>أشهى الأطباق المتوسطية في قلب casablanca</p>
          <CallToAction />
          
        </div>
        
      </header>
    </div>
  );
};

export default HomePage;
