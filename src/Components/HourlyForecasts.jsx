import React from 'react'


function HourlyForecasts( {hourForecast, currentHour, currentMinute} ) {
    
    

     const date = new Date(hourForecast.dt*1000)  
     console.log(hourForecast.weather[0].icon); 
    return (
    
        <div className='hourly-forecast'>
            
            <div className='forecast-time'><b>{date.getHours()}</b>:00</div>
            <div><img className="hour-forecast-weather-icon" src={`https://openweathermap.org/img/wn/${hourForecast.weather[0].icon}@2x.png`}/></div>
            <div className="hour-forecast-temp">{Math.round((hourForecast.feels_like - 273.15))}<i className='wi wi-celsius'></i></div>
            <div className="hour-forecast-wind">{Math.round((hourForecast.wind_speed*2.237))}<span className='mph'> mph</span></div>

        </div>
        
    )
}

export default HourlyForecasts
