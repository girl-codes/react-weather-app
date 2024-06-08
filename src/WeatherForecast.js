import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  Axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day"> Sun </div>{" "}
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            {" "}
            <span className="Weatherforecast-temperature-max"> 19° </span>
            <span className="Weatherforecast-temperature-min"> 10° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
