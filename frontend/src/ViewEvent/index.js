import React, { useEffect, useState } from 'react';
import './viewEvent.css';
import ReactMapGL from 'react-map-gl';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarsIcon from '@material-ui/icons/Stars';
import DirectionMap from '../components/DirectionMap';

import UserProfile from '../images/avatar.jpg';
import { red } from '@material-ui/core/colors';

function ViewEvent() {
    const [viewport, setViewport] = useState(null);

    useEffect(() => {
  
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
        setViewport({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            zoom: 11
        });
        });
    }
    }, []);
  return (
    <div className = "thankyouVolunteerView">
        <div style={{fontSize:24}}><b>Fundraiser for Old Age home at Kalyan</b></div>
        <div className = "thankyouVolunteerViewBody">
            <div className = "thankyouVolunteerViewBodyLeft">
                <div style={{paddingBottom:15,fontSize:18}}><b>Know about the event</b></div>
                <div className = "whoYoureHelpingCard">
                    <div><img src = {UserProfile} width = {100} alt = ""/></div>
                    <div className="GeneralInformation">
                        <div style = {{fontWeight: 700, fontSize:18,paddingTop: 10, paddingBottom: 20,paddingLeft:140}}>Rajesh Sharma</div>
                        <div style = {{fontWeight: 500, fontSize:16, paddingBottom: 5,paddingLeft:100}}><LocationOnIcon/><b>108 A ,Kalyan station,Maharashtra</b></div>
                        <div style={{paddingLeft:100}}><PhoneIcon/> <b>9886132212</b></div>
                    </div>
                </div>
                <div style = {{fontWeight: "bold",fontSize:18, paddingTop: 35, paddingBottom: 8}}>Description</div>
                <div className = "whoYoureHelpingCard" style = {{flex: 1,paddingTop:30,fontSize:18}}>This fundraiser is organized for helping out Old Age home in our neighboorhood locality. You can volunteer or donate for this event. Really lokking forward for great people
                   <br/>
                   - Donate money<br />
                   - Visits will work too<br/>
                   - Buy  wollen cloths and embroidery<br/>
                    
                </div>
                <div style = {{paddingTop: 15, display: "flex", alignItems: "center"}}>Take part in this Event and be a Activist <b style={{color:'#E32636',paddingLeft:100}}><StarsIcon/>  150 registration</b></div>

                <div className="EventVolunteerButtons">
                    <div className="RegisterNow">Register</div>
                    <div className="Volunteer">Volunteer</div>
                </div>
            </div>
            <div className = "thankyouVolunteerViewBodyRight">
                <div className = "thankyouVolunteerViewBodyRightHeader">
                    <div><b>Location :</b></div>
                    <div>Kalyan station,Kalyan(w),Maharashtra</div>
                </div>
                
                <DirectionMap />
            </div>
        </div>
    </div>
  );
}

export default ViewEvent;