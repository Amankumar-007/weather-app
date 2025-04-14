import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

export default function App() {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "YOUR_API_KEY"; // replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
      }
    } catch (err) {
      console.error(err);
      setWeather(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="app">
      <h1>🌤️ Weather Finder</h1>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Search</button>

      {loading ? (
        <p>Loading...</p>
      ) : weather ? (
        <WeatherCard weather={weather} />
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}
