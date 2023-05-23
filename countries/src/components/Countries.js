import { Country } from "./Country"

const Countries = ({ filteredCountries, countryClicked, setCountryClicked}) => {

    const showHandler = (country) => {
        setCountryClicked(country)
        console.log(countryClicked)
    }

    return (
        <div>
            { !filteredCountries.length ? (
                "No country found"
            ) : (
                filteredCountries.length > 10 ? (
                    "Too many matches, specify another filter" 
                ) : (
                    filteredCountries.length === 1 ? (
                        <Country country = {filteredCountries[0]}/> 
                    ) : (
                        countryClicked.length === 0 ? (
                            filteredCountries.map(country => {
                                return (
                                    <p key = {country.name.common}>
                                         {country.name.common} 
                                         <button onClick={() => showHandler(country.name.common)}>show</button>
                                    </p>
                                  
                                )
                            })
                        ) : (
                            <Country country = {filteredCountries.find(country => country.name.common === countryClicked)} />

                        )
                    )
                )
            )}
        </div>
    )
}

export { Countries } 