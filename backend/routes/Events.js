const express = require('express');
const router = express.Router();

const {
    addEvent,
    getClosestEvent,
} = require('../controller/events');

router.post('/add',addEvent);
router.get('/ranking/:id',getClosestEvent);

module.exports = router;