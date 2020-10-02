import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap/';
import Image from 'react-bootstrap/Image'
import Card from './card'

import './home.scss';

function Home() {  

  return (
    <>

<Container>

  <Row>
    <Col>
      <Jumbotron className="jumbotron">
        <h1>Poké Page</h1>
        <Image src='../../../pokemon.png' width="150"
        height="150" alt="Poke Logo"/>
        <p>Gotta catch em all!</p>
        <p>Click on Pokéball to add a Pokémon to your Pokédex! Click on the Pokédex to see your collection!</p>
      </Jumbotron>
    </Col>
  </Row>
</Container>
        
        <Card />
    </>
  )


}

export default Home;