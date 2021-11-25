import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from "../components/Navigation.js"
import Logo from "../components/Logo.js";
import Card from '../components/Card';

const About = () => {


  return (
    <div className="countries">
      <h1>  Bonjour c'est une petite application sur Stars Wars, j'utilise ReactJs pour une petite remise en compétences !
    </h1>
    <h2>J'utilise l'API : https://miadil.github.io/starwars-api/api/all.json</h2>

    </div>
  );
};


export default About;
