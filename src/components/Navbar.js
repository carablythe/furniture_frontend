import {useState} from 'react'
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
    NavbarLink,
    NavbarLogo,
    NavbarHamburger,
    NavbarLinkExtend
} from './Navbar.style.js'
import Logo from '../images/Cozy.png'
import {useDispatch, useSelector} from 'react-redux'

const Navbar = () => {
    const [extendNav, setExtendNav] = useState(false)


    return (
        <>
            <NavbarContainer extendNav={extendNav}>
                <NavbarInnerContainer>
                    <LeftContainer>
                        <NavbarLinkContainer>
                            <NavbarLogo src={Logo}></NavbarLogo>
                        </NavbarLinkContainer>
                    </LeftContainer>
                    <RightContainer>
                        <NavbarLink to="/">Home</NavbarLink>
                        <NavbarLink to="/">About</NavbarLink>
                        <NavbarLink to="/products">Products</NavbarLink>
                        <NavbarLink to="/">Contact</NavbarLink>
                        <NavbarLink to="/order/"><ion-icon name="cart-outline"></ion-icon></NavbarLink>
                        <NavbarHamburger onClick={() => {setExtendNav((curr) => !curr)}}> {extendNav ? <> &#10005; </> : <> &#8801; </>} </NavbarHamburger>
                    </RightContainer>
                </NavbarInnerContainer>
                {extendNav ?
                <NavbarExtendedContainer>
                        <NavbarLinkExtend to="/">Home</NavbarLinkExtend>
                        <NavbarLinkExtend to="/">About</NavbarLinkExtend>
                        <NavbarLinkExtend to="/products">Products</NavbarLinkExtend>
                        <NavbarLinkExtend to="/">Contact</NavbarLinkExtend>
                        <NavbarLinkExtend to="/order/"><ion-icon name="cart-outline"></ion-icon></NavbarLinkExtend>
                </NavbarExtendedContainer> : ''
                }
            </NavbarContainer>

        </>
    )
}

export default Navbar
