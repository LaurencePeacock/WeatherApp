import React from 'react'
import dayjs from 'dayjs';

function HourlyForecasts( {hourForecast, forecastIndex} ) {
    
    const date = new Date(hourForecast.dt*1000) 
    const weekday = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    const day = weekday[date.getDay()];

     if(forecastIndex % 2 === 1){
    return (
        <div className='hourly-forecast'>
            <div className="forecast-day">{day}</div>
            <div className='forecast-time'><b>{date.getHours()}</b>:00</div>
            <div><img className="hour-forecast-weather-icon" src={`https://openweathermap.org/img/wn/${hourForecast.weather[0].icon}@2x.png`}/></div>
            <div className="hour-forecast-temp">{Math.round((hourForecast.feels_like - 273.15))}<i className='wi wi-celsius'></i></div>
            <div className="hour-forecast-wind">{Math.round((hourForecast.wind_speed*2.237))}<span className='mph'> mph</span></div>
            <div className="hour-forecast-pop"><div>{hourForecast.pop}</div> <i className='pop-icon'> </i></div>
        </div>  
    )
    }
}
 
export default HourlyForecasts
