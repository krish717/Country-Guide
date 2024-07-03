import React, {useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useTheme from '../Hooks/useTheme';

const CountryDetails = () => {
  const { name } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isdark] =  useTheme();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0]?.common || '',
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital?.[0] || '',
          flag: data.flags.svg,
          tld: data.tld?.[0] || '',
          languages: Object.values(data.languages).join(', '),
          currencies: Object.values(data.currencies).map((currency) => currency.name).join(', '),
          borders: [],
        });
        if(!data.borders) {
          data.borders = []
        }

        Promise.all(data.borders.map((border) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common)
        })).then((borders) => {
          setCountryData((prevState) => ({...prevState, borders }))
        })
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true)
      })
  }, [name]);

  if(notFound) {
    return <div>Country Not Found</div>
  }

  return countryData === null ? (
    <main className={`${isdark ? 'dark' : ''}`}>
    {`loading...`}
    </main>
  ) : (
    <main className={`${isdark ? 'dark' : ''}`}>
      <div className="country-details-container">
        <Link to='/'>
        <span className="back-button">
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        </Link>
        <div className="country-details">
          <img src={countryData.flag} alt={countryData.name} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countryData.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{countryData.population.toLocaleString('en-IN')}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{countryData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{countryData.subregion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">{countryData.capital}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">{countryData.tld}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{countryData.currencies}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{countryData.languages}</span>
              </p>
            </div>
            { countryData.borders.length !== 0 && <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {
                countryData.borders.map((border) => <Link key={border} to={`/country/${border}`}>{border}</Link>)
              }
            </div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetails;
