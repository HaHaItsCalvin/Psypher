import React, { Component } from 'react';
import NavBar from './NavBar';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import {HomePage} from './HomePage';
import {About} from './About';
import {Partners} from './Partners';
import Workshops from './Workshops';

class App extends Component {
  render() {
    return (
    
      <div > 
          <h1> Test </h1>           
      </div>

    )
  }
}

export default App