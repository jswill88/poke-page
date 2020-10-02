import axios from 'axios'

const initialState = {
  pokemon: [],
};


export default (state = initialState, action) => {

  const { type, payload } = action;

  switch(type) {

  case 'ADD_TO_POKEDEX':

    return {...state, pokemon: [...state.pokemon, payload] };



  default:
    return state;
  }

};



export const pokeball = (pokemon) => {
  return async function (dispatch) {

    let results = await axios.get(pokemon.url)
    
    dispatch({
    type: 'ADD_TO_POKEDEX',
    payload: results.data,
  });

};
}




