import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Select } from 'react-materialize';

function Content() {
    const [show, setShow] = useState(false);
    return (
        <ContentCont>
            <Container>
                <H5>
                    1345
                    <i className="fa fa-car" ></i>
                </H5>
                <Select onClick={() => setShow(!show)}  >
                    <option value="1">Trier par:</option>
                    <option value="The newest">The newest</option>
                    <option value="The lowest">The lowest</option>
                </Select>
            </Container>
            <Charge>
                <Encore>
                    CHARGER ENCORE
                    <i className="fa fa-th"></i>
                </Encore>
            </Charge>
        </ContentCont>
    )
}


const ContentCont = styled.div`
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 35px;

    @media only screen and (max-width: 992px) {
        &{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px 0;
        }
    }

`
const H5 = styled.h5`
    font-size: 25px;
    font-weight: 600;
    color: #3f51b5;
    i {
        font-size: 20px;
        margin-left: 8px;
    }
`

const Charge = styled.div`
    width: 100%;
    color: white;
    margin-bottom: 2rem;
`

const Encore = styled.a`
    text-decoration: none;
    background-color: #ff4081;
    margin: 10px;
    padding: 5px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    color: white;
    letter-spacing: 5%;
    width: 100%;
    i {
        margin-left: 15px;
    }

    @media only screen and (max-width: 992px) {
        &{
            width: fit-content;
        }
    }


`

export default Content
