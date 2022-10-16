import React from 'react'


function HourlyForecasts( {hourForecast, forecastIndex} ) {
    
    const weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    const date = new Date(hourForecast.dt*1000)  
     if(forecastIndex % 2 == 1){
    return (
        <div className='hourly-forecast'>
            <div className="forecast-day">{weekday[date.getDay()]}</div>
            <div className='forecast-time'><b>{date.getHours()}</b>:00</div>
            <div><img className="hour-forecast-weather-icon" src={`https://openweathermap.org/img/wn/${hourForecast.weather[0].icon}@2x.png`}/></div>
            <div className="hour-forecast-temp">{Math.round((hourForecast.feels_like - 273.15))}<i className='wi wi-celsius'></i></div>
            <div className="hour-forecast-wind">{Math.round((hourForecast.wind_speed*2.237))}<span className='mph'> mph</span></div>
            <div className="hour-forecast-pop"> {hourForecast.pop}<i className='wi wi-humidity'></i></div>
        </div>  
    )
    }
}

export default HourlyForecasts
