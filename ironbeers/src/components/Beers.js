
import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';



class Beers extends Component {
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



  render() {
    console.log(this.state.beers)
    return (
     <div> 
     <Header />
     <div>
       {
        this.state.beers.map((element) => {
           return (
             <div>
             <img style={{width: "150px"}} src={element.image_url} alt=""/>
             <Link to={{ pathname: `/beers/${element.name}`, state: { data: this.state.beers} }}>{element.name}</Link>
             <h2>{element.tagline}</h2>
             <h3>{element.contributed_by}</h3>
             </div>
           )
         })
       }
       
    </div>
    </div>
    )
  }
}

export default Beers;
