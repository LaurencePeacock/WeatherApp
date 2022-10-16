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
// import BeatLoader from 'react-spinners/BeatLoader';
import { HashLoader } from 'react-spinners';

function App() {
  
  const [loading, setLoading] = useState(false);

  const [openWeatherData, setOpenWeatherData] = useState();

  useEffect(() => {
    setLoading(true);
    const fetchWeather = async () => {
      setTimeout(()=> {
        axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=53.91&lon=-1.74&appid=${config.key}`)
        .then((res) => setOpenWeatherData(res.data))
        .catch((err) => console.log(err));
        setLoading(false);
      },1000)
    };
    fetchWeather();
    
}, [])

   
  const [forecasts, setForecasts] = useState();
  
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

  const override: CSSProperties = {
        display: "block",
        margin: "3rem auto",
        height: "26vh",
      };
    const color = "#c424d6";  
  
  return (
     
      <div>
          { currentDay && currentHour && currentMinute && <DateTimeBanner currentDay={currentDay} currentHour={currentHour} currentMinute={currentMinute}/>}
          { openWeatherData && <LocationHeader weather={openWeatherData}/>}
          { loading ? <HashLoader cssOverride={override} color={color}/> : openWeatherData && <CurrentWeather weather={openWeatherData}/>}
          { loading ? <HashLoader cssOverride={override}/> : openWeatherData && <Forecasts forecasts={openWeatherData}/>}
      </div>
    
    
  );
}

export default App;
