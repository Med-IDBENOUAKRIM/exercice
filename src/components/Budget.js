import React, { useState } from 'react'
import styled from 'styled-components';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import Content from './Content';


function Budget() {
    const [valuesPrix, setValuesPrix] = useState([]);
    
    return (
        <ContainerBudget   >
            <Price>
                <span className="price__min" >{Math.floor(valuesPrix[0])}</span>
                <span>DH - </span>
                <span className="price__max" >{Math.floor(valuesPrix[1])}</span>
                <span>DH</span>
            </Price> 
            <Nouislider range={{ min: 10000, max: 300000 }} start={[10000, 300000]}  connect onUpdate={(e) => setValuesPrix(e)} />
            <MinMax>
                <Left>
                    <span className="min">10000</span>
                    <span>DH</span>
                </Left>
                <Right>
                    <span className="max">300000</span>
                    <span>DH</span>
                </Right>
            </MinMax>
            <div>
                <Button>
                    CHERCHER
                    <i className="fa fa-car" ></i>
                </Button>
            </div>
            <Content />
        </ContainerBudget>
    )
}

const ContainerBudget = styled.div`
    text-align: center;
    margin-top: 0rem;
    margin-bottom: 2rem;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid lightgray;

    z-index: 99;
    position: relative;
    background: white;
    img {
        width: 210px;
        object-fit: contain;
    }

    @media only screen and (max-width: 540px) {
        & {
            width: 90%;
            margin-left: auto;
            margin-right: auto;
            border: 1px solid lightgray;
            padding: 20px 12px;
        }
    }

    @media (min-width: 541px) and (max-width: 992px) {
        & {
            width: 90%;
            padding: 0 15px;
        }}
`


const Price = styled.div`
    /* display: flex; */
    color: red;
    text-align: center;
    margin: 20px 0;
    
    .price__min {
        font-size: 30px;
        margin-right: 5px;
    }
    .price__max {
        font-size: 30px;
        margin-right: 5px;
    }
`

const MinMax = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 23px 0;
    position: relative;
`

const Left = styled.div`
    position: absolute;
    left: 10%;

    .min {
        font-size: 23px;
    }
`
const Right = styled.div`
    position: absolute;
    right: 10%;

    .max {
        font-size: 23px;
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


export default Budget
