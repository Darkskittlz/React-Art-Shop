import React from 'react';
import styled from 'styled-components';
import backgroundVideo from '../../assets/sakura.mp4';


const GridContainer = styled.div`
    width: 100%;
    z-index: 0;
    position: fixed;
    left: 0;
    top: 0;

    @media only screen and (max-width: 380px) {
        display: flex;
        position: fixed;
        width: 100%;
        height: 100%;
    }
`


export default Video => {
    return (
        <GridContainer>
            <video autoPlay loop muted id="video">
                <source src={backgroundVideo} type='video/mp4' />
            </video>
        </GridContainer>
    );
};