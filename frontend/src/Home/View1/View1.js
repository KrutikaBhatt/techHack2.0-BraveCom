import React from 'react';
import './View1.css';
import HELP from '../../images/view1.jpg';


function Step1(props) {
    return (
        <div className = "step1">
            <img width={250} src = {HELP} alt = ""/>
            <div style ={{fontWeight: "bold", padding: 15, fontSize: 20}}>Welcome to the community, {props.name}</div>
            <div><span style = {{color: "#F8B62C", fontWeight: "bold"}}>helppier</span>’s mission is to foster community starting with neighbours helping neighbours.</div>
            <div className = "stepState">
                <div className = "blankCircle"></div>
                <div className = "blankCircle"></div>
                <div className = "blankCircle"></div>
            </div>
            <div className = "continueBtn" onClick = {props.incrementCurView}>Continue</div>
        </div>
    );
}

export default Step1;