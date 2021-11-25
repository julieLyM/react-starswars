import React, { useState } from 'react';

const Countries = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default Countries;
