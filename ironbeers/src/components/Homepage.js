import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  

  render() {
    return (
      
     <div>
          <Link to="/beers"><h1>Beers</h1> <p>Here you can see all beers</p></Link>
          <Link to="/random-beers"><h1>Random Beers</h1> <p>Here you can see one random beers</p></Link>
          <Link to="/new-beer"><h1>New Beer</h1> <p>Here you can create a new beer</p></Link>
      </div>
    )
  }
}

export default Homepage;
