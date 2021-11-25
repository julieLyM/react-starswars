import React, { useState } from 'react';
import axios from 'axios';
const Countries = () => {
  const [data, setData] = useState([]);

  // https://miadil.github.io/starwars-api/api/all.json
  // http://hp-api.herokuapp.com/api/characters
  axios.get('http://hp-api.herokuapp.com/api/characters').then((r))
  return (
    <div>
      <h1>api</h1>
    </div>
  );
};

export default Countries;
