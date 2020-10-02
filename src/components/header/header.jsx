import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import picture from '../../images/pokemon.png';

function Header(){
  return(
    <header>
      <Navbar bg="danger" variant="dark">
    
      <Navbar.Brand>
      <img
        src={picture}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Poke Logo"
      />
      </Navbar.Brand>

      <Nav className="mr-auto">
        <Link className='nav-link' to ='/poke-page/'>Home</Link>
        <Link className='nav-link' to='/poke-page/pokedex'>Pokédex</Link>
      </Nav>

      </Navbar>

    </header>
  )

}

export default Header;