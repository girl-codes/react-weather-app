import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="weather-block">
      <h1> {props.data.city} </h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize"> {props.data.description}</li>
      </ul>
      <div className="weather-info">
        <div className="weather-icon float-left">
          {" "}
          <WeatherIcon code={props.data.icon} size={55} />
        </div>
        <div className="float-left">
          {" "}
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
      </div>
      <div className="temp-info">
        <ul>
          <li> Humidity: {props.data.humidity} % </li>
          <li> Wind: {Math.round(props.data.wind)} mph</li>
        </ul>
      </div>
    </div>
  );
}
