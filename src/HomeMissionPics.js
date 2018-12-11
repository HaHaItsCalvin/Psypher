import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

function HomeMissionPics(props) {
  const { classes } = props;
  return (
       	<div> 
			<Typography align='center' color='textPrimary'>
				{props.Quote}
			</Typography>
			<Typography component='h1' variant='b2' align='right' color='textPrimary'>
				{props.Source}
			</Typography>
			<Typography component='h1'  align='right' color='textPrimary'>
				{props.Background}
			</Typography>
		</div>
    )
  }

HomeMissionPics.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeMissionPics);
