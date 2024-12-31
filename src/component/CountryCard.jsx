import React from 'react'
import { Link, useParams } from 'react-router-dom'

function CountryCard({ name, flag, population, region, capital }) {
  
  return (
        <Link className="country-card border-[2px]   border-violet-800 " to={`/${name}`} state="country state">
        <img className='h-[100px] w-[150px] ' src={flag} alt={name + ' Flag'} />
        <div className="card-text">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population: </b>
            {population.toLocaleString('en-IN')}
          </p>
          <p>
            <b>Region: </b>{region}
          </p>
          <p>
            <b>Capital: </b>{capital}
          </p>
          
        </div>
      </Link>
    )
}

export default CountryCard
