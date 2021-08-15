import React from 'react';
import './View3.css';
import Therapy from '../../images/Therapy.jpg';
import { Link } from 'react-router-dom';

function View3(props) {
    return (
        <div className = "step1">
            <img width={600} src = {Therapy} alt = ""/>
            <div style ={{fontWeight: "bold", padding: 15, fontSize: 24,marginTop:10}}>Fight against Violence and Abuse</div>
            <div>Need a person to talk? Form groups with people that faced the same issues and encourage others</div>
            <div className = "stepState">
                <div className = "blankCircle" style ={{backgroundColor: "#F58424"}}></div>
                <div className = "blankCircle" style ={{backgroundColor: "#F58424"}}></div>
                <div className = "blankCircle" style ={{backgroundColor: "#F58424"}}></div>
            </div>
            <div className = "continueBtn" onClick = {props.incrementCurView}>Begin!<Link to='/group'></Link></div>
        </div>
    );
}

export default View3;