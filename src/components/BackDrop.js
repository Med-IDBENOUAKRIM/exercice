import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

function BackDrop({ onClick }) {
    const content = <Div onClick={onClick} ></Div>;
    return ReactDom.createPortal(
        content,
        document.getElementById('backdrop')
    )
}

const Div = styled.div`
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.75);
        z-index: 100;

`

export default BackDrop
