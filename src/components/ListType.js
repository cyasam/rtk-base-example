import React from 'react';
import { Link } from 'react-router-dom';

function ListType() {
  return (
    <div className="flex">
      <Link
        to="/"
        className="mx-1 px-3 py-1 bg-neutral-600 text-white rounded-2xl"
      >
        List
      </Link>
      <Link
        to="/map"
        className="mx-1 px-3 py-1 bg-neutral-600 text-white rounded-2xl"
      >
        Map
      </Link>
    </div>
  );
}

export default ListType;
