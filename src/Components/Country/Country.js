import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css'
const Country = (props) => {
    const { name, flag} = props.country;
    const history = useHistory();
    const showDetails = (countryName) => {
        history.push(`/country/${countryName}`)
    }
    return (
        <div className="countries">
            <img src={flag} alt="" />
            <Link to={`country/${name}`}><h6 className='text-center'>{name}</h6></Link>
            <button onClick={() => showDetails(name)} className='btn btn-warning btn-sm d-block'>Show Details</button>
        </div>
    );
};

export default Country;