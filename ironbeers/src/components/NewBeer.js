import axios from 'axios';
import React, { Component } from 'react';
import Header from './Header';


class NewBeer extends Component {

  constructor(props){
    super(props);
  
    this.state = { 
      newBeer: {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: "",
    }
}
}
 


handleChange= (event)=>{
  event.preventDefault();
  let { name, value } = event.target;
  this.setState( { [name]: value } )
}

handleFormSubmit = (event) => {
  let beer = this.state.newBeer
  axios.post('https://ih-beer-api.herokuapp.com/beers/new', {beer})
    .then(response => {
      console.log(response)
    });
  this.setState({ name: '', tagline: '', description: '', quantity: '', first_brewed: '', brewers_tips: '', attenuation_level: '', contributed_by: '' })
}


  render() {
    return (
     <div>
     <Header />
    
     <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Name</label>
            <input value={this.state.name} type="text" name="name" onChange={this.handleChange} />
          </div>
          <div>
            <label>tagline</label>
            <input value={this.state.tagline} type="text" name="tagline" onChange={this.handleChange} />
          </div>
          <div>
            <label>description</label>
            <input value={this.state.description} type="text" name="description" onChange={this.handleChange} />
          </div>
          <div>
            <label>first_brewed</label>
            <input value={this.state.first_brewed} type="text" name="first_brewed" onChange={this.handleChange} />
          </div>
          <div>
            <label>brewers_tips</label>
            <input value={this.state.brewers_tips} type="text" name="brewers_tips" onChange={this.handleChange} />
          </div>
          <div>
            <label>attenuation_level</label>
            <input value={this.state.attenuation_level} type="text" name="attenuation_level" onChange={this.handleChange} />
          </div>
          <div>
            <label>contributed_by</label>
            <input value={this.state.contributed_by} type="text" name="contributed_by" onChange={this.handleChange} />
          </div>
          <div>
            <input type="submit" value="New Beer"/>
          </div>
      </form>

      </div>
    )
  }
}

export default NewBeer;
