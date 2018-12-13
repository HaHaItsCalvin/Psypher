import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    img:{
    maxHeight:'100%',
    maxWidth:'100%',
    margin:'auto',
    display:'block',
    position:'center,'
  },
});

function StatsCards(props) {
  const { classes } = props;
  return (
        <div>
            <img src={props.img} className={classes.img}/>
            <Typography align='center' color='textPrimary' variant='h6' >
              {props.Title}
            </Typography>
            <Typography align='center' color='textPrimary'>
              {props.Body}
            </Typography>
         </div>   
    )
  }

StatsCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatsCards);