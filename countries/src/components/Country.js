import axios from "axios"
import {useState, useEffect } from "react"

const Country = ({ country }) => {
    const WEATHER_API = process.env.REACT_APP_WEATHER_API
    const query = `http://api.weatherstack.com/current?access_key=${WEATHER_API}&query=${country.name.common}`
    
    const [data, setData] = useState({
        current : {
            temperature : 0,
            wind_speed : 0,
            weather_icons : 0
        }
    })

    useEffect(() => {
        console.log('effect')
        axios
        .get(query)
        .then(response => {
          setData(response.data)
        })
      }, [query])

    return (
        <div>
            <h1> {country.name.common} </h1>
            <p> 
                capital {country.capital[0]} <br></br>
                population {country.population}
            </p>
            <h2> Spoken languages </h2>
            <ul>
                {(Object.entries(country.languages)).map(([key, value]) => <li key = {key}> {value} </li>)}
            </ul>
            
            <img src = {country.flags.png} alt = {country.flags.alt} ></img>
            <h2> Weather in {country.name.common} </h2>
            <p>
                temperature : {data.current.temperature}
            </p>
            <img src = {data.current.weather_icons} alt = {"weather_icon"} ></img>
            <p>
                wind : {data.current.wind_speed}
            </p>


        </div>
    )
}

export { Country }