import React from 'react'

function HourlyForecasts( {hourForecast, currentHour, currentMinute} ) {
    
    

     const date = new Date(hourForecast.dt*1000)  
     console.log(hourForecast.weather[0].icon); 
    return (
        
        // <ul className="forecast">
        //     <li>Temp: {hourForecast.feels_like}</li>
        //     <li>Clouds: {hourForecast.clouds}</li>
        //     <li>Wind Speed: {hourForecast.wind_speed}</li>
        //     <li>Description: {hourForecast.weather[0].description}</li>
        //     <li>id: {hourForecast.weather[0].id}</li>
        // </ul>

        <div className='hourly-forecast'>
            
            <div className='forecast-time'><b>{date.getHours()}</b>:00</div>
            <div><img className="hour-forecast-weather-icon" src={`https://openweathermap.org/img/wn/${hourForecast.weather[0].icon}@2x.png`}/></div>
            <div className="hour-forecast-temp">{Math.round((hourForecast.feels_like - 273.15))}<i className='wi wi-celsius'></i></div>
            <div className="hour-forecast-wind">{Math.round((hourForecast.wind_speed*2.237))}<i className='wi wi-celsius'></i></div>

        </div>
        
    )
}

export default HourlyForecasts
