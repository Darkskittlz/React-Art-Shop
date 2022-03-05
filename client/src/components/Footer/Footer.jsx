import { Facebook, GitHub, Instagram, MailOutline, Room, Twitter } from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '../responsive';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
// import theme from "./FooterStyles";
// import { BottomNavigation } from '@mui/material';
import React from 'react';
import {
  Box
} from "./FooterStyles";


const Left = styled.div`
    flex: 1.5;  
    display: flex;
    margin-top: 10px;
    margin-left: 10px;
    justify-content: space-between;
    flex-direction: column;
    //Makes flex container display vertically as opposed to the :default, :horizontal. 
`;

const Logo = styled.h1`
  font-size: 45px;
    ${mobile({ textAlign: 'center', marginTop: '5px' })}
`;
const Desc = styled.p`
    margin: 20px 0px;
    font-size: 14px;
    font-weight: 600;

`;
const SocialContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
    ${mobile({ justifyContent: 'center', marginBottom: '10px' })}

`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    //This is saying take my props, look inside (props.color) and find color. 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    margin-bottom: 15px;
`;

const Right = styled.div`
    flex: 1;   
    padding: 0px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    ${mobile({ backdropFilter: 'blur(10px)' })}
`;

const Center = styled.div`
    flex: 1;   
    padding: 40px;
    margin-top: -40px;
    ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
    margin-bottom: 10px;
    display: flex;
    ${mobile({ justifyContent: 'center', fontWeight: '600', fontSize: '25px', textDecoration: 'underline' })}
`;

const List = styled.ul`   
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    //flex-wrap: wrap = The flex items break into multiple line-height-step. The crossover start 
    //is equivalent to start or before depending on flex-direction value. The cross-end
    //is located opposite of the specified cross-start.
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    ${mobile({ justifyContent: 'center', fontSize: '20px' })}
`;

const Payment = styled.img`
  width: 95%;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  ${mobile({ justifyContent: 'center', display: 'flex' })};
`;

const PaymentContainer = styled.div`
  width: 100%;
  padding-bottom: 5px;
  ${mobile({ backdropFilter: 'blur(10px)', width: '100%', justifyContent: 'center', display: 'flex' })};
`




const Footer = () => {
  return (
    <Box>
      <Left>
        <Logo>DarkMeow Productions</Logo>
        <Desc>
          <p>
            DarkMeow is founded by Darkskittles and Devin Meow.
            A couple madly in love, who have combined their skills of artistry and
            programming to bring you Dark Meow Productions. Here you’ll find Art,
            Merch, and NFT’s for sale, hand created in house. Our mission is to bring art,
            passion, and cuteness to your life!
          </p>
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="000000">
            <GitHub />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <Button
            aria-label="Visit Etsy"
            target="_blank"
            href="https://www.etsy.com/shop/darkmeowproductions"
            cursor="pointer"
            color="dark"
          >Etsy</Button>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} />United States
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} />Darkskiiittles@gmail.com
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} />Devin.Meowz@gmail.com
        </ContactItem>
        <PaymentContainer>
          <Payment src="https://sep.yimg.com/ca/I/yhst-172622206-1_2636_1275986089" />
        </PaymentContainer>
      </Right>
    </Box>
  );
};
export default Footer;
