import React from "react";

export default class Search extends React.Component {

  render() {
    return (
      <div className="search">
        <img src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="search icon" width="20"/>
        <input type="text" placeholder="Search for a country..." onChange={(e) => this.props.updateSearchQuery(e.target.value)} />
      </div>
    );
  }
}