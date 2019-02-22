import merge from 'lodash/merge';
import {RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON}  from '../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_SINGLE_POKEMON:
      let poke = action.pokemon;
      let newState = merge({}, state);
      newState[poke.pokemon.id] = poke;
      return newState;
    default:
      return state;
  }
}

export default pokemonReducer;