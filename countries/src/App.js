import { useState, useEffect } from 'react';
import axios from 'axios';
import { Filter } from './components/Filter';
import { Countries } from './components/Countries';

function App() {
  const [countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState("spain")
  const [countryClicked, setCountryClicked] = useState("")

  
  useEffect(() => {
    console.log('effect')
    axios
    .get(`https://restcountries.com/v3.1/all`)
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  const inputCountryHandler = (event) => {
    setNewCountry(event.target.value)
    setCountryClicked("")
  }

  const filteredCountries = countries
    .filter(country => country.name.common.toLowerCase().includes(newCountry.toLowerCase()))

  return (
    <div >
      <Filter inputCountryHandler = {inputCountryHandler} newCountry = {newCountry} />
      <Countries filteredCountries = {filteredCountries} countryClicked = {countryClicked} setCountryClicked = {setCountryClicked}/>
    </div>
  );
}

export default App;
