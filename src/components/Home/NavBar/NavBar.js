import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class NavBar extends Component {

  render() {
    return (
      <div>
        <AppBar position='absolute'>
          <Toolbar>Avaliação Física</Toolbar>
        </AppBar>
      </div>
    );
  }

}

export default NavBar;
