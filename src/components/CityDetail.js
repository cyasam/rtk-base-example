import React from 'react';
import { useSelector } from 'react-redux';
import slugify from 'slugify';

import cities from '../cities_of_turkey.json';
import { useGetCityWeatherQuery } from '../services/weather-api';

function CityDetail({ city }) {
  const apikey = useSelector((state) => state?.api?.key);

  const cityObj = cities.find(
    ({ name }) => slugify(name.toLowerCase()) === city
  );
  const { data, error, isLoading } = useGetCityWeatherQuery({
    apikey,
    lat: cityObj.latitude,
    lon: cityObj.longitude,
  });

  if (isLoading)
    return <div className="flex items-center justify-center">Loading...</div>;

  if (error) return <p>Error</p>;

  return (
    <div className="flex justify-center">
      <div>
        <h2>City: {cityObj?.name}</h2>
        <p>Temp: {data?.main?.temp}</p>
      </div>
    </div>
  );
}

export default CityDetail;
