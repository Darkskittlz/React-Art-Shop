import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Card, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { StorefrontSharp } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

const fadeImages = [
  {
    url: require('./images/beanieBlack.png'),
  },
  {
    url: require('./images/beaniePink.png'),
  },
  {
    url: require('./images/beanieBlackGray.png'),
  },
  {
    url: require('./images/beanieBlue.png'),
  },
  {
    url: require('./images/beanieRedGray.png'),
  },
  {
    url: require('./images/beanieRed.png'),
  },
];

const Items = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid className={classes.slideContainer}>
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div style={{
                backgroundImage: `url(${fadeImage.url})`,
                height: 430,
              }}
              >
                <img src={fadeImage.url} alt="img" />
              </div>
              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>
      </Grid>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography><h1>Accessories</h1></Typography>
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
