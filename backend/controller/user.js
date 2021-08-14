const mongoose = require('mongoose');
const express = require('express');
const Event = require('../models/events');
const User = require('../models/user');

const addUser = async(req,res)=>{
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save()
        .then(data =>{
            console.log(data);
            res.status(200).json({
                message : "User added succesfully",
                id:data._id,
                locaton:data.location
            })
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message});
    }
}

const getProfile = async(req,res)=>{
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No post with this id - ${id}`);
    }
    const required_user = await User.findById(id);
    res.status(200).send(required_user);

}

function countYes(arr,n)
{
    let ans;
    let low = 0, high = n - 1;
    while (low <= high) { 
        let mid = Math.floor((low + high) / 2);
  
        if (arr[mid] < 1)
            high = mid - 1;
      
        else if (arr[mid] > 1)
            low = mid + 1;
        else

        {
            if (mid == n - 1 || arr[mid + 1] != 1)
                return mid + 1;
            else
                low = mid + 1;
        }
    }
}
const createGroups = async(req,res)=>{
    const id = req.body.id;
    const answer = req.body.answer;  

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No User available with that id');
    }

    const depression = answer.slice(0,4);
    depression.sort();
    depression.reverse();
    console.log(depression);
    let n = countYes(depression,depression.length);
    
    var groups ={
        depressed:0,
        mental:0,
        physical:0,
    };
    if(n >=2){
        groups.depressed =1;
    }

    var mental = answer.slice(4,7);
    mental.sort();
    mental.reverse();
    n = countYes(mental,mental.length);
    if(n>=1){
        groups.mental =1;
    }
    var physical = answer.slice(7);
    if(physical == 1){
        groups.physical =1;
    }

    //Check for multiple statments
    if(groups.depressed ==1 && groups.mental==1){
        groups.depressed =0;
    }
    if(groups.depressed ==1 && groups.physical==1){
        groups.depressed =0;
    }
    if(groups.mental==1 && groups.physical==1){
        groups.mental =0;
    }
    
    if(groups.depressed ==1){
        const newgroup = await User.findByIdAndUpdate(id,{care_groupID :"61179af84eaa62627a4dc267"},{new:true});
        return res.status(200).json({
            message :"You have been added to a group of people.Do connect.It will help",
            groupID : "61179af84eaa62627a4dc267"
        });
    }
    else if(groups.mental ==1){
        const newgroup = await User.findByIdAndUpdate(id,{care_groupID :"61179c144eaa62627a4dc268"},{new:true});
        return res.status(200).json({
            message :"You have been added to a group of people.Do connect.It will help",
            groupID : "61179c144eaa62627a4dc268"
        });
    }
    else{
        const newgroup = await User.findByIdAndUpdate(id,{care_groupID :"61179d114eaa62627a4dc269"},{new:true});
        return res.status(200).json({
            message :"You have been added to a group of people.Do connect.It will help",
            groupID : "61179d114eaa62627a4dc269"
        });
    }
}
const Register = async(req,res) =>{
    const event_id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(event_id)){
        return res.status(404).send(`No post with this id - ${event_id}`);
    }

    const required_post = await Event.findById(event_id);
    const updatePost = await Event.findByIdAndUpdate(event_id,{registered : required_post.registered+1},{new:true});

    res.status(200).json({
        message : "You regisered succesfully",
        updated : updatePost
    });
}

module.exports = {
    addUser,getProfile,createGroups,Register
}