import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/girl-codes"
            target="_blank"
            rel="noreferrer"
          >
            Komal Ahmed{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/girl-codes/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
