import React from "react";

export default function WeatherCard({ weather }) {
  return (
    <div className="card">
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].main}</p>
      <h3>{weather.main.temp}°C</h3>
      <p>Feels like: {weather.main.feels_like}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
}
