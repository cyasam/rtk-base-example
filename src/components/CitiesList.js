import React from 'react';
import { Link } from 'react-router-dom';
import cities from '../cities_of_turkey.json';
import slugify from 'slugify';

function CitiesList() {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 ">
      {cities.map((city) => (
        <Link key={city.id} to={`/city/${slugify(city.name.toLowerCase())}`}>
          <div className="flex items-center px-3 py-1 bg-cyan-600 rounded-xl ">
            <div className="flex justify-center items-center mr-2 rounded-full bg-cyan-600 w-8 h-8">
              {city.id}
            </div>
            <p>{city.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CitiesList;
