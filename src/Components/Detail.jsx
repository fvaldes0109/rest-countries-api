import React from 'react';
import { Link } from 'react-router-dom';

import { getCountry, getCountriesNames } from '../Providers/CountryProvider.js';
import { parsePopulation } from '../Helpers/Parsers.js';

export default class Detail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      country: window.location.pathname.split('/').slice(-1),
      countryData: {},
      borderNames: [],
    }
  }
  
  componentDidMount() {

    getCountry(this.state.country).then((data) => {
      this.setState({ countryData: data[0] });

      getCountriesNames(data[0].borders).then((names) => {
        this.setState({ borderNames: names });
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.country !== this.state.country) {
      getCountry(this.state.country).then((data) => {
        this.setState({ countryData: data[0] });

        getCountriesNames(data[0].borders).then((names) => {
          this.setState({ borderNames: names });
        });
      });
    }
  }

  setCountry(country) {
    this.setState({ country });
  }

  render() {
    
    const data = this.state.countryData;
    const content = Object.keys(this.state.countryData).length === 0 ? '' : (
        <div className='info-page'>
          <div className='flag'>
            <img src={data.flags.svg} alt={`Flag of ${data.name.common}`} />
          </div>
          <div className='info'>
            <h1>{data.name.common}</h1>
            <div className='info-details'>
              <div className='col'>
                <p><strong>Native Name:</strong> {Object.values(data.name.nativeName).map(e => ' ' + e.common).toString()}</p>
                <p><strong>Population:</strong> {parsePopulation(data.population)}</p>
                <p><strong>Region:</strong> {data.region}</p>
                <p><strong>Sub Region:</strong> {data.subregion}</p>
                <p><strong>Capital:</strong> {data.capital}</p>
              </div>
              <div className='col'>
                <p><strong>Top Level Domain:</strong> {data.tld}</p>
                <p><strong>Currencies:</strong> {Object.values(data.currencies).map(e => ' ' + e.name).toString()}</p>
                <p><strong>Languages:</strong> {Object.values(data.languages).map(e => ' ' + e).toString()}</p>
              </div>
            </div>
            <div className='border-info'>
              {this.state.borderNames.length === 0 ? '' : (
                <>
                  <span><strong>Border Countries:</strong></span>
                  {this.state.borderNames.length === 0 ? '' :
                    this.state.borderNames.map((country, index) => 
                      <Link to={`/rest-countries-api/${country.name.common}`} key={index} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <button onClick={() => this.setCountry(country.name.common)}>{country.name.common}</button>
                      </Link>
                    )
                  }
                </>
              )}
            </div>
          </div>
        </div>
      );

    return(
      <div className='detail-page'>
        <nav>
          <Link to='/rest-countries-api' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <button className='back-button'>
              <img src="https://img.icons8.com/ios/50/000000/back.png" alt="back icon" width="20"/>
              Back
            </button>
          </Link>
        </nav>

        <main>
          {content}
        </main>
      </div>
    )
  }
}