import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  img:{
    maxHeight:'70px',
    maxWidth:'70px',
    margin:'auto',
    display:'block',
    position:'center,'
  },
});

function HomeMediaCards(props) {
  const { classes } = props;
  return (
        <div>
            <img src={props.img} className={classes.img}/>
            <Typography align='center' color='textPrimary' variant='h6'>
              {props.Title}
            </Typography>
            <Typography align='center' color='textPrimary' >
              {props.Body}
            </Typography>
         </div>   
    )
  }

HomeMediaCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeMediaCards);