import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Card, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { StorefrontSharp } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';


const slideImages = [
  {
    url: require('./images/mug.png'),
  },
];

const Items = () => {
  const classes = useStyles();
  const [autoplay, setAutoplay] = useState(false);

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <div style={{ display: "none" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></div>,
    nextArrow: <div style={{ display: "none" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></div>
  };

  return (
    <Card id="slideContainer" className={classes.root}>
      <Grid className={classes.slideContainer}>
        <Slide autoplay={autoplay} {...properties}>
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
          <Typography><h1>Cookware</h1></Typography>
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

export default Items;
