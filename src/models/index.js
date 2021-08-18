'use strict';

// const POSTGRES_URI = process.env.POSTGRES_URI || 'postgres://localhost/postgres';
require('dotenv').config();
const DATABASE_URL = process.env.POSTGRES_URI

const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food.model');

let sequelizeOptions = {
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        }
      }
};
let sequelize = new Sequelize(DATABASE_URL,sequelizeOptions);

module.exports = {
    db: sequelize,
    Food: food(sequelize, DataTypes),
}
