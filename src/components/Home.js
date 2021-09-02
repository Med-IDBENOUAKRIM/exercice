import { render } from '@testing-library/react';
import React, { Fragment, useState } from 'react';
import { Footer } from 'react-materialize';
import { NavLink, Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/homepagelogo.png'
import Budget from './Budget';
import Details from './Details';
import Forms from './Forms';
import MainFooter from './MainFooter';

function Home({history}) {

    

    return (
        <Fragment>
            <Container>
                <img src={Logo} alt="logo" />
                <Article>
                    Trouvez votre prochaine voiture avec <span>Tomobilat</span> Plus de 400 000 voitures en ligne, vous pouvez acheter et vendre des voiture de nouveaux ou d'occasion Simple, Facile, et Rapide!
                </Article>
            </Container>
        </Fragment>
    )
}

const Container = styled.div`
    text-align: center;
    margin-top: 7rem;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    
    img {
        width: 210px;
        object-fit: contain;
    }

    @media only screen and (max-width: 540px) {
        & {
            width: 50%;
            text-align: center;
            margin-top: 2.5rem;
            margin-left: auto;
            margin-right: auto;
        }

        img {
            width: 250px;
            margin-left: auto;
            margin-right: auto;
            object-fit: contain;
        }
    }
    
    `

const Article = styled.h4`
    font-size: 2rem;
    font-weight: 300;
    line-height: 2.5rem;
    margin: 1.4rem 2rem 1.8rem;

    span {
        font-weight: 700;
    }

    @media only screen and (max-width: 540px) {
        & {
            font-size: 1.42rem;
            font-weight: 300;
            line-height: 1.8rem;
            margin: 1.5rem 0;
        }
    }
`








export default withRouter(Home)
