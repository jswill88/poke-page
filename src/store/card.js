import axios from 'axios';

const initial = {
  loading: true,
  pokemon: [],
  url: 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0',
  prev: null,
  next: null
}

export default (state = initial, action) => {

  const { type, payload } = action;

  switch (type) {
    case 'GET_POKEMON':
      const { pokemonArray , next, previous } = payload
      let url = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0'
      return {loading: false, pokemon: pokemonArray, url, next, prev: previous };
    case 'LOADING':
      return {...state, loading: true}
    default:
      return state;
  }
  // return state;
}

const loading = (bool) => ({ type: 'LOADING', payload: bool })

export const getPokemon = (url) => {
      return async function (dispatch) {

        dispatch(loading(true))

        let response = await axios.get(url)

        let queue = []
        response.data.results.forEach(obj => queue.push(() => axios.get(obj.url)))
        
        while(queue.length) {
          const counter = queue.length - 1;
          const pokemon = await queue.pop()()
          response.data.results[counter].image = pokemon.data.sprites.front_default;
        }

        setTimeout(() => {
          dispatch({
            type: 'GET_POKEMON',
            payload: { pokemonArray: response.data.results, next: response.data.next , previous: response.data.previous}
          })
        },500)

      }
  }


