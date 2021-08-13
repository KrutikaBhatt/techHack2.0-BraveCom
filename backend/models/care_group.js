const mongoose = require('mongoose');
const moment = require('moment'); 

const Care_group = mongoose.Schema({
    title :{
        type:String,
    },
    descriptions :{
        type: String,
    },

});

const Groups = mongoose.model('group',Care_group);
module.exports = Groups;