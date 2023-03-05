import React from "react";

export default class Selection extends React.Component {

  render() {
    return (
      <select onChange={(e) => this.props.updateRegion(e.target.value)}>
        <option value="" disabled selected hidden>Filter by Region</option>
        <option value="">Any</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    );
  }
}