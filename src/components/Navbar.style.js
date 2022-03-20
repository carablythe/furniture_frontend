import styled from "styled-components"
import {Link} from "react-router-dom"

export const NavbarContainer = styled.nav `
    width: 100%;
    background: whitesmoke;
    height: ${(props) => (props.extendNav ? "50vh" : "90px")};
    display: flex;
    flex-direction: column;

    @media (min-width: 700px) {
        height: 90px;
    }
`

export const LeftContainer = styled.div `
    flex: 30%;
    display: flex;
    justify-content: flex-start;
    padding-left: 40px;
`

export const RightContainer = styled.div `
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 3% 0 10%;
`

export const NavbarInnerContainer = styled.div `
    width: 100%;
    height: 90px;
    display: flex;
`

export const NavbarLinkContainer = styled.div `
    display: flex;
`

export const NavbarLink = styled(Link)`
    color: black;
    font-size: large;
    text-decoration: none;
    margin: 2%;
    font-family: 'Montserrat', serif;
    font-weight: 200;
    transition: all .3s ease;

    @media (max-width: 700px) {
        display:none;
    }
    &:hover{
        color:grey;
        text-decoration:overline;
        transform: translateY(-3px);
    }
`
export const NavbarLogo = styled.img `
    margin: 5px;
    width: 160px;
   height: auto;
`

export const NavbarHamburger = styled.button `
    width: 70px;
    height: 50px;
    background: none;
    color: black;
    font-size: 45px;
    cursor: pointer;
    border: none;

    @media (min-width: 700px) {
        display: none;
    }
`

export const NavbarExtendedContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    height: 50vh;

    @media (min-width: 700px) {
        display: none;
    }

`
export const NavbarLinkExtend = styled(Link)`
    color: black;
    font-size: x-large;
    text-decoration: none;
    margin: 2%;
    font-family: 'Montserrat', serif;

    &:hover{
        color:grey;
        text-decoration:overline;
        transform: translateY(-3px);
    }
`
