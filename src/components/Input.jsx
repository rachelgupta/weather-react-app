import React from 'react';
import { useWeather } from '../context/Weather';

const Input = () =>{
    const weather = useWeather();
    return(
        <input className="input" value={weather.searchCity} placeholder="Enter city name"
        onChange={(e)=>weather.setSearchCity(e.target.value)}/>
    );
}

export default Input;   