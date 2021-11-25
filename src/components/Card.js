import React from 'react';

const card = (props) => {
  const { item } = props;
  return (
    <div className="card">
      <img src={item.image} alt="personnage"/>
      <div className="data-container">
        <ul>
          <li>{item.name}</li>
          <li>{item.species}</li>
          <li>{item.born}</li>
          <li>{item.gender}</li>
        </ul>
      </div>
    </div>
  );
};

export default card;
