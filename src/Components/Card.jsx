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
  
  parsePopulation(num) {
    
    let str = num.toString();
    let result = '';
    let counter = 0;
    
    for(let i = str.length - 1; i >= 0; i--) {
      result = str[i] + result;
      counter++;
      if(counter === 3 && i !== 0) {
        result = ',' + result;
        counter = 0;
      }
    }
    
    return result;
  }

  render() {
    return(
      <div className="country-card">
        <img src={this.state.flag} alt={this.state.name} />
        <div className="country-card-info">
          <h2>{this.state.name}</h2>
          <p><strong>Population:</strong> {this.parsePopulation(this.state.population)}</p>
          <p><strong>Region:</strong> {this.state.region}</p>
          <p><strong>Capital:</strong> {this.state.capital}</p>
        </div>
      </div>
    );
  }
}