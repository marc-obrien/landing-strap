import React from 'react';
import './App.css';

const App = () => {
  return (
     <div id="hero" className="Hero" style={{backgroundImage: 'url(https://solarsystem.nasa.gov/system/feature_items/images/12_jupiter_carousel_3.jpg)'}}>
        <div className="content">
          <img className="logo" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="Jupiter background" />
          <h2>Landing Strap</h2>
          <p>A simple Landing Page coponent built with React.</p>
          <p>Background image of Jupiter provided by NASA's New Horizons images of Jupiter and its volcanic moon Io, taken during the spacecraft's Jupiter flyby in early 2007.</p>
          <p>Image Credit: NASA/Johns Hopkins University Applied Physics Laboratory/Southwest Research Institute/Goddard Space Flight Center</p>
          <div className="button-wrapper">
           <a href="#" className="Button" text="Watch now">Sign Up</a>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
  )
}

export default App;
  