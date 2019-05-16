import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';




class Beers extends Component {
  constructor(props){
    super()
    this.state = {
        beers: props.location.state.data
    }
}


getBeerbyName = (name) => {
  let result = this.state.beers.find( (beer) => beer.name === name );
  return result;
}

  render() {
    console.log(this.state.beers)
    console.log(this.props.match.params.name)

    const name = this.props.match.params.name;
    const detailBeer = this.getBeerbyName(name);
    console.log(detailBeer)

    return (
     <div> 
     <Header />
     <div style={{width: "500px"}}>
     <image src={detailBeer.image_url}/>
     <h1>{detailBeer.name}</h1>
     <h2>{detailBeer.tagline}</h2>
     <h3>{detailBeer.first_brewed}</h3>
     <h3>{detailBeer.attenuation_level}</h3>
     <p>{detailBeer.description}</p>
     <h2>{detailBeer.contributed_by}</h2>
     <Link to='/beers'>Back</Link>
     </div>
    </div>
    )
  }
}

export default Beers;
