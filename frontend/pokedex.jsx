import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchSinglePokemon, receiveSinglePokemon } from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchSinglePokemon = fetchSinglePokemon;
  window.receiveSinglePokemon = receiveSinglePokemon;
  ReactDOM.render(
    < Root store={store} />, document.getElementById('root')
  )
})