import React from 'react'
import styled from 'styled-components'
import {GiCandleFlame} from "react-icons/gi"

const Header = () => {
  return (
    <Container>
        <Logo>
            <span> <GiCandleFlame/></span>
            <h1>Portfolio</h1>
        </Logo>
        <Nav>
            <span> <a href="#"> Home</a></span>
            <span> <a href="#"> Projects</a></span>
            <span> <a href="#"> Skills</a></span>
            <span> <a href="#"> Education</a></span>
            <span> <a href="#"> Services</a></span>
        </Nav>
    </Container>
  )
}

export default Header

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 80%;
margin: 0 auto;
padding: 1.5rem 0;
`
const Logo = styled.div`
display:flex;
align-items:center;
gap: 0.5rem;
spam {
    font-size:1.8rem;
    color:#01be96;
}
h1 {
    font-weight: 600;
    font-size:1.2rem;

}

`
const Nav = styled.div`
span{
    margin-left:1rem;
    a {
        color:#fff;
        text-decoration: none;
        font-weight: 400;
    }
}
`
