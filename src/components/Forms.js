import React from 'react';
import styled from 'styled-components';
import { cars } from '../list';
import Content from './Content';

function Forms() {
    return (
        <Container>
            <Ul>
                {cars.map(car => (
                    <Li>
                    <a href="#1">
                        <Img src={car.img} alt={car.bsName} />
                        <div>
                            <span>{car.bsName}</span>
                            <span>({car.bsNumber})</span>
                        </div>
                    </a>
                </Li>
                ))}
            </Ul>
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

    z-index: 99;
    position: relative;
    background: white;

    @media only screen and (max-width: 992px) {
        &{
            width: 90%;
        }
    }
    
`
const Img = styled.img`
    width: 100px;
    transition: ease-out 2s;
    &:hover {
        transform: scale(1.13);
    }
`
const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 75px;

    @media only screen and (max-width: 600px) {
        &{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }

`
const Li = styled.li`
    list-style-type: none;

    a {
        text-decoration: none;

        div {
            display: flex;
            flex-direction: column;
        }
    }

    a:hover {
        color: red;
    }
`

export default Forms
