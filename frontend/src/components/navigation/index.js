import React from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import './styles/navbar.css';
import './styles/icofont.css';
import './styles/bootstrap.css';
import './styles/fontAwesome.css';
import '../../App';
import { useHistory } from "react-router-dom";
export default function Navbar(){
    const history = useHistory();
  
    function handleclick() {
      
      history.push("/");
    }
    function handleclick2() {
      
        history.push("/event");
      }
      function handleclick3() {
      
        history.push("/eventf");
      }
      function handleclick4() {
      
        history.push("/blog");
      }
      function handleclick5() {
      
        history.push("/group");
      }
      function handleclick6() {
      
        history.push("/survey");
      }
      function handleclick7() {
      
        history.push("/Join");
      }
      function handleclick8() {
      
        history.push("eventView");
      }
    return (
        

        <>
                
        <div className="navbar fixed-top">
        <div className="nav-inside scroll navigation">

       <a className="nav-link nav-link-ltr"  onClick={handleclick}>Home</a>
        <a className="nav-link nav-link-ltr" onClick={handleclick2}>See Events</a>
        <a className="nav-link nav-link-ltr" onClick={handleclick3}>Create Event</a>
        <a className="nav-link nav-link-ltr" onClick={handleclick4}>Write Blog</a>
        <a className="nav-link nav-link-ltr" onClick={handleclick5}>Communities</a>
        <a className="nav-link nav-link-ltr" onClick={handleclick6}>Ask Help</a>
        <a className="nav-link nav-link-ltr" onClick={handleclick7}>Get Connected</a>
        <a className="nav-link nav-link-ltr" onClick={handleclick8}>View Events</a>
        </div>

        </div>
        <br />
        <br/>
        <br/>

    </>
    )
}