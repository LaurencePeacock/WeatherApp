import React, { useEffect, useRef } from 'react'
// import './Forecasts.css'
import '../css/Forecasts.css'
import '../css/HourlyForecasts.css'
import HourlyForecasts from './HourlyForecasts';

function Forecasts( {forecasts, currentHour, currentMinute }) {
    
 const forecastsArray = Object.entries(forecasts);
 console.log(forecastsArray);

 const scroll = useRef(null);

 function slideBack (){
            const forecastWidth = parseInt(
                getComputedStyle(scroll.current.children[0]).width
            )
            console.log(forecastWidth);
            scroll.current.scrollLeft -= 260;
        }
 function slideForward (){
            const forecastWidth = parseInt(
                getComputedStyle(scroll.current.children[0]).width
            )
            scroll.current.scrollLeft += 260;
        }

    if(forecasts){
        return (
            <div className="slide-wrapper" >
                <button className="slide-arrow" id="slide-arrow-prev" onClick={slideBack}>
                    &#8249;
                </button>
                <button className="slide-arrow" id="slide-arrow-next" onClick={slideForward}>
                    &#8250;
                </button>
                <div className='forecast-wrapper' ref={scroll}>
                    {
                        forecastsArray.map((item) => {
                            return  <HourlyForecasts hourForecast={item[1]} currentHour={currentHour} currentMinute={currentMinute}/>
                        })
                    }
                </div>
            </div>
            )
        }
}

export default Forecasts



//  for(let i= 0; i < forecastsArray.length; i++ ){
//     console.log(forecastsArray[i][1].clouds);
//  }
// const getObjects = (obj) => {
//     let arr = [];
//     for(let item of obj){
//         arr.push(<li>{obj.dt}</li>)
//     }
// }

// for(let item of weather){
//     console.log(item);
// }