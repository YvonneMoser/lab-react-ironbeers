import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';




class Beers extends Component {
  constructor(){
    super()
    this.state = {
        beers: [],
    }
}

componentDidMount() {
  axios.get("https://ih-beer-api.herokuapp.com/beers")
  .then(response => {
      const randomNumber = Math.floor(Math.random()*response.data.length)
      this.setState({beers: response.data[randomNumber]})
  })
};


  render() {
    console.log(this.state.beers)
    return (
     <div> 
     <Header />
     <div>
     <img style={{width: "150px"}} src={this.state.beers.image_url} alt=""/>
       <h1>{this.state.beers.name}</h1>
       <h2>{this.state.beers.tagline}</h2>
       <h3>{this.state.beers.contributed_by}</h3>
       
    </div>
    </div>
    )
  }
}

export default Beers;
