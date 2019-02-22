import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    // debugger
    this.props.fetchAllPokemon();
  }

  render() {
    // debugger
    const pokes = this.props.pokemon.map( (poke, idx) => <PokemonIndexItem key={idx} pokemon={poke}/>)
    return <ul>{pokes}</ul>;
  }
}

export default PokemonIndex;