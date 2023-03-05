import React from 'react';
import CardsArea from './CardsArea';

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

        <main>
          <CardsArea />
        </main>
      </>
    );
  }
}