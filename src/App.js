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
    <Router>
      <div >            
          <Route exact path="/" component={HomePage} />
          <Route path="/About" component={About} />
          <Route path="/Partners" component={Partners} />
          <Route path="/Workshops" component={Workshops} />
      </div>
    </Router>
    )
  }
}

export default App