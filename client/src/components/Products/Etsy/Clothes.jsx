import React from 'react';
import { Card, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { StorefrontSharp } from '@material-ui/icons';
import useStyles from './styles';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import Grid from '@material-ui/core/Grid';

const slideImages = [
  {
    url: require('./images/biteme-etsy.png'),
    caption: 'Bite M',
  },
  {
    url: require('./images/christmasEtsy.png'),
    caption: 'Slide 2',
  },
  {
    url: require('./images/etsy.png'),
    caption: 'Slide 3',
  },
  {
    url: require('./images/makeAnImpact.png'),
    caption: 'Slide 3',
  },
  {
    url: require('./images/darkMeow.png'),
    caption: 'Slide 3',
  },
  {
    url: require('./images/winterIsComing.png'),
    caption: 'Slide 3',
  },
];

const Clothes = () => {
  const classes = useStyles();

  return (
    <Card id="slideContainer" className={classes.root}>
      <Grid className={classes.slideContainer}>
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div style={{
                backgroundImage: `url(${slideImage.url})`,
                height: 430,
              }}
              >
                {/* <span>{slideImage.caption}</span> */}
              </div>
            </div>
          ))}
        </Slide>
      </Grid>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography><h1>Clothes</h1></Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Visit Etsy" target="_blank" href="https://www.etsy.com/shop/darkmeowproductions">
          <StorefrontSharp />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Clothes;
