import React from 'react'
import '../css/CurrentWeather.css'

function CurrentWeather({ weather }) {

    console.log(weather);
    return (
        <div className='current-weather-container'>
            <div className="current-weather-icon-temp-wind">
                <div><img className="current-weather-icon" src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}/></div>
                <div className="current-weather-temp-wind">
                    <div><i className='wi wi-thermometer'></i> {Math.round((weather.current.feels_like - 273.15))}<i className='wi wi-celsius'></i></div>
                    <div> <i className='wi wi-strong-wind'></i> {Math.round((weather.current.wind_speed*2.237))} <span className='mph'>mph</span></div>
                </div>
            </div>
            <div className='current-weather-description'>{weather.current.weather[0].description}</div>
        </div>
    )
}

export default CurrentWeather

