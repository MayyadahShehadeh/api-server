'use strict';

const express = require('express');

const router = express.Router();
// const { Food } = require('../models/index');
const {foodCollection} = require('../models/index');
// add routes
router.get('/food', getFood);
// router.get('/food/:id', getOneFood);

router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);


async function getFood(req, res) {

    let food = await foodCollection.read();
    res.status(200).json(food);
}

// async function getOneFood(req, res) {
//     const id = parseInt(req.params.id); // req.params is an object 
//     let food = await Food.findOne({ where: {id: id} });
//     res.status(200).json(food);
// }

async function createFood(req, res) {
    let newFood = req.body;
    let food = await foodCollection.create(newFood);
    res.status(200).json(food)
    
}

async function updateFood(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    let updatedFood = await foodCollection.update(id,obj);
    
    res.status(200).json(updatedFood);
}

async function deleteFood(req,res) {
    let id = parseInt(req.params.id);
    let deletedFood = await foodCollection.delete(id);
    res.status(204).json(deletedFood);
}



module.exports = router;