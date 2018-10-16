import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Background from './Corgeek.jpg';
import NavBar from './NavBar';
//import Image from 'material-ui-image'


const styles= {
	outerContainer: {
		backgroundImage: `url(${Background})`,
		backgroundSize:'fit',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center',
		height:"30vh",
	},
	text: {        
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
}

const theme = createMuiTheme({		});

export class HomePage extends React.Component {
	render() {
	console.log('start')
    console.log('New Test with NavBar')
    console.log(process.env.PUBLIC_URL)
    console.log('end')
		return(
			<Grid container direction="column" justify="center" alignItems="center" style={styles.outerContainer} med={12}>
				<NavBar />
			</Grid>
		)
	}
}