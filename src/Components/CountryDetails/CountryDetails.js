import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css'
const CountryDetails = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    console.log(country);
    return (
        <div>
            {
                country.map(country => <div className='country-details'>
                    <img src={country.flag} alt="" />
                    <h5 className='border-bottom pb-2 mb-3'>Country: {country.name} <small>({country.region})</small></h5>
                        <p>Capital: <span>{country.capital}</span></p>
                        <p>Population: <span>{country.population}</span></p>
                        <p>Language: <span>{country.languages[0].name} ({country.languages[0].nativeName})</span></p>
                        <p>Timezones: <span>{country.timezones[0]}</span></p>
                        <p>Area: <span>{country.area}</span></p>
                        <p>Calling code : <span>{country.callingCodes[0]}</span></p>
                        <p>Country code : <span>{country.alpha2Code}</span></p>
                </div>)
            }
        </div>
    );
};

export default CountryDetails;