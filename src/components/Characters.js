import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);
  const [rangeValue, setRangeValue] = useState(40);
  const [selectedRadio, setSelectedRadio] = useState('');
  const radios = [
    "human","droid","wookiee","rodian","hutt","yoda's species","trandoshan","mon calamari","gungan","sullustan"
  ]

  useEffect(() => {
    if (playOnce) {
      axios
        .get('https://miadil.github.io/starwars-api/api/all.json')
        .then((res) => setData(res.data));
      setPlayOnce(false);
    }
    const sortedCharacter = () => {
      const characterObj = Object.keys(data).map((i) => data[i]);
      const sortedArray = characterObj.sort((a, b) => {
        return b.born - a.born;
      });
      // console.log(sortedArray);
      sortedArray.length = rangeValue;
      setSortedData(sortedArray);
    };
    sortedCharacter();
  }, [data, rangeValue, playOnce]);

  return (
    <div className="countries">
      <div className="sort-container">
        <input
          type="range"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
          min="1"
          max="88"
        />
        <ul>
          {radios.map((radio) => {
            return(
              <li key={radio}>
                <input type="radio" value={radio} id={radio} checked={radio === selectedRadio} onChange={(e) => setSelectedRadio(e.target.value)} />
                <label html={radio}>{radio}</label>
              </li> 
              );
            }
          )}

        </ul>
      </div>
      <div className="cancel">
        {selectedRadio && <h5 onClick={() => setSelectedRadio("")}>Annuler recherche</h5>}
      </div>
      <ul className="countries-list">
        {sortedData
        .filter((country) => country.species.includes(selectedRadio))
        .map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
