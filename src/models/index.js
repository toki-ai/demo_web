'use strict';
const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
let sequelize;
import { join } from 'path';

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  // .forEach(file => {
  //   const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
  //   db[model.name] = model;
  // });
.forEach(async (file) => {
  try {
    // const filePath = new URL(`file://${join(__dirname, file)}`);
    // const { default: modelInit } = await import(filePath);
    // const model = modelInit(sequelize, DataTypes);
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  } catch (error) {
    console.error(`Error importing model from file ${file}: ${error.message}`);
  }
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
