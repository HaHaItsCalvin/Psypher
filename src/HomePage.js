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

import ContactUs from './ContactUs.PNG'
import Background from './Background.png';
import BackgroundPsypher from './Psypher.png';
import Mission from './Mission.PNG';
import WHY from './WHY.PNG';
import Statistics from './Statistics.PNG';


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
	WhyUnit:{
	},
	Why:{
		backgroundImage: `url(${WHY})`,
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
		paddingLeft: 50,
		paddingRight:50,
		paddingBottom:50,
	},
	contactUnit:{

	},
	ContactUs:{
		backgroundImage: `url(${ContactUs})`,
		backgroundColor: 'white',
		backgroundSize:'contain',
		backgroundRepeat:'no-repeat',
		height:"90vh",
		width:"100%",
		maxHeight:'1078px',
		backgroundPosition:'center',
		backgroundAttachment:'relative'
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

//const theme = createMuiTheme({		});

function HomePage(props) {
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


		    {/*Start Why Section */}
		    <div className={classes.WhyUnit}>
		    	<div className={classes.Why}> </div>
		    </div>


		    {/*Start Video Section */}
		    <div className={classes.Video}>
		    </div>
			{/*Start Testimonials Section */}
			<h1 align='center'> Testimonials: How Psypher Makes an Impact</h1>
		    <Grid container direction= 'row' className={classes.Testimonials} alignItems="center" justify="center" spacing='40' xs={12} s={12} med={12} lg={12} xl={12}>
		    	<Grid item sm={4}> 
					<Typography align='center' color='textPrimary'>
							"It brings together something many people struggle with alone and something that brings people together, 
							so maybe the combination can help get people more comfortable with the idea that they don't have to struggle alone
							 with any mental health concerns they may be facing."
					</Typography>
		    		<Typography component='h1' variant='b2' align='right' color='textPrimary'>Grace Zhu  </Typography>
		    		<Typography component='h1'  align='right' color='textPrimary'>Psypher Participant</Typography>
		    	</Grid>
		    	
		    	<Grid item sm={4}> 
					<Typography align='center' color='textPrimary'>
							"Sometimes there is stuff that you feel is burdening you, and it’s hard to put it into words. Sometimes releasing it 
							through a physical medium, through your body, lets you release that without having to say anything. 
							That’s a cathartic experience."
					</Typography>
		    		<Typography component='h1' variant='b2' align='right' color='textPrimary'>Alexia Diaz  </Typography>
		    		<Typography component='h1'  align='right' color='textPrimary'>Psypher Participant</Typography>
		    	</Grid>
              	
              	<Grid item sm={4}> 
					<Typography align='center' color='textPrimary'>
							"Talking about mental health is just really unapproachable and sometimes even boring for other people.  
							Having dance to add this cool, fun aspect to it can keep you engaged. It makes 
							these learning experiences so much more impactful."
					</Typography>
		    		<Typography component='h1' variant='b2' align='right' color='textPrimary'>JK Suh  </Typography>
		    		<Typography component='h1'  align='right' color='textPrimary'>Psypher Participant</Typography>
		    	</Grid>
		    	</Grid>

			{/*Start ContactUs Section*/}
			<div className={classes.contactUnit}>
		          <div className={classes.ContactUs}>
		            
		          </div>
		    </div>
			{/*Start Example Section*/}
	    	
	        </main>
		<Footer/>
	</React.Fragment>
	)
	
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);