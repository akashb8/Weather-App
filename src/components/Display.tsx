import { useState, type FormEvent } from 'react';
import axios from 'axios';
import type { WeatherData } from '../types/types';
import { Search } from './Search';

export function Display() {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchWeather = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!city.trim()) {
      setError('Please enter a city name.');
      return;
    }

    setLoading(true);
    setError('');
    setWeatherData(null);

    const apiKey = import.meta.env.API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    axios.get<WeatherData>(url)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((err) => {
        if (axios.isAxiosError(err) && err.response?.status === 400) {
          setError('City not found. Please try again.');
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred.');
        }
      })
      .finally(() => {
        setLoading(false);
      });

    /*
    try {
      const apiKey = import.meta.env.API_KEY;
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('City not found. Please try again.');
      }

      const data: WeatherData = await response.json();
      setWeatherData(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
    */
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 w-full max-w-md shadow-[0_8px_32px_rgba(0,0,0,0.37)] text-center animate-[fadeIn_0.8s_ease-out]">
      <h1 className="text-3xl font-extrabold mb-6 text-white drop-shadow-md">Weather</h1>
      
      <Search city={city} setCity={setCity} fetchWeather={fetchWeather} />

      {loading && <div className="text-xl font-semibold animate-pulse mb-5 text-white">Loading...</div>}

      {error && <div className="bg-red-500/20 text-red-200 p-3 rounded-lg mb-5 border border-red-500/30">{error}</div>}

      {weatherData && !loading && !error && (
        <div className="animate-[slideUp_0.5s_ease-out]">
          <h2 className="text-3xl font-semibold mb-2">
            {weatherData.location.name}, {weatherData.location.country}
          </h2>
          
          <div className="flex items-center justify-center gap-4 my-5">
            <img 
              src={weatherData.current.condition.icon} 
              alt={weatherData.current.condition.text} 
              className="w-20 h-20 drop-shadow-md"
            />
            <div className="text-6xl font-extrabold">
              {weatherData.current.temp_c}°C
            </div>
          </div>
          
          <p className="text-xl capitalize mb-6 text-white/90">{weatherData.current.condition.text}</p>
          
          <div className="flex justify-around border-t border-white/20 pt-5">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-white/70">Humidity</span>
              <span className="text-xl font-semibold">{weatherData.current.humidity}%</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-white/70">Wind</span>
              <span className="text-xl font-semibold">{weatherData.current.wind_kph} km/h</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
