import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
function CountryDetail() {
  const {state} = useLocation();

   console.log(state)
  const params = useParams()
  const countryName = params.countrydetail;
  
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then(res => res.json())
      .then((data) => {
        const country = data[0];
        setCountryData({
          name: country.name.common,
          flag: country.flags.svg,
          region: country.region,
          population: country.population,
          capital: country.capital[0],
          borders: []
        });

        if (country.borders) {
          Promise.all(
            country.borders.map((border) =>
              fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then(res => res.json())
                .then(([data1]) => data1.name.common)
            )
          ).then((allBordersName) => {
            setCountryData((prev) => ({ ...prev, borders: allBordersName }));
          });
        }

      });
  }, [countryName]);

  return countryData === null ? ('loading...') : (
    <>
      <div className=" flex flex-col justify-center items-center country-card border-[2px] border-violet-800">
        <img className='  h-[100px] w-[150px]' src={countryData.flag} alt={countryData.name + ' Flag'} />
        <div className="card-text">
          <h3 className="card-title">{countryData.name}</h3>
          <p>
            <b>Population: </b>
            {countryData.population?.toLocaleString('en-IN')}
          </p>
          <p>
            <b>Region: </b>{countryData.region}
          </p>
          <p>
            <b>Capital: </b>{countryData.capital}
          </p>
          {countryData.borders.length !== 0 && <div>
            <b>Border Countries:</b>
            {
              countryData.borders.map((border, index) => (
                <Link to={`/${border}`} key={index} className="border-country">{border} </Link>
              ))}
          </div>
          }
        </div>
      </div>

    </>
  );
}

export default CountryDetail;
