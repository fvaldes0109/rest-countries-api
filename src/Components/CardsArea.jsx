import React from 'react';

import Card from './Card';
import { getAllCountries } from '../Providers/CountryProvider';

export default class CardsArea extends React.Component {

	constructor(props){
		super(props);

    this.state = {
      countries: [],
    }
	}
	
  componentDidMount() {

    console.log("CDM");
    getAllCountries().then((data) => {
      console.log(data)
      this.setState({ countries: data });
    });
  }

	render() {

    const cards = this.state.countries.map((country, index) => {
      console.log(index);
      return(
        <Card
          key={index}
          flag={country.flag}
          name={country.name}
          region={country.region}
          capital={country.capital}
          population={country.population}
        />
      );
    }
    );
console.log(cards);
		return(
      <div className="cards-area">
        {cards}
      </div>
		);
	}
}