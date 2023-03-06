import React from 'react';
import { Link } from 'react-router-dom';

import { parsePopulation } from '../Helpers/Parsers';

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
      <Link to={'/' + this.state.name} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <div className="country-card">
          <img src={this.state.flag} alt={this.state.name} />
          <div className="country-card-info">
            <h2>{this.state.name}</h2>
            <p><strong>Population:</strong> {parsePopulation(this.state.population)}</p>
            <p><strong>Region:</strong> {this.state.region}</p>
            <p><strong>Capital:</strong> {this.state.capital}</p>
          </div>
        </div>
      </Link>
    );
  }
}