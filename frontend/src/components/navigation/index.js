import React from 'react';
<<<<<<< HEAD
import './styles/navbar.css';
import './styles/icofont.css';
import './styles/bootstrap.css';
import './styles/fontAwesome.css';
export default function Navbar(){
    return (
        <>
                
        <div className="navbar fixed-top">
        <div className="nav-inside scroll navigation">

            <a className="nav-link nav-link-ltr" href="#">Home</a>
            <a className="nav-link nav-link-ltr" href="#">About</a>
            <a className="nav-link nav-link-ltr" href="#">Contact</a>
            <a className="nav-link nav-link-ltr" href="#">Blog</a>
        </div>

        </div>
        <br />
        <br/>
        <br/>

    </>
=======
import logo from '../../images/logo.png'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './styles/navbar';

  import '../../../../frontend/src/index.css'
export default function Navbar(){
    return (
        <>
        <Nav>
            <NavLink to='/'>
            <img src={logo} className="logo" alt='logo' />
            </NavLink>
            <Bars />
            <NavMenu>
            <NavLink to='/about' activeStyle>
                About
            </NavLink>
            <NavLink to='/survey' activeStyle>
                Questionnaire
            </NavLink>
            <NavLink to='/blog' activeStyle>
               Blog
            </NavLink>
            <NavLink to='/contact-us' activeStyle>
                Contact Us
            </NavLink>
            <NavLink to='/sign-up' activeStyle>
                Sign Up
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
            <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
>>>>>>> eb7ad764a05320c811232c5b87cc2fdf80869a52
    )
}