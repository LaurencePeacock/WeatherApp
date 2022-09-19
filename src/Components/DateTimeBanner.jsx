import React from 'react'
import '../css/DateTimeBanner.css';

function DateTimeBanner( { currentDay, currentHour, currentMinute } ) {
    
    return (
        <div className='dateTimeBanner container-fluid grey'>
            <div className='date'>
                <p>{currentDay}</p>
            </div>
            <div className='time'>
                <p>{currentHour}:{currentMinute}</p>
            </div>
        </div>
    )
}

export default DateTimeBanner
