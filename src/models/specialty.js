'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  class Specialty extends Model {
    static associate(models) {}
  }
  
  Specialty.init({
    description: { 
        type: DataTypes.TEXT 
    },
    image: { 
        type: DataTypes.STRING
    }, 
  }, {
    sequelize,
    modelName: 'Specialty',
    timestamps: true 
  });

  return Specialty;
};
