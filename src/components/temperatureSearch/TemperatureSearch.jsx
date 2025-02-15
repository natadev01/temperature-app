import React, { useState } from "react";
import "./TemperatureSearch.css";

const TemperatureSearch = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const API_KEY = "bd5e378503939ddaee76f12ad7a97608"; // 🔥 Reemplaza esto con tu clave de OpenWeatherMap

  const fetchTemperature = async () => {
    if (!city.trim()) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.main) {
        setTemperature(data.main.temp);
      } else {
        setTemperature("City not found");
      }
    } catch (error) {
      console.error("Error fetching temperature:", error);
    }
  };

  return (
    <div className="container-app">

    <div className="container">
      <h1 className="title">Check Temperature in a City 🌍</h1>
      <div className="inputs-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchTemperature()}
          className="input-field"
        />
        <button onClick={fetchTemperature} disabled={!city.trim()} className="convert-button">
          Search
        </button>
      </div>

      {temperature !== null && (
        <p className="result-text">
          Current Temperature in {city}: <strong>{temperature}°C</strong>
        </p>
      )}
    </div>
    </div>
  );
};

export default TemperatureSearch;
