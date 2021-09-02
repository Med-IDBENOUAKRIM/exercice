import React, { useState } from 'react'
import styled from 'styled-components';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import BackDrop from './BackDrop';
import SideBar from './SideBar';
import NavBarLinks from './NavBarLinks';

function NavBar() {
    const [show, setShow] = useState(false);
    return (
        <Nav>
            {
                show && <BackDrop onClick={() => setShow(!show)} />
            }

            {
                show && (
                    <SideBar onClick={() => setShow(!show)} >
                        <NavBarLinks />
                    </SideBar>
                )
            }
            
            <Container>
                <NavLeft>
                    <Li>
                        <a href="/">
                            <img src="http://tomobilat.fikralabs.com/images/navlogo.png" alt="logo" />
                        </a>
                    </Li>
                    <Li>
                        <a href="#"><PlayArrowIcon className="play" /></a>
                    </Li>
                    <Li>
                        <a href="#"><AccountCircleIcon className="identity"  /></a>
                    </Li>
                </NavLeft>

                <NavRight  >
                        <div className={!show ? "nav__links links" : "hide__links"}>
                            <Li>
                                <Link href='#' >Accueil</Link>
                            </Li>
                            <Li>
                                <Link href='#' >Nouvelles</Link>
                            </Li>
                            <Li>
                                <Link href='#' >Classements</Link>
                            </Li>
                        </div>
                        <Drodown>
                            <div className={!show ? "nav__links nav__tom" : "hide__links"} >
                                <Link href='#' >Tombilat</Link>
                            </div>
                            <div className={!show ? "nav__links drop-wrp" : "hide__links"} >
                                <LinkDropdow href="/Marque">Marque</LinkDropdow>
                                <LinkDropdow href="/Société">Société</LinkDropdow>
                                <LinkDropdow href="/Auto_Entrep">Auto_Entrep</LinkDropdow>
                                <LinkDropdow href="/Conseils">Conseils</LinkDropdow>
                                <LinkDropdow href="/Apropos">Apropos</LinkDropdow>
                                <LinkDropdow href="/Contact">Contact</LinkDropdow>
                            </div>
                        </Drodown>

                        <DropLang  >
                                <div className="fr">
                                    <span>Fr</span>
                                </div>
                                <div className="drop-lang">
                                    <h4>العربية</h4>
                                </div>
                        </DropLang>
                </NavRight>
                
            <div className={!show ? "menu__icon" : "nav__mobile"} >
                <MenuIcon fontSize="large"  onClick={() => setShow(!show)} />
            </div>
            </Container>
        </Nav>
    )
}

const Nav = styled.nav`
    background-color: blue;
    
    
`

const Container = styled.div`
    width: 70%;
    max-width: 1250px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    /* position: relative; */
    .menu__icon {
        position: absolute;
        right: 0.75%;
        top: 3%;
        width: 4rem;
        cursor: pointer;
        display: none;
        @media only screen and (max-width: 992px) {
            & {
                display: block;
            }
        }
    }

    .nav__mobile {
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 4rem;
        cursor: pointer;
        display: none;
        outline: none;
    }
    
`

const NavLeft = styled.ul`
    list-style-type: none;

    a {
        margin: 0;
        padding: 0 5px;
    }
`

const NavRight = styled.div`
    display: flex;
    list-style-type: none;
    align-items: center;

    .show__links {
        display: block;
    }

    .hide__links {
        display: none;
    }

    
    .links {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        a {
            margin-bottom: 2rem;
            margin-right: 15px;
            margin-left: 15px;
        }
    }

    @media only screen and (max-width: 992px) {
            & {
                display: none;
            }
        }
`

const Li = styled.li`
    height: 64px;
    margin-top: 5px;
    
    img {
        width: 150px;
    }

    .play {
        color: white;
        margin-top: 13px;
        font-size: 30px;
        background-color: red;
        border-radius: 50%;

        @media only screen and (max-width: 992px) {
            & {
                display: none;
            }
        }
    }
    
    .identity {
        margin-top: 11px;
        font-size: 35px;

        @media only screen and (max-width: 992px) {
            & {
                display: none;
            }
        }
    }

    
`

const Drodown = styled.li`
    position: relative;
    list-style-type: none;
    margin-right: 3rem;
    margin-left: 1rem;
    .drop-wrp {
        display: none;
        transition: white 0.3s ease-in;
        height: 550px;
        flex-direction: column;
        position: absolute;
        top: -3px;
        left: -15%;
        overflow-y: scroll;
        ::-webkit-scrollbar {
             display: none;
        }
        
    }

    .nav__tom {
        color: whitesmoke;
        text-align: center;
        cursor: pointer;
        width: 115px;
        @media only screen and (max-width: 992px) {
            & {
                display: none;
            }
        }
    }
    
    .nav__tom {
        a {
            padding: 25px 15px 8px 0;
        }
    }

    &:hover {
        .drop-wrp {
            display: flex;
        }
    }
    
`

const LinkDropdow = styled.a`
    text-decoration: none;
    text-align: center;
    background: white;
    color: #3f51b5;
    padding: 3px 8px;
    width: 110px;
    background-color: lightgray;
    font-weight: 400;
    &:hover{
        background-color: whitesmoke;
        padding: 5px 7.5px;
        margin: 0 auto;
        color: #3f51b5;
        font-weight: 600;
        width: 109px;
  }
    
`



const DropLang = styled.li`
    list-style-type: none;
    /* position: relative; */
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: left;

    @media only screen and (max-width: 992px) {
        & {
            display: none;
        }
    }

    background-color: whitesmoke;
    .fr span {
        color: blue;
        margin-left: 5px;
        cursor: pointer;
        padding: 5px 7px;

        
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
        right: 13%;
        display: none;
        cursor: pointer;
    }

    &:hover {
        .drop-lang h4{
            display: flex;
        }
    }

`


export default NavBar
