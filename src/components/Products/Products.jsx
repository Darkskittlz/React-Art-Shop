import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
import Clothes from './Etsy/Clothes';
import Items from './Etsy/Items';
import Accessories from './Etsy/Accessories';
import Footer from '../Footer/Footer';
import { Container } from 'reactstrap';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <h1 className={classes.title}>Merch</h1>
      <Grid container justify="center" spacing={4}>
        <Clothes />
        <Items />
        <Accessories />
      </Grid>
      <h1 className={classes.title}>Art</h1>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
      <br />
      <h1 className={classes.title}>NFTs</h1>
      <h3 className={classes.description}>Coming Soon...</h3>
      <Footer />
    </main>
  );
};

export default Products;

