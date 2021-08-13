'use strict';

const express = require('express');

const router = express.Router();
const { Clothes } = require('../models/index');
const {clothesColection} = require ('../models/index')
// add routes
router.get('/clothes', getClothes);
router.get('/clothes/:id', getOneClothes);

router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);


async function getClothes(req, res) {

    let clothe = await clothesColection.read();
    res.status(200).json(clothe);
}

// async function getOneClothes(req, res) {
//     const id = parseInt(req.params.id); // req.params is an object 
//     let clothe = await Clothes.findOne({ where: {id: id} });
//     res.status(200).json(clothe);
// }

async function createClothes(req, res) {
    let newClothes = req.body;
    let clothe = await clothesColection.create(newClothes);
    res.status(200).json(clothe)
    
}

async function updateClothes(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
  
    let updatedClothe = await clothesColection.update(id,obj);
    res.status(200).json(updatedClothe);
}

async function deleteClothes(req,res) {
    let id = parseInt(req.params.id);
    let deletedClothe = await clothesColection.delete({where: {id: id}});
    res.status(204).json(deletedClothe);
}



module.exports = router;