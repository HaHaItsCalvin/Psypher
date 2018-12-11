import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import BackgroundPsypher from './Psypher.PNG';
const styles = theme => ({
  navPsypher: {        
    borderRadius: 3,
        border: 0,
        color: 'black',
        height: 48,
        padding: '0 30px',
        background:"white",
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        fontWeight: 500,
        fontSize: 48,
        fontFamily: 'sans-serif',
  },
});
const navPsypher={
        height:48,
};

const theme = createMuiTheme({
  palette: {
    primary: { main:'#FAFAFA' }, // Purple and green play nicely together.
    secondary: { main: '#EEEEEE' }, // This is just green.A700 as hex.
  },
  
    overrides:{
     MuiAppbar:{
      root:{
        position: 'relative',
        color:'primary',
      },
     },

     MuiButton: {
      root:{
        //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        fontWeight: 550,
        fontSize: 20,
        fontFamily: 'sans-serif',
        },
      },
  },
});


export default class NewNavBar extends React.Component{
  render(){
    return(
      <React.Fragment>
      <MuiThemeProvider theme={theme}>

      <AppBar style={{ background: 'black', boxShadow:'30%'}}>
            <Toolbar>
                <Grid container direction="row" justify="space-between">
                  <Grid item med={3}>
                      <Button component={Link} to={process.env.PUBLIC_URL+'/'}>
                         <img src={BackgroundPsypher} style={navPsypher}/>
                      </Button>
                  </Grid>
                    
                  <Grid item med={3}>
                    <Button component={Link} to={process.env.PUBLIC_URL+'/'}>
                       Home
                    </Button>

                    <Button component={Link} to="/About">
                       About
                    </Button>

                    <Button component={Link} to="/Partners">
                       Partners
                    </Button>

                    <Button component={Link} to="/Workshops">
                       Workshops
                    </Button>
                  </Grid>
                </Grid>
            </Toolbar>
           </AppBar>
           </MuiThemeProvider>
           </React.Fragment>
    )
  }
}
