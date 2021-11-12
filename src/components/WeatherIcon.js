import React from 'react'
import { FiCloudDrizzle, FiSmile } from 'react-icons/fi'

import { WiNightRainMix } from "react-icons/wi";
const WeatherIcon = ({data}) => {
    const weather = data.weather[0].main
    return (
        <div>
            {
            
            weather === 'Rain'?<FiCloudDrizzle className = 'weatherIcon' /> : weather ==='Drizzle' ?  <WiNightRainMix className ='weatherIcon'/> : <FiSmile className = 'weatherIcon' />}
        </div>
    )
}

export default WeatherIcon
