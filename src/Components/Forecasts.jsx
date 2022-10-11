import React, { useRef } from 'react'
import '../css/Forecasts.css'
import '../css/HourlyForecasts.css'
import HourlyForecasts from './HourlyForecasts';

function Forecasts( {forecasts} ) {

    const scroll = useRef(null);

    function slideBack (){
                    scroll.current.scrollLeft -= 260;
            }
    function slideForward (){
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
                        forecasts.hourly.map((item, index) => {
                            return  <HourlyForecasts hourForecast={item} forecastIndex={index}/>
                        })
                    }
                </div>
            </div>
            )
        }
}

export default Forecasts
