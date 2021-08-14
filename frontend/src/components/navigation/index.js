import React from 'react';
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
    )
}