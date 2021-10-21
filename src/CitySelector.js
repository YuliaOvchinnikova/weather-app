import React, { useState } from 'react';
import { WeatherInfo } from './WeatherInfo';

export const CitySelector = () => {
  const [city, setCity] = useState('Helsinki');

  return (
    <>
      <div className="container">
        <header className="header">
          <h1 className="title">Weather app</h1>
          <div className="header-pic rotation"></div>
        </header>

        <div className="choosing">
          <label>
            <span className="choosing-text">Choose your city:</span>
            <input
              className="choosing-input"
              type="text"
              name="city"
              onChange={(event) => setCity(event.target.value)}
            />
          </label>
          <p className="choosing-city">{city}</p>
        </div>
        <WeatherInfo city={city} />
        <footer className="footer">
          <p className="footer-copyright">© 2021 Yulia Ovchinnikova</p>
        </footer>
      </div>
    </>
  );
};
