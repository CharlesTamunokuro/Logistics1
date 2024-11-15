import React from 'react';
import './App.css';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const App = () =>{
  return (
    <div className="app">
      <div className="content">
        <h1>GIGGo, the app for local and international shipping</h1>
        <div className="download-buttons">
          <a href="#" className="app-store-button">
            <FaApple className="icon" /> Download on the App Store
          </a>
          <a href="#" className="google-play-button">
            <FaGooglePlay className="icon" /> Get it on Google Play
          </a>
        </div>
      </div>
      <div className="phone-image">
        <img src="/app-screen.png" alt="Phone displaying GIGGo app" />
      </div>
    </div>
  );
}

export default App;
