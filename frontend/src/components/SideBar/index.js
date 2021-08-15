import React from 'react';
import './styles/sidebar.css';
import './styles/icofont.css';
import './styles/bootstrap.css';
import './styles/fontAwesome.css';
export default function SideBar(){
    return (
        <> 
         
        <nav id="sidebar" className="">

            <div className="p-4 pt-5">

                <div className="custom-menu">
                    <button type="button" id="sidebarCollapse2" className="btn btn-primary sidebar-btn" >
                        <i className="fa fa-bars"></i>
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>


                <h1><a href="index.html" className="logo ">ShareCare</a></h1>
                <ul className="list-unstyled components mb-5">
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                            className="dropdown-toggle">Home</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Home 1</a>
                            </li>
                            <li>
                                <a href="#">Home 2</a>
                            </li>
                            <li>
                                <a href="#">Home 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                            className="dropdown-toggle">Pages</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">Page 1</a>
                            </li>
                            <li>
                                <a href="#">Page 2</a>
                            </li>
                            <li>
                                <a href="#">Page 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>

            </div>
        </nav>

    </>
    )
}