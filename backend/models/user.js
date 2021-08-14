const mongoose = require('mongoose');
const moment = require('moment');

const UserSchema = mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    created_at : {
        type:Date,
        default:moment().format()
    },
    password :{
        type:String,
        required:true,
    },
    location :{
        type:String,
        required:true,
    },
    longLat:{
        type:[String]
    },
    care_groupID:{
        type:String,
        required:false,
    }
});

const User = mongoose.model('UserSchema',UserSchema);
module.exports = User;