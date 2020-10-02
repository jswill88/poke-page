import React, {useState} from 'react'; 
import {connect} from 'react-redux';

import { Container, Carousel, Alert } from 'react-bootstrap/'

import './pokedex.scss'

function Pokedex(props) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <Container className="carousel-container">

  <Alert variant={'dark'} style={{textAlign:'center', margin:'1em'}}>
   {props.pokemon.length} Pokémon<br/> "There is strength in numbers" - Ash Ketchum
  </Alert>

    <Carousel activeIndex={index} onSelect={handleSelect}>
      {props.pokemon.map((pokemon,i) => (
      <Carousel.Item width={100} height={100} key={i}>
        <img
          className="d-block w-100"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          />
        <Carousel.Caption >
          <h2 className="caption-text">{pokemon.name.toUpperCase()}</h2>
          <p className="caption-text">Pokédex Number: {pokemon.order}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}

    </Carousel>
</Container>


  );
}

const mapStateToProps = (state) => {

  return {
    pokemon: state.pokedexReducer.pokemon,
  }
}

export default connect(mapStateToProps)(Pokedex);
