import { useEffect, useState } from 'react';
import { config } from './config';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import axios from 'axios';
import DateTimeBanner from './Components/DateTimeBanner';
import CurrentWeather from './Components/CurrentWeather';
import Forecasts from './Components/Forecasts';
import LocationHeader from './Components/LocationHeader';
import './css/weather-icons-wind.css';
import './css/weather-icons.css';

function App() {
  
  const [weather, setWeather] = useState(null);

  useEffect(() => {
      const fetchWeather = async () => {
          axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=53.91&lon=-1.74&appid=${config.key}`)
          .then((res) => setWeather({...weather, 
            temp: Math.round((res.data.current.temp - 273.15)).toString(), 
            feels_like: Math.round((res.data.current.feels_like - 273.15)).toString(), 
            wind_speed: Math.round((res.data.current.wind_speed*2.237)),
            sunrise: res.data.current.sunrise,
            sunset: res.data.current.sunset,
            id: res.data.current.weather[0].id,
            main: res.data.current.weather[0].main,
            description: res.data.current.weather[0].description,
            icon: res.data.current.weather[0].icon,
          }))
          .catch((err) => console.log(err));
      };
      fetchWeather();
  }, [])
  
  const [forecasts, setForecasts] = useState(null);

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=53.91&lon=-1.74&appid=${config.key}`)
          .then((res) => {setForecasts({...forecasts,
            nextHour: res.data.hourly[1],
            twoHours: res.data.hourly[2],
            threeHours: res.data.hourly[3],
            fourHours: res.data.hourly[4],
            fiveHours: res.data.hourly[5],
            sixHours: res.data.hourly[6],
            sevenHours: res.data.hourly[7],
            eightHours: res.data.hourly[8],
            nineHours: res.data.hourly[9],
            tenHours: res.data.hourly[10],
            elevenHours: res.data.hourly[11],
            twelveHours: res.data.hourly[12]
          })})
          .catch((err) => console.log(err));
  }, [])
  
    dayjs.extend(localizedFormat)
    const day = dayjs().format('ll');
    const hour = dayjs().hour();
    const minute = dayjs().format('mm');

    const [currentDay, setCurrentDay] = useState(day);
    const [currentHour, setCurrentHour] = useState(hour);
    const [currentMinute, setCurrentMinute] = useState(minute);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentMinute(dayjs().format('mm'));
            setCurrentHour(dayjs().hour());
        }, 10000);
        return () => clearInterval(interval);
      }, []);
  
  return (
    <div>
        {  currentDay && currentHour && currentMinute && <DateTimeBanner currentDay={currentDay} currentHour={currentHour} currentMinute={currentMinute}/>}
        { weather && <LocationHeader weather={weather}/>}
        { weather && <CurrentWeather weather={weather}/>}
        { forecasts && <Forecasts forecasts={forecasts} currentHour={currentHour} currentMinute={currentMinute}/>}
    </div>
  );
}

export default App;
