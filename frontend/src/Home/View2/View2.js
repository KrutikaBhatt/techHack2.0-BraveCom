import React from 'react';
import './View2.css';
import volunteer from '../../images/Volunteer.jpg'

function View2(props) {
    return (
        <div className = "step1">
            <img width={600} height={500} src = {volunteer} alt = "" style={{paddingTop:30}}/>
            <div style ={{fontWeight: "bold", padding: 15, fontSize: 24,marginTop:20}}>Volunteer to participate and conduct events</div>
            <div style ={{fontSize:18,fontWeight: 400, textAlign: "center"}}>Volunteer to help with fundraisers, donations <br/> and cleaning up in the neighboorhood itself!</div>
            <div className = "stepState">
                <div className = "blankCircle" style ={{backgroundColor: "#F58424"}}></div>
                <div className = "blankCircle" style ={{backgroundColor: "#F58424"}}></div>
                <div className = "blankCircle"></div>
            </div>
            <div className = "continueBtn" onClick = {props.incrementCurView}>Continue</div>
        </div>
    );
}

export default View2;