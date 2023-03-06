import React from 'react';
import { Outlet } from 'react-router-dom';

import Card from './Card';
import Search from './Search';
import Selection from './Selection';

export default class CardsArea extends React.Component {

	constructor(props){
		super(props);

    this.state = {
      nameQuery: '',
      region: '',
      displayedCountries: [],
    }
	}
  
  componentDidMount() {
    if (this.props.countries.length > 0) {
      this.setState({ displayedCountries: this.props.countries });
    } 
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.countries !== this.props.countries) {
      this.setState({ displayedCountries: this.props.countries });
    }
  }

  updateSearchQuery(nameQuery) {
    this.setState({ nameQuery, displayedCountries:
      this.props.countries.filter((country) => nameQuery === '' || country.name.toLowerCase().includes(nameQuery.toLowerCase().trim()))
                          .filter((country) => this.state.region === '' || this.state.region === country.region)
    });
  }

  updateRegion(region) {
    this.setState({ region, displayedCountries:
      this.props.countries.filter((country) => region === '' || region === country.region)
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