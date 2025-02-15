import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TempNavbar from "./components/navbar/TempNavbar";
import Converter from './components/converter/Converter';
import TemperatureSearch from "./components/temperatureSearch/TemperatureSearch";

const App = () => {
  return (
    <Router>
      <TempNavbar />
      <Routes >
        <Route path="/" element={<Converter />} />
        <Route path="/search" element={<TemperatureSearch />} />
      </Routes>
    </Router>
  );
};

export default App;
