import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

function HomeMissionCards(props) {
  const { classes } = props;
  return (
       	<div> 
			<Typography> {props.img}</Typography>
			<Typography align='center' color='textPrimary'>
					{props.keyword} {props.phrase}
			</Typography>
		</div>
    )
  }

HomeMissionCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeMissionCards);
