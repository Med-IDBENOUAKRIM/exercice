import React from 'react';
import { Select } from 'react-materialize';
import 'materialize-css';
import styled from 'styled-components';
import Content from './Content';

function Details() {
    
    return (
        <Container>
                <Selector>
                    <Select>
                        <option value="1">Marque</option>
                        <option value="BMW">BMW</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Land Rover">Land Rover</option>
                    </Select>
                    <Select>
                        <option value="1">Fuel Type</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Electric">Electric</option>
                    </Select>
                    <Select>
                    <option value="1">Modèle</option>
                        <option value="BMW">BMW</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Land Rover">Land Rover</option>
                    </Select>
                    <Select>
                        <option value="1">Ville</option>
                        <option value="Agadir">Agadir</option>
                        <option value="Marrakesh">Marrakesh</option>
                        <option value="Casablanca">Casablanca</option>
                    </Select>
                    <Select>
                        <option value="1">Prix min</option>
                        <option value="10 000DH">10 000DH</option>
                        <option value="30 000DH">30 000DH</option>
                        <option value="60 000DH">60 000DH</option>
                    </Select>
                    <Select>
                        <option value="1">Trier par:</option>
                        <option value="100 000DH">100 000DH</option>
                        <option value="300 000DH">300 000DH</option>
                        <option value="600 000DH">600 000DH</option>
                    </Select>
                    <Select>
                        <option value="1">Format</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Coupe">Coupe</option>
                    </Select>
                    <Select>
                        <option value="1">Annee min</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                    </Select>
                    <Select>
                        <option value="1">Annee min</option>
                        <option value="2009">2012</option>
                        <option value="2010">2014</option>
                        <option value="2011">2017</option>
                    </Select>
                    <Select>
                        <option value="1">Places</option>
                        <option value="two">Two Places</option>
                        <option value="five">Five Places</option>
                        <option value="eight">Eight Places</option>
                    </Select>
                    <Select>
                        <option value="1">Km Mini</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                    </Select>
                    <Select>
                        <option value="1">Kilométrage Maxi</option>
                        <option value="2009">2012</option>
                        <option value="2010">2014</option>
                        <option value="2011">2017</option>
                    </Select>
                </Selector>
                <div>
                    <Button>
                        CHERCHER
                        <i className="fa fa-car" ></i>
                    </Button>
                </div>
                <Content />
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    margin-top: 0rem;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid lightgray;
    padding: 0 5%;
    z-index: 99;
    position: relative;
    background: white;

    @media only screen and (max-width: 992px) {
        &{
            width: 90%;
            padding: 0 5px;
        }
    }
`

const Selector = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media only screen and (max-width: 992px) {
        &{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }
    }

`

const Button = styled.button`
    background-color: #3f51b5;
    border: none;
    outline: none;
    color: white;
    padding: 10px 35px;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 10px;
    
    i {
        margin-left: 10px;
        font-size: 15px;
    }
`

export default Details
