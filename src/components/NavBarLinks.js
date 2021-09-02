import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NavBarLinks() {
    return (
        <Nav>
            <Top>
                <div>
                    <PlayArrowIcon className="play" />
                </div>
                <div>
                    <AccountCircleIcon className="identity" />
                </div>
                <DropLang>
                    <div className="fr">
                        <span>FR</span>
                    </div>
                    <div className="drop-lang">
                        <h4>العربية</h4>
                    </div>
                </DropLang>
            </Top>
            <Links>
                <Li>
                    <Link href='#' >Accueil</Link>
                </Li>
                <Li>
                    <Link href='#' >Nouvelles</Link>
                </Li>
                <Li>
                    <Link href='#' >Marque</Link>
                </Li>
                <Li>
                    <Link href='#' >Socièté</Link>
                </Li>
                <Li>
                    <Link href='#' >Auto-Entrepreneur</Link>
                </Li>
                <Li>
                    <Link href='#' >Conseils</Link>
                </Li>
                <Li>
                    <Link href='#' >Classements</Link>
                </Li>
                <Li>
                    <Link href='#' >Apropos</Link>
                </Li>
                <Li>
                    <Link href='#' >Contact</Link>
                </Li>
            </Links>
        </Nav>
    )
}

const Nav = styled.nav`
    background-color: lightgray;
    width: 100%;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;

    .play {
            color: white;
            margin-top: 13px;
            font-size: 30px;
            background-color: red;
            border-radius: 50%;
        }
    
    .identity {
        margin-top: 11px;
        font-size: 35px;
        color: gray;
        width: 100%;
        border: 2px solid lightgray;
        border-radius: 50%;
    }
`

const DropLang = styled.li`
    list-style-type: none;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: 15px;

    .fr span {
        background-color: blue;
        cursor: pointer;
        padding: 5px 18px;
        color: white;
        font-size: 12px;
    }

    
    
    .drop-lang h4{
        text-align: center;
        background: white;
        color: #3f51b5;
        padding: 30px 15.9px;
        font-size: 12px;
        font-weight: 600;
        position: absolute;
        top: -30px;
        right: 8%;
        display: none;
        cursor: pointer;
    }

    &:hover {
        .drop-lang h4{
            display: flex;
        }
    }
`

const Links = styled.nav`
    margin-top: -25px;
    overflow-y: scroll;
    height: 100vh;
`
const Li = styled.li`
    background-color: whitesmoke;
    list-style-type: none;
    padding: 5px 0;
    cursor: pointer;
    border-bottom: 1px solid lightgray;
    &:hover {
        background-color: lightgray;
    }
    a {
        padding-left: 20px;
        text-align: center;
        color: blue;

    }

`

export default NavBarLinks
