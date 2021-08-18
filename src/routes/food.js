'use strict';

const express = require('express');
const router = express.Router();

const {
    createFood,
    getFood,
    getAllFood,
    updateFood,
    deleteFood,
} = require('../business/routes-implementations');

router.get('/food', getAllFood);
router.post('/food', createFood);
router.get('/food/:id', getFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

module.exports = router;