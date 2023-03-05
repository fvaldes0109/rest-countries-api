import React from "react";

export default class Selection extends React.Component {

  render() {
    return (
      <select>
        <option value="" disabled selected hidden>Filter by Region</option>
        <option value="">Any</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    );
  }
}