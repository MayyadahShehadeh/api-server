'use strict';

// connects to our database depending on the URI set as an environment variable, 
const POSTGRES_URI = "postgres://localhost:5432/mayadahDB";
const { Sequelize, DataTypes } = require('sequelize');
const Collection = require ('./collection-class')
// We can add Configuration based on the environment ... Where is our code running in "development" and "test" vs "deployed"?
let sequelizeOptions = {};
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

// our schema definitions
const food = require('./food.model');
const clothes = require('./clothes.model');

const foodModel = food(sequelize, DataTypes);
const clothesModel = clothes(sequelize, DataTypes);


//export Collections 
const foodCollection = new Collection(foodModel);
const clothesColection = new Collection(clothesModel);

module.exports = {
  db: sequelize,
  foodCollection:foodCollection,
  clothesColection:clothesColection
};