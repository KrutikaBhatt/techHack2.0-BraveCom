const express = require('express');
const router = express.Router();

const {
    addUser,getProfile,createGroups,Register
} = require('../controller/user');

router.post('/add',addUser);
router.get('/profile/:id',getProfile);
router.post('/groups',createGroups);
router.post('/register/:id',Register);

module.exports = router;