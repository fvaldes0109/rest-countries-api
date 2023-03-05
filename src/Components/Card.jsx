import React from 'react';

export default class Card extends React.Component {

  constructor(props) {
    super(props);
   
    this.state = {
      flag: props.flag,
      name: props.name,
      region: props.region,
      capital: props.capital,
      population: props.population
    };
  }
  

  render() {
    return(
      <div className="country-card">
        <img src={this.state.flag} alt={this.state.name} />
        <div className="country-card-info">
          <h2>{this.state.name}</h2>
          <p><strong>Region:</strong> {this.state.region}</p>
          <p><strong>Capital:</strong> {this.state.capital}</p>
          <p><strong>Population:</strong> {this.state.population}</p>
        </div>
      </div>
    );
  }
}