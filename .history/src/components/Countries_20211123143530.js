import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://hp-api.herokuapp.com/api/characters')
      .then((res) => setData(res.data));
    console.log(data);
  }, []);

  return (
    <div className="countries">
      <ul className="countries-list">
        {data.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
