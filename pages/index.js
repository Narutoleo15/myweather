
import Head from 'next/head'
import Image from 'next/image'
import { FaSun, FaCloudSun, FaCloudRain, FaSnowflake } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import axios from 'axios';








function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
  const getWeather = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios.get(url).then((result) => {
      setWeather(result.data);
      console.log(result.data);
    });
    setCity(city);
    setIsLoading(false);
  }



  let weatherIcon;
  if (weather.weather) {
    const description = weather.weather[0].description;
    if (description.includes('clear')) {
      weatherIcon = <FaSun />;
    } else if (description.includes('clouds')) {
      weatherIcon = <FaCloudSun />;
    } else if (description.includes('rain')) {
      weatherIcon = <FaCloudRain />;
    } else if (description.includes('snow')) {
      weatherIcon = <FaSnowflake />;
    }
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image className='object-cover z-[-2]' src='https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80' fill alt='yoda' />
      <form>
        <input
          className="border rounded py-2 px-3"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={getWeather}
        >
          Get Weather
        </button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        weather.name && (
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-4">
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[-1]' />

            <Image className='object-cover z-[-2]' src='https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80' fill alt='yoda' />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{weather.name}</div>
              <div className=''>{weatherIcon}</div>
              <p className="text-gray-700 text-base">
                Temperature: {weather.main.temp}
              </p>
              <p className="text-gray-700 text-base">
                Description: {weather.weather[0].description}
              </p>
            </div>
          </div>
        )
      )}
    </div>

  );
}

export default Home;
