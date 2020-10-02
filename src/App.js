import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/footer' 
import Home from './components/home/home'
import Pokedex from './components/pokedex/pokedex.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <Header />
        <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/pokedex' component={Pokedex} />
        </Switch>
        </main>
        <Footer />
    </div>
  );
}

export default App;
