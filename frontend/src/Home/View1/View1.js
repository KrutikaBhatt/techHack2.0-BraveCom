import React from 'react';
import './View1.css';
import HELP from '../../images/view1.jpg.png';


function Step1(props) {
    return (
        <div className = "step1">
            
            
            <img width={750} height={500} src = {HELP} alt = ""/>
            <div style ={{fontWeight: "bold", padding: 15, fontSize: 24}}>Welcome to the community</div>
            <div style={{fontSize:18,fontWeight: 400}}>Be a part of the community to Grow, Inspire and volunteer to change people's lives</div>
            <div className = "stepState">
                <div className = "blankCircle" style ={{backgroundColor: "#F58424"}}></div>
                <div className = "blankCircle"></div>
                <div className = "blankCircle"></div>
            </div>
            <div className = "continueBtn" onClick = {props.incrementCurView}>Continue</div>
            
        </div>
    );
}

export default Step1;