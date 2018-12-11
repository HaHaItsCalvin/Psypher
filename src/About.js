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

import Background from './Background.png';
import BackgroundPsypher from './Psypher.PNG';
import Mission from './Mission.PNG';
import Statistics from './Statistics.PNG';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import Image from 'material-ui-image'


const styles = theme => ({
	topPicContainer: {
		backgroundImage: `url(${Background})`,
		backgroundColor: '#000000',
		backgroundSize:'cover',
		backgroundRepeat:'no-repeat',
		height:"100vh",
		width:'100%',
		maxHeight:'937px',
		backgroundPosition:'center',
		backgroundAttachment:'fixed'
	},
	topPsypherPic:{
		backgroundImage: `url(${BackgroundPsypher})`,
		backgroundSize:'contain',
		backgroundRepeat:'no-repeat',
		height:"40vh",
		width:'100%',
		backgroundPosition:'top',
	},
	missionUnit:{
		backgroundColor:'white',
		padding: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 2}px`,

	},
	missionBody:{

	},
	MissionPicture: {
		backgroundImage: `url(${Mission})`,
		backgroundColor: 'white',
		backgroundSize:'contain',
		backgroundRepeat:'no-repeat',
		height:"95vh",
		width:"auto",
		maxHeight:'1078px',
		backgroundPosition:'center',
		backgroundAttachment:'relative'
	},
	statsUnit:{

	},
	Statistics:{
		backgroundImage: `url(${Statistics})`,
		backgroundColor: 'white',
		backgroundSize:'contain',
		backgroundRepeat:'no-repeat',
		height:"90vh",
		width:"100%",
		maxHeight:'1078px',
		backgroundPosition:'center',
		backgroundAttachment:'relative'
	},

	videoUnit:{

	},
	Videos:{

	},

	Testimonials:{

	},
	ContactUs:{
	},
	ContactForm:{

	},
	heroUnit: {
	    backgroundColor: theme.palette.background.paper,
	    paddingTop: '10vh',
	    paddingBottom: '10vh'
	  },
	  heroContent: {
	    maxWidth: '70vh',
	    margin: '0 10%',
	    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
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

//const theme = createMui,Theme({		});

function About(props) {
	const { classes } = props;	
	console.log('start')
    console.log('New Test with NavBar')
    console.log(process.env.PUBLIC_URL)
    console.log('end')
	return(
	<React.Fragment>
  		<CssBaseline />
			<header> 
				<NavBar />
			</header>
      		
      		<main>
      		{/*Home Banner Section*/}
			<Grid container direction='column' justify="center" alignItems="center" className={classes.topPicContainer} xs={12} sm={12} med={12}> 
				<Grid className={classes.topPsypherPic}> </Grid>
			</Grid>
			
			{/*Start Mission Section */}
		    <div className={classes.missionUnit}>
		          <div className={classes.MissionPicture}>
		            
		          </div>
		    </div>

			{/*Start Stats Section */}
		    <div className={classes.Statistics}>
		    </div>

		    {/*Start Video Section */}
		    <div className={classes.Video}>
		    </div>

			{/*Start Testimonials Section */}
		    <div className={classes.Testimonials}>
		    </div>

			{/*Start ContactUs Section*/}
			<div className={classes.ContactUs}>
				<Typography component='h1' variant='h3' align='center' color='textPrimary'> 
					Want to Make a Difference? 
				</Typography>
				<div>
				</div>
			</div>
			{/*Start Example Section*/}
	    	<div className={classes.heroUnit}>
	          <div className={classes.heroContent}>
	            <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
	              Statistics
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
	                    Learn More
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
			</main>
		<Footer/>
	</React.Fragment>
	)
	
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);