import React from "react";
import FlightLaunchDetails from "./components/FlightLaunchDetails/FlightLaunchDetails";
import FlightLaunches from "./components/FlightLaunches/FlightLaunches";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FlightLaunches />}></Route>
        <Route path="/launchDetails" element={<FlightLaunchDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
