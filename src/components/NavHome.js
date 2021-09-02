import React, { Fragment, useEffect, useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components'
import Budget from './Budget';
import Details from './Details';
import Forms from './Forms';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Province from './Province';

function NavHome({history}) {
    const [showB, setShowB] = useState(true);
    const [showF, setShowF] = useState(false);
    const [showD, setShowD] = useState(false);
    const [showP, setShowP] = useState(false);
    const [path, setPath] = useState('budget');

    const style = () => {
        if("#budget" === history.location.hash) {
            return {
                borderBottom: "5px solid #3f51b5",
                position: "absolute",
                width: "25%",
                left: "0px",
                right: "795px",
                bottom: "0",
            }
        }
        else if("#forms" === history.location.hash){
            return {
                borderBottom: "5px solid #3f51b5",
                position: "absolute",
                left: "30%",
                width: "20%",
                right: "40%",
                bottom: "0",
            }
        }else if("#provinces" === history.location.hash){
            return {
                borderBottom: "5px solid #3f51b5",
                // width: "25%",
                position: "absolute",
                left: "550px",
                right: "260px",
                bottom: "0",
            }
        }else {
            return {
                borderBottom: "5px solid #3f51b5",
                // width: "25%",
                position: "absolute",
                left: "795px",
                right: "0px",
                bottom: "0",
            }
        }
    }
    
    const showBudget = () => {
        setPath('budget')
        setShowB(true)
        setShowF(false);
        setShowD(false);
        setShowP(false);
    }
    const showForm = () => {
        setPath("forms")
        setShowF(true);
        setShowB(false)
        setShowD(false);
        setShowP(false);
    }
    const showProv = () => {
        setPath("provinces")
        setShowP(true)
        setShowF(false);
        setShowB(false)
        setShowD(false);
    }
    const showDetails = () => {
        setPath("details")
        setShowD(true);
        setShowF(false);
        setShowB(false);
        setShowP(false);
    }
    return (
        <Fragment>
            <UnList id={path} >
                <Li>
                    <a href='#budget' className="active" onClick={showBudget} >
                        <i className="fas fa-dollar-sign icon__dollar"></i>
                        <span>Budget</span>
                    </a>
                </Li>
                <div style={style()} />
                <Li>
                    <a href='#forms'  onClick={showForm} >
                        <i className="fas fa-car"></i>
                        <span>Forms</span>
                    </a>
                </Li>
                <div style={style()} />
                <Li>
                    <a href="#provinces" onClick={showProv} >
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Provinces</span>                    
                    </a>
                </Li>
                <div style={style()} />
                <Li>
                    <a href="#details" onClick={showDetails} >
                        <ClearAllIcon fontSize="large" />
                        <span>Details</span>
                    </a>
                </Li>
                <div style={style()} />
            </UnList>
            {showB && (<Budget />)}
            {showF && (<Forms /> )}
            {showP && (<Province /> )}
            {showD && (<Details /> )}
        </Fragment>
    )
}

const UnList = styled.ul`
    display: flex;
    width: 70%;
    margin: 0 auto;
    border: 1px solid lightgray;
    padding: 20px 0;
    position: relative;

    
    @media only screen and (max-width: 540px) {
        & {
            display: flex;
            width: 90%;
            margin: 0 auto;
            border: 1px solid lightgray;
            padding: 20px 0;
        }
    }

    @media (min-width: 541px) and (max-width: 992px) {
        & {
            display: flex;
            width: 90%;
            margin: 0 auto;
            border: 1px solid lightgray;
            padding: 20px 0;
        }
    }
`


const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    &:hover{
        a {
            color: #3f51b5;
        }

        .icon__dollar {
            background-color: #3f51b5;
            color: white;
        }
        i {
            color: #3f51b5;
        }
    }
    
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: gray;
        font-size: 22px;

        @media (min-width: 541px) and (max-width: 992px) {
            & {
                margin-right: 0px;
            }
        }
    }

    &.active{
        a {
            color: #3f51b5;
        }

        .icon__dollar {
            color: white;
        }
        i {
            color: red;
        }
    }

    .icon__dollar {
        background-color: gray;
        padding-top: 5px;
        padding-left: 8px;
        padding-right: 8px;
        color: whitesmoke;
        border-radius: 50%;
        margin-right: 15px;
        font-size: 15px;
        font-weight: 600;
    }

    i {
        color: gray;
        padding: 6px 8px;
        margin-right: 15px;
        font-size: 20px;
        font-weight: 600;

        @media (min-width: 541px) and (max-width: 992px) {
        & {
            margin-right: -2px;
        }
    }
    }

    .MuiSvgIcon-root {
        color: gray;
        margin-right: 10px;
        margin-top: 5px;

        @media (min-width: 541px) and (max-width: 992px) {
        & {
            margin-right: -2px;
        }
    }
    }
    

    @media only screen and (max-width: 540px) {
        &{
            width: 20%;
        }
        
        span {
            display: none;
        }
    }
`

const Input = styled.input`
    /* width: 80%; */
    height: 25px;
`


export default withRouter(NavHome)
