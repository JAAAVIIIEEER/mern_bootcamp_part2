const Filter = ({ inputCountryHandler, newCountry }) => {
    return (
        <div>
            find countries : <input onChange = {inputCountryHandler} value = {newCountry}/>
        </div>
    )
}

export { Filter }