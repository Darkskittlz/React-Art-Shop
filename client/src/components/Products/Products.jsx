import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import useStyles from './styles';
import Clothes from './Etsy/Clothes';
import Items from './Etsy/Items';
import Accessories from './Etsy/Accessories';
import Footer from '../Footer/Footer';
import Video from './Video';
import styled from 'styled-components';
import './style.css';


const GridContainer = styled.div`
  width: 100%;
  z-index: 999;
  backdrop-filter: blur(10px);
  margin-top: 30px;
  padding-bottom: 20px;

  h1 {
    text-align: center;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  backdrop-filter: blur(10px);
  z-index: 999;
  margin-top: 20px;

  h1 {
    background-color: #ffffff90;
    width: 180px;
    border-radius: 10px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
  }
`

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 20px;

  button {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid black;
    backdrop-filter: blur(10px);
    background-color: #ffffff9d;
  }

  a {
    text-decoration: none;
  }
`

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Video />
      <ContentContainer>
        <TitleContainer>
          <h1>Merch</h1>
        </TitleContainer>
        <Grid container justify="center" spacing={2}>
          <Clothes />
          <Items />
          <Accessories />
        </Grid>
        <GridContainer>
          <TitleContainer>
            <h1>Art</h1>
          </TitleContainer>
          <Grid container justify="center" spacing={4}>
            {products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
            <Container>
              <a href="https://spaces.chec.io/39742"><button>Store</button></a>
            </Container>
          </Grid>
        </GridContainer>
        <br />
        <br />
        <br />
      </ContentContainer>
      <Footer />
    </main>
  );
};

export default Products;

