import React, { Component } from 'react';

import NavBar from './NavBar/NavBar';
import Main from './Main/Main';

class Home extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default Home;
