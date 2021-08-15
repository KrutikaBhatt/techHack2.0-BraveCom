const mongoose = require('mongoose');
const moment = require('moment');
const BlogSchema = mongoose.Schema({
    user:{
        type:String,
        default: 'Anynomous',
        required: true
    },
    date :{
        type:Date,
        default:moment().format()
    },
    title :{
        type:String,
        required:true
    },
    message :{
        type:String,
    },
});

const Blog = mongoose.model('Blog',BlogSchema);
module.exports = Blog;

