import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "./redux/slices/weatherSlice";
import { IoIosSearch } from "react-icons/io";
import WeatherDisplay from "./WeatherDisplay";

import "./scss/App.scss";

const App = () => {
  const dispatch = useDispatch();
  const [cityInformation, setCityInformation] = useState("London");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(fetchWeatherData(cityInformation));
    }
  };

  const handleSearchClick = () => {
    dispatch(fetchWeatherData(cityInformation));
  };


  return (
    <>
      <h1>Weather API Project with REDDUUXX!!!</h1>

      <div className="weatherCard">
        <div className="inputBox">
          <input
            type="text"
            onKeyPress={handleKeyPress}
            placeholder="Enter a city name"
            className="searchInput"
            onChange={(e) => setCityInformation(e.target.value)}
          />
          <button className="searchBtn" onClick={handleSearchClick}>
            <IoIosSearch size={28} />
          </button>
        </div>

        <WeatherDisplay />
      </div>
    </>
  );
};

export default App;
