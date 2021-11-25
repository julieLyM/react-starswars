import React from 'react';

const card = (props) => {
  const { item } = props;

  return (
    <div>
      <h1>{item.name}</h1>
      <p></p>
    </div>
  );
};

export default card;
