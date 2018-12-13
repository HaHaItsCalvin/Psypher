import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  img:{
  	maxHeight:'100%',
  	maxWidth:'100%',
  	margin:'auto',
  	display:'block',
  	position:'center,'
  },
});

function HomeMissionCards(props) {
  const { classes } = props;
  return (
       	<Grid container direction='column '> 
       		<img src={props.img} className={classes.img}/>
			<Typography align='center' color='textPrimary'>
					{props.keyword} {props.phrase} {props.botPhrase}
			</Typography> 
		</Grid>
    )
  }

HomeMissionCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeMissionCards);
