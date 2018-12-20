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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import HomeVideoCard from './HomeVideoCard.js';
import HomeMissionCards from './HomeMissionCards.js';
import HomeTestimonialsCards from './HomeTestimonialsCards.js';
import HomeMediaCards from './HomeMediaCards.js';
import HomeMissionPics from './HomeMissionPics.js';
import HomeStatsCards from './HomeStatsCard.js';

import TestimonialsPic from './TestimonialsPic.jpg';
import instaIcon from './instaIcon.jpg';
import youtubeIcon from './youtubeIcon.jpg';
import emailIcon from './emailIcon.jpg';
import ContactUsBackground from './ContactUsBackground.png';
import Background from './Background.png';
import BackgroundPsypher from './Psypher.png';
import StatsPic1 from './StatsPic1.jpg';
import StatsPic2 from './StatsPic2.jpg';
import StatsPic3 from './StatsPic3.jpg';
import StatsPic4 from './StatsPic4.jpg';
import WhyClockPic from './WhyClockPic.jpg';
import StatsBackgroundPic from './StatsBackgroundPic.jpg';
import MissionPic1 from './MissionPic1.jpg';
import MissionPic2 from './MissionPic2.jpg';
import MissionPic3 from './MissionPic3.jpg';
import WorkshopPic1 from './Workshop1.jpg';
import WorkshopPic2 from './Workshop2.jpg';
import WorkshopPic3 from './Workshop3.jpg';
import WorkshopPic4 from './Workshop4.jpg';
import WorkshopPic5 from './Workshop5.jpg';
import WorkshopPic6 from './Workshop6.jpg';
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
		paddingTop:10,
		paddingBottom:'5vh',
		paddingLeft:5,
		paddingRight:5,

	},
	missionBody:{
		paddingTop:25,
		paddingBottom:25,
		paddingRight:'10vh',
		paddingLeft:'10vh',
	},
	StatisticsUnit:{
		paddingLeft: '13vh',
		paddingRight:'13vh',
		paddingBottom:50,
	},
	Statistics:{
		paddingTop:'8vh',
		paddingRight:'20vh',
		backgroundImage: `url(${StatsBackgroundPic})`,
		backgroundSize:'contain',
		backgroundRepeat:'no-repeat',
		width:'100%',
		backgroundPosition:'right',
	},
	WhyUnit:{
		paddingTop:'10vh',
		paddingBottom:50,
		backgroundImage: `url(${WhyClockPic})`,
		backgroundSize:'cover',
		backgroundRepeat:'no-repeat',
		width:'100%',
		backgroundPosition:'center',
		zIndex:"-1",
		backgroundPosition:'center',
		backgroundAttachment:'fixed',
		opacity:0.6,
	},
	WhyText:{
		paddingBottom:'5vh',
		color:'purple',
	},
	videoUnit:{
		paddingTop:'10vh',
		paddingLeft: 50,
		paddingRight:50,
		paddingBottom:50,
	},
	Video:{

	},
	TestimonialsUnit:{
		paddingLeft: 50,
		paddingRight:50,
		paddingBottom:50,
		paddingTop:'5vh',
		backgroundImage: `url(${TestimonialsPic})`,
		backgroundSize:'cover',
		backgroundRepeat:'no-repeat',
		width:'100%',
		backgroundPosition:'center',
		zIndex:"-1",
		backgroundPosition:'center',
		backgroundAttachment:'fixed',
	},
	testimonialHeader:{
		color:'#B388FF',
		paddingBottom:35, 
	},
	contactUnit:{
		paddingTop:'10vh',
		paddingLeft: '5vh',
		paddingRight:'5vh',
		paddingBottom:'20vh',
		backgroundImage: `url(${ContactUsBackground})`,
		backgroundSize:'contain',
		backgroundRepeat:'no-repeat',
		backgroundPosition:'left',
	},
	contactHeader:{
		paddingBottom:'15vh',
		paddingLeft:'15vh',
		paddingTop:'5vh',
	},
	ContactMediaBody:{
		paddingLeft:'20vh',
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

const theme = createMuiTheme({
  palette: {
  	primary: {
      light: '#757ce8',
      main: '#212121',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
    	main: '#9900ff',
   		dark:'#7e518d',
   		contrastText: '#000',
    },
    textGrey:{
    	main:'#9E9E9E',
    },
  },
});

function HomePage(props) {
	const { classes } = props;	
	console.log('start')
    console.log('New Test with NavBar')
    console.log(process.env.PUBLIC_URL)
    console.log('end')
	return(
	<MuiThemeProvider theme={theme}>
	<React.Fragment>
  		<CssBaseline />
			<header> 
				<NavBar />
			</header>
      		
      		<main>
      		
	        </main>
		<Footer/>
	</React.Fragment>
	</MuiThemeProvider >
	)
	
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);