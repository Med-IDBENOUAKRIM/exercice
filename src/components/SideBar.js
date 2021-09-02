import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


function SideBar({ children, onClick }) {
    const content = <Aside  onClick={onClick} >{children}</Aside>;

    return ReactDOM.createPortal(content, document.getElementById('drawer'))
}

const Aside = styled.aside`
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
    height: 100vh;
    width: 22%;
    background: whitesmoke;
    box-shadow: 0 2px 8px rgba(0,0,0,0.26);

    @media only screen and (max-width: 992px) {
        & {
            display: block;
        }
}
`

export default SideBar
