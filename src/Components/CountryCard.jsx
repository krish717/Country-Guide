import React from 'react'
import { Link } from 'react-router-dom';

 const CountryCard = ({name, flag, population, region, capital }) => {
   
  return (
    <Link className="country-card" to={`/country/${name}`} key={name} >
    <div className="upper">
        <img src={flag} alt={name} />
    </div>
    <div className="lower">
        <h3>{name}</h3>
        <p>
        <span className="label">Population: </span>
        <span className="label_value">{population.toLocaleString('en-IN')}</span>
        </p>
        <p>
        <span className="label">Region: </span>
        <span className="label_value">{region}</span>
        </p>
        <p>
        <span className="label">Capital:  </span>
        <span className="label_value">{capital}</span>
        </p>
    </div>
    </Link>
  )
}

export default CountryCard;
