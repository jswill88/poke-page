import React, { useEffect } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap/'
import { connect } from 'react-redux'
import { getPokemon } from '../../store/card'
import { pokeball } from '../../store/pokedex.js'

import './home.scss';


const CardComponent = props => {

  const getPokemon = props.getPokemon;
  const url = props.url

  useEffect(() => {
    getPokemon(url);
  }, [getPokemon, url]);

  return (
    <>
      <Row>

        {props.loading ?
          <Col style={{ textAlign: 'center' }}>
            <img src="https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif" alt="loading" />
          </Col>
          :
          <>

            {props.allPokemon.map((pokemon,i) =>
              <Col md={4} key={i}>
                <Card bg='dark' text='light' style={{ textAlign: 'center', margin: '1em' }}>
                  <Card.Body>
                    <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
                    <Button onClick={() => props.pokeball(pokemon)}>
                      Pokéball
              </Button>
                  </Card.Body>
                </Card>
              </Col>
            )}

          </>
        }
      </Row>
      <div style={{ textAlign: 'center', margin: '.5em' }}>
        {props.prev ?
          <Button variant='danger' style={{ margin: '.5em' }} onClick={() => getPokemon(props.prev)} >Prev</Button> :
          null}
        <Button variant='danger' onClick={() => getPokemon(props.next)} >Next</Button>
      </div>
    </>
  )
}

const mapStateToProps = store => ({
  allPokemon: store.cardReducer.pokemon,
  loading: store.cardReducer.loading,
  url: store.cardReducer.url,
  next: store.cardReducer.next,
  prev: store.cardReducer.prev

})

const mapDispatchToProps = { getPokemon, pokeball };

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent);



