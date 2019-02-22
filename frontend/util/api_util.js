export const fetchAllPokemon = () => {
  return $.ajax ({
    method: 'GET',
    url: '/api/pokemon'
  })
}

export const fetchSinglePokemon = (id) => {
  const url = 'api/pokemon/' + id;
  return $.ajax ({
    method: 'GET',
    url
  })
}