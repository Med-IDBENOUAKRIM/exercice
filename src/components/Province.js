import React from 'react'
import styled from 'styled-components'
import Content from './Content'

function Province() {
    return (
        <Prov>
           <img src="https://simplemaps.com/static/svg/ma/ma.svg" alt="" />
           <Content />
        </Prov>
    )
}

const Prov = styled.div`

text-align: center;
    margin-top: 0rem;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid lightgray;

    z-index: 99;
    position: relative;
    background: white;

    img {
        height: 500px;
        color: blue !important;
    }

`

export default Province
