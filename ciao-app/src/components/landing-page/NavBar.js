import React from "react"
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {
    return(
        <NavContainer className="navbar">
            <LogoDiv className="logo">
                <h1>LOGO</h1>
            </LogoDiv>
            <LinkDiv className="link">
                <Link to="/">Home</Link>
                <Link to="/features">Features</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </LinkDiv>
        </NavContainer>
    )
}

export default NavBar

// Styling
const NavContainer = styled.div`
    border-bottom: 1px dashed black;
    display: flex;
    justify-content: space-between;
    
`
const LogoDiv = styled.div`
    flex-direction: flex-start;
    max-width: 30%;
    margin:auto;

`
const LinkDiv = styled.div`
    text-align: center;
    margin:auto;
    width: 45%;
    flex-direction: flex-end;
    a{
        font-family: 'Baloo Da 2';
        padding: 10%;
    }
`