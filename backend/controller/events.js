const mongoose = require('mongoose');
const express = require('express');
const Event = require('../models/events');
const User = require('../models/user')

const router = express.Router();

const addEvent =async(req,res)=>{
    const event = req.body;
    const  newEvent = new Event(event);
    try {
        await newEvent.save();
        res.status(200).send("The Event is added succesfully");
    } catch (error) {
        console.log(error);
        res.status(409).json({message:error.message});
    }
};


function deg2rad(degree) {
    return degree * (Math.PI / 180)
}

// Function returns value in kilometer
function getDistance(lat1, long1, lat2, long2) {
    const theta = long1 - long2
    var distance =
        Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta))
    distance = Math.acos(distance)
    distance = (180 / Math.PI) * distance
    distance = distance * 111.189577 //KM
    return Math.round(distance) //Integer 10.55 = 11
}


const getClosestEvent = async(req,res)=>{
    var UserID = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(UserID)){
        return res.status(404).send(`No User with this id - ${UserID}`);
    }

    const user = await User.findById(UserID);
    var user_location = user.location;
    console.log(user);
    var longLat = user.longLat;
    
    const Events = await Event.find();
    var user_long = parseFloat(longLat[0]);
    var user_lat = parseFloat(longLat[1]);

    var Ranking =[];
    var events =[];
    for(var i=0;i<Events.length;i++){
        var event_long = parseFloat(Events[i].LongLat[0]);
        var event_lat = parseFloat(Events[i].LongLat[1]);
        console.log(Events[i]);
        Ranking.push( getDistance(user_lat, user_long, event_lat, event_long))
    }
    console.log(Ranking);
 
    for (var i = 0; i < Ranking.length; i++) {
        for (var j = 0; j < Ranking.length - i - 1; j++) {
            if (Ranking[j] >= Ranking[j + 1]) {
                var temp = Ranking[j]
                Ranking[j] = Ranking[j + 1]
                Ranking[j + 1] = temp
                temp = Events[j]
                Events[j] = Events[j + 1]
                Events[j + 1] = temp
            }
        }
    }
    res.status(200).json({
        ranking:Ranking,
        data : Events
    });

}

module.exports ={
    addEvent,
    getClosestEvent,
}