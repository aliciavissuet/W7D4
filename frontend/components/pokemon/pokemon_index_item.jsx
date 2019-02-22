import React from 'react';
import { Link } from 'react-router-dom';

const pokemonIndexItem = ({pokemon}) => {
  const url = '/pokemon/' + pokemon.id;
  return (<Link to={url}>
    <li>
      <img src={pokemon.image_url} />
      <span>{pokemon.name}</span>
    </li>
  </Link>)
}

export default pokemonIndexItem;