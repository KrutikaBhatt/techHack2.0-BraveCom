const mongoose = require('mongoose');
const moment = require('moment');

const EventSchema = mongoose.Schema({
    event_name :{
        type:String,
        required :true,
    },
    event_description :{
        type: String,
        required :true,
    },
    date :{
        type:String,
        required:true,
    },
    time :{
        type: String,
        required :true,
    },
    Location :{
        type: String,
    },
    registered:{
        type:Integer,
        default: 0,
    },
});

const Event = mongoose.model('event',EventSchema);
module.exports = Event;