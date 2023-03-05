import React from 'react';

import Search from './Search';
import Selection from './Selection';

export default class Home extends React.Component {

  render() {
    return (
      <>
        <nav>
          <Search />
          <Selection />
        </nav>
      </>
    );
  }
}