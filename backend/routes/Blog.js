const express = require('express');
const router = express.Router();

const {
    getAll,
    createBlog,
} = require('../controller/blogs');


router.post('/add',createBlog);
router.get('/getAll',getAll);

module.exports = router;