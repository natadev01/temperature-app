import React, { useState } from "react";
import "./Converter.css";

const Converter = () => {
  const [temperature, setTemperature] = useState("");
  const [converted, setConverted] = useState(null);
  const [unit, setUnit] = useState("C");

  const convertTemperature = () => {
    if (!temperature) return;
    
    const tempValue = parseFloat(temperature);
    if (isNaN(tempValue)) return;

    const result = unit === "C"
      ? (tempValue * 9) / 5 + 32
      : ((tempValue - 32) * 5) / 9;

    setConverted(result);
  };
  
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      convertTemperature();
    }
  };

  return (
    <div className="container">
      <h1 className="title">Temperature Converter 🌡️</h1>
      <div className="inputs-container">
        <input
          type="number"
          placeholder="Enter temperature"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          onKeyDown={handleKeyDown}
          className="input-field"
        />
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="select-field"
        >
          <option value="C">Celsius to Fahrenheit</option>
          <option value="F">Fahrenheit to Celsius</option>
        </select>
        <button
          onClick={convertTemperature}
          disabled={!temperature.trim()}
          className="convert-button"
        >
          Convert
        </button>
      </div>

      {converted !== null && (
        <p className="result-text">
          Converted Temperature: <strong>{converted.toFixed(2)}°{unit === "C" ? "F" : "C"}</strong>
        </p>
      )}
    </div>
  );
};

export default Converter;
