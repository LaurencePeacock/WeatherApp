import React from 'react'
import '../css/CurrentWeather.css'

function CurrentWeather({ weather }) {

    console.log(weather);
    return (
        <div className='current-weather-container'>
            <div className="current-weather-icon-temp-wind">
                <div><img className="current-weather-icon" src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}/></div>
                <div className="current-weather-temp-wind">
                    <div><i className='wi wi-thermometer'></i> {weather.feels_like}<i className='wi wi-celsius'></i></div>
                    <div> <i className='wi wi-strong-wind'></i> {weather.wind_speed} <span className='mph'>mph</span></div>
                </div>
            </div>
            <div className='current-weather-description'>{weather.description}</div>
        </div>
    )
}

export default CurrentWeather

/*
{
                Object.values(weather).map((item) => {
                    return <li>{item}</li>
                })
            } 
*/
