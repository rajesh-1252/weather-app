import React, {useState} from 'react'

import WeatherIcon from './WeatherIcon'
const DisplayWeater = ({data, cityname, loading, getQuery}) => {
    const [text, setText] = useState('')
    
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    return loading ? (<h1>loading...</h1>) : (
        <div className="card-container">

        <div className="card">
        
        <WeatherIcon  data = {data}/>
        

        <h1> Weather Report </h1>
        <div className="search">
            <form action="">
                <input type="text" className="form-control"
                placeholder = 'Enter your city name'
                value = {text}
                onChange = {(e) => onChange(e.target.value)}
                />
            </form>
        </div>
        <div className="temperature"> {`Minimum Temperature:${data.main.temp_min} C`}</div>
        <div className="temperature"> {`Maximum Temperature: ${data.main.temp_max}  C`}</div>
        <div className="temperature"> {`Expected Weather:  ${data.weather[0].main} `}</div>
        
        </div>
        

        </div>
    )
}

export default DisplayWeater
