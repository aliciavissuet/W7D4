import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {fetchAllPokemon} from './util/api_util';
import {receiveAllPokemon} from './actions/pokemon_actions'


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetch = fetchAllPokemon;
  window.receive = receiveAllPokemon;
  ReactDOM.render(
    <h1>React is working!</h1>, document.getElementById('root')
  )
})