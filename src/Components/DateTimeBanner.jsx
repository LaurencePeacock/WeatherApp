import React from 'react'
import { useState } from 'react'
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { useEffect } from 'react';
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

    // dayjs.extend(localizedFormat)
    // const day = dayjs().format('ll');
    // const hour = dayjs().hour();
    // const minute = dayjs().format('mm');

    // const [currentDay, setCurrentDay] = useState(day);
    // const [currentHour, setCurrentHour] = useState(hour);
    // const [currentMinute, setCurrentMinute] = useState(minute);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setCurrentMinute(dayjs().minute());
    //         setCurrentHour(dayjs().hour());
    //     }, 10000);
    //     return () => clearInterval(interval);
    //   }, []);