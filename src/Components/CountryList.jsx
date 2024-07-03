import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import ShimmerCard from './ShimmerCard';

const CountryList = ({ query }) => {
  const [CountryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
      });
  }, []);

  if (CountryData.length === 0) {
    return (
      <div className='countries-container'>
        {[...Array(20)].map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className='countries-container'>
      {CountryData.filter((country) => 
        country.region.toLowerCase().includes(query) ||
        country.name.common.toLowerCase().includes(query.toLowerCase())
      ).map((country) => (
        <CountryCard 
          key={country.name.common} 
          name={country.name.common} 
          flag={country.flags.svg} 
          population={country.population}
          region={country.region}
          capital={country.capital?.[0]}
        />
      ))}
    </div>
  );
}

export default CountryList;
