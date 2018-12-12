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

import HomeVideoSection from './HomeVideoSection.js';
import HomeMissionCards from './HomeMissionCards.js';
import HomeTestimonialsCards from './HomeTestimonialsCards.js';
import HomeMediaCards from './HomeMediaCards.js';
import HomeMissionPics from './HomeMissionPics.js';
import StatsCards from './StatsCard.js';
import ContactUs from './ContactUs.PNG'
import Background from './Background.png';
import BackgroundPsypher from './Psypher.png';
import Mission from './Mission.PNG';
import WHY from './WHY.PNG';
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
		paddingTop:50,
		paddingLeft: 50,
		paddingRight:50,
		paddingBottom:50,

	},
	StatisticsUnit:{
		paddingLeft: 50,
		paddingRight:50,
		paddingBottom:50,
	},
	WhyUnit:{paddingLeft: 50,
		paddingRight:50,
		paddingBottom:50,
	},
	videoUnit:{
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
	},
	contactUnit:{
		paddingLeft: 50,
		paddingRight:50,
		paddingBottom:50,
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
				    <Grid container direction ='row'>
				    	<Grid item xs={4} sm={4}>
							<HomeMissionPics
								Quote='pic 1'
							/>	
				    	</Grid>
				    	
				    	<Grid item xs={4} sm={4}>
							<HomeMissionPics
								Quote='pic 2'
							/>		
				    	</Grid>
		              	
		              	<Grid item xs={4} sm={4}>
							<HomeMissionPics
								Quote='pic 3'
							/>	
				    	</Grid>
				    </Grid>
				    <Grid container direction ='row' alignItems='center'>
				    	<Grid item xs={4} sm={4}>
							<Typography align='right' variant='h4' color='textPrimary'>
									WHO AND
							</Typography>
							<Typography align='right' variant='h4' color='textPrimary'>
									WHAT
							</Typography>
							<Typography align='right' variant='h4' color='textPrimary'>
									IS <span>PSYPHER</span>
							</Typography>
				    	</Grid>
				    	<Grid item xs={2} sm={2}>
						    		<Typography align='center'>
						    			Insert break
						    		</Typography>
						</Grid>
				    	<Grid item xs={6} sm={6}>
					    	<Typography align='center'> 
					    		<span>OUR MISSION </span>is to destigmatize mental health 
					    	</Typography>
					    	<Typography align='center'>
					    		through urban dance workshops that
					    	</Typography>
					    	<Grid item container direction="row" justify='center' spacing={32}>
						    	<Grid item sm={4}>
						    		<HomeMissionCards
						    			img="IMG"
						    			keyword="Increase"
						    			phrase="mental health literacy"
						    		/>
						    	</Grid>
				              	<Grid item sm={4}>
						    		<HomeMissionCards
						    			img="IMG"
						    			keyword="Highlight"
						    			phrase="dance as an expressive outlet"
						    		/>
						    	</Grid>
						    	<Grid item sm={4}>
						    		<HomeMissionCards
						    			img="IMG"
						    			keyword="Partner"
						    			phrase="with local mental health professionals"
						    		/>
						    	</Grid>
						    </Grid>
						</Grid>
				    </Grid>
				     <Grid container direction ='row'>
				    	<Grid item xs={4} sm={4}>
							<HomeMissionPics
								Quote='pic 4'
							/>	
				    	</Grid>
				    	
				    	<Grid item xs={4} sm={4}>
							<HomeMissionPics
								Quote='pic 5'
							/>		
				    	</Grid>
		              	
		              	<Grid item xs={4} sm={4}>
							<HomeMissionPics
								Quote='pic 6'
							/>	
				    	</Grid>
				    </Grid>
			    </div>


		    {/*Start Stats Section */}
			    <div className={classes.StatisticsUnit}>
			    	<Grid container direction='row' alignItems='center' spacing={16}>
			    		<Grid item xs={1} sm={1}>
							<Typography align='right'> IMG SET</Typography>
				    	</Grid>
				    	<Grid item xs={1} sm={1}>
							<Typography align='right'> IMG SET</Typography>
				    	</Grid>
					    	<Grid item xs={8} sm={8} container direction='column' spacing={24}> 
					    		<Typography align='center' variant='h5'> WHY <span> PSYPHER </span></Typography>
						    		<Grid item container direction='row' alignItems='flex-start' justify='flex-end' spacing={32}>
										<Grid item xs={12} sm={3} med={3} lg={3}>
											<StatsCards 
												Title="DEATH BY SUICIDE"
												Body="Suicide is the 2nd leading cause of death for young peopel ages 10-34 years old."
											/>		    		
										</Grid>
								    	<Grid item xs={12} sm={3} med={3} lg={3}>
											<StatsCards 
												Title="13 SECONDS"
												Body="Suicide is the 2nd leading cause of death for young peopel ages 10-34 years old."
											/>		    		
										</Grid>
							    		<Grid item xs={12} sm={3} med={3} lg={3}>
											<StatsCards 
												Title="90% OF CASES"
												Body="Suicide is the 2nd leading cause of death for young peopel ages 10-34 years old."
											/>		    		
										</Grid>
							    		<Grid item xs={12} sm={3} med={3} lg={3}>
											<StatsCards 
												Title="14 YEARS OLD"
												Body="Suicide is the 2nd leading cause of death for young peopel ages 10-34 years old."
											/>		    		
										</Grid>
							    	</Grid>
					    	</Grid> 
			    	</Grid>
			    </div>


		    {/*Start Why Section */}
			    <div className={classes.WhyUnit}>
			    	<Grid container direction='column' alignItems='center' justify='center'>
			    		<Typography> Despite all this, the average delay between the onset of symptoms of mental illness and intervention is </Typography>
			    		<Typography variant='h2'> 8-10 <span> YEARS...</span>WHY?</Typography>
			    		<Typography> It's time to <span>innovate</span> and <span>reimagine</span> what mental health resources look like. </Typography>			    		
			    		<Typography> We can't just react to mental illness. </Typography>
			    		<Typography> We need to be proactive about mental health. </Typography>
			    	</Grid>
			    </div>


		    {/*Start Video Section */}
		    	<Grid container direction='column' className={classes.videoUnit}>
			    	<Grid item>
			    		<Typography variant='h2' align='center'> Latest Videos </Typography>
			    	</Grid>
			    	<Grid item>
			    		<HomeVideoSection
			    			Title="Social Media"
			    			Body="Exploring the role of social media in mental health."
			    		/>
			    	</Grid>
			    </Grid>
			

			{/*Start Testimonials Section */}
				<div className={classes.TestimonialsUnit}>
					<h1 align='center'> Testimonials: How Psypher Makes an Impact</h1>
				    <Grid container direction= 'row' className={classes.Testimonials} alignItems="center" justify="center" spacing='40' xs={12} s={12} med={12} lg={12} xl={12}>
				    	<Grid item sm={4}> 
							<HomeTestimonialsCards
									Quote="It brings together something many people struggle with alone and something that brings people together, 
										so maybe the combination can help get people more comfortable with the idea that they don't have to struggle alone
									 	with any mental health concerns they may be facing."
									Source="Grace Zhu"
									Background="Psypher Participant"	
							/>
				    	</Grid>
				    	<Grid item sm={4}> 
							<HomeTestimonialsCards
									Quote="Sometimes there is stuff that you feel is burdening you, and it’s hard to put it into words. Sometimes releasing it 
										through a physical medium, through your body, lets you release that without having to say anything. 
										That’s a cathartic experience."
									Source="Alexia Diaz"
									Background="Psypher Participant"	
							/>
				    	</Grid>
		              	<Grid item sm={4}> 
							<HomeTestimonialsCards
									Quote="Talking about mental health is just really unapproachable and sometimes even boring for other people.  
										Having dance to add this cool, fun aspect to it can keep you engaged. It makes 
										these learning experiences so much more impactful."
				    				Source="JK Suh"
				    				Background="Psypher Participant"	
				    		/>
				    	</Grid>
				    </Grid>
				</div>

			{/*Start ContactUs Section*/}
				<div className={classes.contactUnit}>
			    	<Grid container direction= 'column' alignItems="center" justify="center" spacing='40' xs={12} s={12} med={12} lg={12} xl={12}>
				    	<Typography> Thank you for joining us!</Typography>
				    	<Typography variant='h2'> GET IN TOUCH!</Typography>
						<Grid item container direction='row' alignItems='flex-start' justify='flex-end' spacing={32}>
							<Grid item xs={12} sm={6} med={3} lg={3}>
								<HomeMediaCards 

									Title="PSYPHER LA"
									Body="Subscribe to our YouTube channel to watch videos of our work!"
								/>		    		
							</Grid>
					    	<Grid item xs={12} sm={6} med={3} lg={3}>
								<HomeMediaCards 

									Title="PSYPHEROFFICIAL.LA@GMAIL.COM"
									Body="Don't worry about us missing your message; we check our email daily!"
								/>		    		
							</Grid>
				    		<Grid item xs={12} sm={6} med={3} lg={3}>
								<HomeMediaCards 

									Title="PSYPHERLA"
									Body="Follow our Instagram page to keep up with our promos for future events!"
									/>
							</Grid>
				    		<Grid item xs={12} sm={6} med={3} lg={3}>
								<HomeMediaCards 

									Title="14 YEARS OLD"
									Body="Suicide is the 2nd leading cause of death for young peopel ages 10-34 years old."
								/>		    		
							</Grid>
				    	</Grid>
			    	</Grid>
			    </div>
	    	
	        </main>
		<Footer/>
	</React.Fragment>
	)
	
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);