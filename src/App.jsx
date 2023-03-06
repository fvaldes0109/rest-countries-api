import React from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CardsArea from './Components/CardsArea.jsx';
import Detail from './Components/Detail';
import { getAllCountries } from './Providers/CountryProvider.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      countries: [],
    }
  }
  
  componentDidMount() {
    getAllCountries().then((data) => {
      this.setState({ countries: data });
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Where in the world?</h1>
          <div className="mode-toggle">
            <img src="https://img.icons8.com/ios/50/000000/moon-symbol.png" alt="moon icon" width="20"/>
            <p>Dark Mode</p>
          </div>
        </header>
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CardsArea countries={this.state.countries}/>} />
            <Route path="/:country" element={<Detail />} />
          </Routes>
        </BrowserRouter>
    
      </div>
    );
  }
}