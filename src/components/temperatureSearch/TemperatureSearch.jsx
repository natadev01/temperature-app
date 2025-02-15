import React, { useState } from "react";
import axios from "axios";
import "./TemperatureSearch.css";

const TemperatureSearch = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const API_KEY = "bd5e378503939ddaee76f12ad7a97608";

  const fetchTemperature = async () => {
    if (!city.trim()) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric", // Para obtener la temperatura en °C
          },
        }
      );

      setTemperature(response.data.main.temp);
    } catch (error) {
      console.error("Error fetching temperature:", error);
      setTemperature("City not found");
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
