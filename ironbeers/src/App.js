import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Homepage from './components/Homepage';
import Beers from './components/Beers';
import RandomBeers from './components/RandomBeers';
import newBeer from './components/NewBeer';
import DetailBeer from './components/DetailBeer';

import axios from 'axios'

class App extends Component {

  constructor(){
    super()
    this.state = {
        beers: []
    }
}

componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers")
    .then(response => {
        this.setState({beers: response.data})
    })
};

  render(){
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/:name" component={DetailBeer} />
          <Route exact path="/random-beers" component={RandomBeers} />
          <Route exact path="/new-beer" component={newBeer} />
        </Switch>
    </div>
  );
}
}

export default App;
