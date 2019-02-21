export const fetchAllPokemon = () => {
  return $.ajax ({
    method: 'GET',
    url: 'https://localhost:3000/api/pokemon'
  })
}