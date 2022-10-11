import React from 'react'
import '../css/LocationHeader.css'
import storm from '../css/images/StormyClouds.jpg';
import drizzle from '../css/images/LightRain.jpg';
import rain from '../css/images/HeavyRain2.jpg';
import snow from '../css/images/LightSnow.jpg';
import mist from '../css/images/Misty2.jpg';
import ClearBlueSky from '../css/images/ClearBlueSky.jpg';

function LocationHeader({ weather }) {
    
    let num = weather.current.weather[0]['id'];
    let id = num.toString();
    let backgroundImage;

    switch(id[0]){
        case '2':
        backgroundImage = storm;
        break;
        case '3':
        backgroundImage = drizzle
        break;
        case '5':
        backgroundImage = rain
        break;
        case '6':
        backgroundImage = snow
        break;
        case '7':
        backgroundImage = mist
        break;
        case '8':
        backgroundImage = ClearBlueSky;
        break;
    }

    const style = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        width: '100%',
        minHeight: '20vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#C2C2C2'
    }

    return (
        <div style={style}>
            <h2>Burley-in-Wharfedale</h2>
        </div>
    )
}

export default LocationHeader
