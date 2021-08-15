const mongoose = require('mongoose');
const express = require('express');
const Blog = require('../models/blogs');

const router = express.Router();

const createBlog = async(req,res)=>{
    const post = req.body.post;
    console.log(post);
    const newPost = new Blog(post);
    try {
        await newPost.save();
        res.status(200).send("The post is added succesfully");
    } catch (error) {
        console.log(error);
        res.status(409).json({message:error.message});
    }
}

const getAll = async(req,res)=>{
    try {
        const allPost = await Blog.find();
        res.status(200).send(allPost);
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
}
module.exports = {
    createBlog,
    getAll,
}