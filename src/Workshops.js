import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar';
import Footer from './Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import TitlebarGridList from './TitlebarGridList.js';

const styles = theme => ({
	heroUnit: {
	    backgroundColor: theme.palette.background.paper,
	    paddingTop: '10vh',
	  },
	  heroContent: {
	    maxWidth: '70vh',
	    margin: '0 10%',
	    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
	  },
	  heroContentRight: {
	    maxWidth: '70vh',
	    margin: '0 10%',
	  },
	  heroButtons: {
	    marginTop: theme.spacing.unit * 4,
	  },
	  layout: {
	    width: 'auto',
	    marginLeft: theme.spacing.unit * 3,
	    marginRight: theme.spacing.unit * 3,
	    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
	      width: 1100,
	      marginLeft: 'auto',
	      marginRight: 'auto',
	    },
	  },
	outerContainer: {
		backgroundImage: `url()`,
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
});


function Partners(props) {
  	const { classes } = props;

	console.log('start')
    console.log('New Test with NavBar')
    console.log(process.env.PUBLIC_URL)
    console.log('end')
		return(
		<React.Fragment>
      		<CssBaseline />
      		<NavBar />
      		<main>
      			{/* Start First Section*/}
				<div className={classes.heroUnit}>
		          <div className={classes.heroContent}>
		            <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
		              Workshops
		            </Typography>
		            <Typography variant="h6" align="left" color="textSecondary" paragraph>
		              Something short and leading about the collection below—its contents, the creator, etc.
		              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
		              entirely.
		            </Typography>
		            <div className={classes.heroButtons}>
		              <Grid container spacing={16} justify="left">
		                <Grid item>
		                  <Button variant="outlined" color="primary">
		                    Learn About Teaching
		                  </Button>
		                </Grid>
		                <Grid item>
		                  <Button variant="outlined" color="primary">
		                    Contact Us
		                  </Button>
		                </Grid>
		              </Grid>
		            </div>
		          </div>
		        </div>

		    	{/*Start Second Section */}
		    	<div className={classes.heroUnit}>
		          <div className={classes.heroContentRight}>
		            <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
		              Structure
		            </Typography>
		            <Typography variant="h6" align="left" color="textSecondary" paragraph>
		              Something short and leading about the collection below—its contents, the creator, etc.
		              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
		              entirely.
		            </Typography>
		            <div className={classes.heroButtons}>
		              <Grid container spacing={16} justify="left">
		                <Grid item>
		                  <Button variant="outlined" color="primary">
		                    Learn About Teaching
		                  </Button>
		                </Grid>
		                <Grid item>
		                  <Button variant="outlined" color="primary">
		                    Contact Us
		                  </Button>
		                </Grid>
		              </Grid>
		            </div>
		          </div>
		        </div>
		    {/*Start Third Section */}
		    <TitlebarGridList/>
			</main>
			<Footer/>
		</React.Fragment>
	)
}

Partners.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Partners);