import React from 'react';

import Card from './Card';
import Search from './Search';
import Selection from './Selection';
import { getAllCountries } from '../Providers/CountryProvider';

export default class CardsArea extends React.Component {

	constructor(props){
		super(props);

    this.state = {
      nameQuery: '',
      region: '',
      countries: [],
      displayedCountries: [],
    }
	}
	
  componentDidMount() {

    console.log("CDM");
    getAllCountries().then((data) => {
      this.setState({ countries: data, displayedCountries: data });
    });
  }
  
  updateSearchQuery(nameQuery) {
    this.setState({ nameQuery, displayedCountries:
      this.state.countries.filter((country) => nameQuery === '' || country.name.toLowerCase().includes(nameQuery.toLowerCase().trim()))
                          .filter((country) => this.state.region === '' || this.state.region === country.region)
    });
  }

  updateRegion(region) {
    this.setState({ region, displayedCountries:
      this.state.countries.filter((country) => region === '' || region === country.region)
    });
  }

	render() {
		return(
      <>
        <nav>
          <Search updateSearchQuery={this.updateSearchQuery.bind(this)} />
          <Selection updateRegion={this.updateRegion.bind(this)}/>
        </nav>
        <main className="cards-area">
          {this.state.displayedCountries.map(country => {
            return(
              <div key={country.index}>
                <Card
                  key={country.index}
                  flag={country.flag}
                  name={country.name}
                  region={country.region}
                  capital={country.capital}
                  population={country.population}
                />
              </div>
            );
          })}
        </main>
      </>
		);
	}
}