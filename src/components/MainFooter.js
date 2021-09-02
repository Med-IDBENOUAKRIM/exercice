import React from 'react'
import styled from 'styled-components'
import { marques, persons } from '../list'

function MainFooter() {
    const savoir = () => (
        <a href="#" className="savoir" >
            <p>En savoir plus</p>
            <i className="fa fa-arrow-right"></i>
        </a>
    )
    return (
        <Footer>
            <Container>
                <Annonce>
                    <h1>Announce<span> professional</span></h1>
                    <img src="http://tomobilat.fikralabs.com/images/title.png" alt="Announce" />
                </Annonce>
                <Row>
                    <About>
                        <AboutIntro>
                            <img src="http://tomobilat.fikralabs.com/images/homepagelogf.png" alt="" />
                            <p>
                                Tomobile est une plateforme qui permet de acheter et vendre des voiture de nouveaux ou d'occasion d'une façon simple, facile, et rapide a travers plusieurs methods du rechercher.
                            </p>
                            <Social>
                                <a href="#fb" className="fb">
                                    <i className="fab fa-facebook fa-2x"></i>
                                </a>
                                <a href="#yt" className="yt">
                                    <i className="fab fa-youtube fa-2x"></i>
                                </a>
                                <a href="#ins" className="ins">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                            </Social>
                            {savoir()}
                        </AboutIntro>
                        <Article>
                            <h5>Articles</h5>
                            <Ul>
                                <Li>
                                    <i className="fas fa-square-full"></i>
                                    <a href="#">Volvo fait le pari du tout vert</a>
                                </Li>
                                <Li>
                                    <i className="fas fa-square-full"></i>
                                    <a href="#">Seat Leon l’appel de la cavalerie</a>
                                </Li>
                                <Li>
                                    <i className="fas fa-square-full"></i>
                                    <a href="#">Usine Renault a lamillionnaire!</a>
                                </Li>
                                <Li>
                                    <i className="fas fa-square-full"></i>
                                    <a href="#">Plus qu’une mode une nécessité!</a>
                                </Li>
                                <Li>
                                    <i className="fas fa-square-full"></i>
                                    <a href="#">Assistance technique</a>
                                </Li>
                                <Li>
                                    <i className="fas fa-square-full"></i>
                                    <a href="#">Le rôle de l’expert</a>
                                </Li>
                                <Li>
                                    <i className="fas fa-square-full"></i>
                                    <a href="#">Visite le centre de Total</a>
                                </Li>
                                <Li>
                                    <i className="fas fa-square-full"></i>
                                    <a href="#">Usine Renault a lamillionnaire!</a>
                                </Li>
                                {savoir()}
                            </Ul>
                        </Article>
                    </About>
                    <Mark>
                        <Marque>
                            <h5>Marque</h5>
                            <Ul>
                                {marques.map(marque => (
                                    <Li key={marque.name} >
                                        <a href="#">
                                            <img src={marque.img} alt="MERCEDES" />
                                            <span>{marque.name}</span>
                                        </a>
                                    </Li>
                                ))}
                                {savoir()}
                            </Ul>
                        </Marque>
                        <Classement>
                            <h5>Classement</h5>
                            <Ul>
                                {persons.map(person => (
                                    <Li key={person.name} >
                                        <a href="#">
                                            <img src={person.img} alt="MERCEDES" />
                                            <div className="classement__info">
                                                <span>
                                                    {person.name}
                                                </span>
                                                <span className="pts" >
                                                    {person.pts}
                                                </span>
                                            </div>
                                        </a>
                                    </Li>
                                ))}
                                {savoir()}
                            </Ul>
                        </Classement>
                    </Mark>
                </Row>
            </Container>
            <Copy>
                <div>
                    <span>TOUTS LES DROITS D'AUTEUR RESERVES A TOMOBILAT © 2017</span>
                </div>
            </Copy>
        </Footer>
    )
}

const Footer = styled.footer`
    background-color: rgba(0,0,0,0.75);
    margin-top: -85px;
    padding-top: 8rem;

    position: relative;
    z-index: unset;
`
const Container = styled.div`
    max-width: 1070px;
    margin: 0 auto;
`
const Row = styled.div`
    display: flex;

    @media only screen and (max-width: 992px) {
        &{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }
    }
`
const Annonce = styled.div`
    text-align: center;
    margin: 10px 0;
    h1 {
        color: white;
        font-weight: 300;
    }

    span {
        font-weight: 700;
    }
`

const About = styled.div`
    display: flex;

    @media only screen and (max-width: 600px) {
        &{
            display: flex;
            flex-direction: column;
            justify-items: center;
        }
    }

    @media (min-width: 601px) and (max-width: 992px) {
        &{
            width: 70%;
            margin: 0 auto;
            display: flex;
        }
    }
    
`
const Mark = styled.div`
    display: flex;
    width: 100%;
    @media only screen and (max-width: 992px) {
        &{
            width: 90%;
            margin: 0 auto;
        }
    }

    @media (min-width: 601px) and (max-width: 992px) {
        &{
            width: 70%;
            margin: 0 auto;
            display: flex;
        }
    }
`
const AboutIntro = styled.div`
    width: 50%;
    padding: 5px 8px;
    @media only screen and (max-width: 600px) {
        &{
            width: 90%;
            margin: 0 auto;
            display: block;
        }
    }

    @media (min-width: 601px) and (max-width: 992px) {
        &{
            min-width: 64%;
            margin: 0 auto;
            display: block;
        }
    }
    
    img {
        width: 97px;
        margin: 0 auto;
        display: block;

        @media only screen and (max-width: 992px) {
            &{
                width: 96px;
                margin: 8px auto;
                display: block;
            }
        }
    }
    
    p {
        color: white;
        margin: 15px 0;
    }
    
    .savoir {
        display: flex;
        align-items: center;
        text-decoration: none;
        margin-top: 15px;
        margin-bottom: 12px;
        font-size: 14px;
        color: white;
        i {
            margin-top: 3px;
            margin-left: 10px;
        }

        &:hover {
            color: red;
        }
    }
`

const Marque = styled.div`
    width: 50%;

    @media (min-width: 601px) and (max-width: 992px) {
        &{
            min-width: 65%;
            margin: 0 auto;
            display: block;
        }
    }

    h5 {
        font-size: 20px;
        margin: 13px 0 10px 0;
        color: white;
        font-weight: 500;
        border-bottom: 5px solid #e91e63;
        padding-bottom: 18px;
        width: 40%;
    }

    .savoir {
        display: flex;
        align-items: center;
        text-decoration: none;
        margin-bottom: 12px;
        font-size: 14px;
        color: white;
        i {
            margin-top: 3px;
            margin-left: 10px;
        }

        &:hover {
            color: red;
        }
    }

    img {
        width: 50px;
        margin-right: 5%;
    }
`

const Classement = styled.div`
    width: 50%;

    @media (min-width: 601px) and (max-width: 992px) {
        &{
            width: 25%;
            margin: 0 auto;
            display: block;
        }
    }

    @media (min-width: 601px) and (max-width: 992px) {
        &{
            min-width: 50%;
            margin: 0 auto;
            display: block;
        }
    }

    h5 {
        font-size: 20px;
        margin: 13px 0 10px 0;
        color: white;
        font-weight: 500;
        border-bottom: 5px solid #e91e63;
        padding-bottom: 15px;
        width: 50%;
    }

    .classement__info span {
        display: flex;
        font-size: 15px;
    }

    .pts {
        font-weight: 700;
    }
    

    img {
        width: 40px;
        height: 40px;
        object-fit: contain;
        border-radius: 50%;
        margin-right: 15px;
        margin-top: 2px;
    }

    span:hover {
        color: white;
    }

    .savoir {
        display: flex;
        align-items: center;
        text-decoration: none;
        margin-bottom: 12px;
        font-size: 14px;
        color: white;
        i {
            margin-top: 3px;
            margin-left: 10px;
        }

        &:hover {
            color: red;
        }
    }
`


const Social = styled.div`
    a {
        padding: 16px 8px 7px 9px;
        margin-right: 15px;
    }


    .yt {
        border-radius: 50%;
        font-size: 0.75rem;
        background-color: red;
        color: white;
    }
    .fb {
        border-radius: 50%;
        font-size: 0.85rem;
        background-color: blue;
        color: white;
    }
    .ins {
        border-radius: 50%;
        font-size: 0.85rem;
        background-color: #e91e63;
        color: white;
    }
`

const Article = styled.div`
    padding: 5px 8px;
    @media only screen and (max-width: 992px) {
        &{
            width: 90%;
            margin: 0 auto;
            display: block;
        }
    }

    @media (min-width: 601px) and (max-width: 992px) {
        &{
            min-width: 57%;
            margin: 0 auto;
            display: block;
        }
    }

    h5 {
        font-size: 22px;
        margin: 13px 0 25px 0;
        color: white;
        font-weight: 400;
        border-bottom: 5px solid #e91e63;
        padding-bottom: 10px;
        width: 30%;
    }

    .savoir {
        display: flex;
        align-items: center;
        text-decoration: none;
        margin-top: 12px;
        margin-bottom: 12px;
        font-size: 14px;
        color: white;
        i {
            margin-top: 3px;
            margin-left: 10px;
        }

        &:hover {
            color: red;
        }
    }
`
const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    color: white;
`

const Li = styled.li`
    display: flex;
    align-items: center;
    padding: 0;
    margin: 5px 0;
    a {
        display: flex;
        color: white;
        text-decoration: none;
        line-height: 1.5;
        font-size: 13px;
    }

    a:hover {
        color: red;
    }

    i {
        padding-top: 0;
        padding-left: 0;
        padding-bottom: 0;
        font-size: 0.35rem;
        color: white;
        padding-right: 5px;
        @media only screen and (max-width: 992px) {
            &{
                display: none;
            }
        }
        @media (min-width: 601px) and (max-width: 992px) {
            &{
                display: block;
                margin-right: 5px;
            }
        }
    }
`

const Copy = styled.div`
    background-color: #212121;

    /* @media only screen and (max-width: 992px) {
        &{
            width: 100%;
            margin: 0 auto;
            padding: 15px 0;
            color: white;
        }
    } */
    
    div {
        max-width: 1070px;
        margin: 0 auto;
        padding: 15px 0;
        color: white;
        font-size: 12px;
        @media only screen and (max-width: 992px) {
            &{
                width: 80%;
                margin: 0 auto;
                padding: 15px 0;
                color: white;
            }
        }
    }
`

export default MainFooter
