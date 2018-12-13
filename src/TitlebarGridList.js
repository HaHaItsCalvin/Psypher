import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//import tileData from './tileData';
import image from './Corgeek.jpg';
import image2 from './AnthonyLee.jpg';
import image3 from './SorahYang.jpg';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'cover',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    padding:'20px 20px',
    maxWidth: '100%',
    maxHeight:'100%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  icon: {
    color: 'rgba(0, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 */

  const tileData = [
    {
      img: image,
      title: 'Image',
      author: 'author',
    },

    {
      img: image2,
      title: 'Image',
      author: 'author',
    },
    
    {
      img: image,
      title: 'Image',
      author: 'author',
    },
    {
      img: image3,
      title: 'Image',
      author: 'author',
    },

    {
      img: image,
      title: 'Image',
      author: 'author',
    },
    
    {
      img: image,
      title: 'Image',
      author: 'author',
    },
    {
      img: image,
      title: 'Image',
      author: 'author',
    },
    {
      img: image3,
      title: 'Image',
      author: 'author',
    },
/*    {
      [etc...]
   },
*/
 ];
 
function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    {/*<Grid item sm={6} md={4} lg={4}>    */}
      <GridList cellHeight={'3vh'} className={classes.gridList}  spacing={30}>
        {/*Map all the images from arrays into tiles of list */}
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1} sm={6} md={4} lg={4}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              titlePosition="bottom"
              title={tile.title}
              subtitle={<span> By: {tile.author} </span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
        {/*End Mapping*/}
        </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);