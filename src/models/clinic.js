'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  class Clinic extends Model {
    static associate(models) {}
  }
  
  Clinic.init({
    address: { 
        type: DataTypes.STRING 
    },
    description: { 
        type: DataTypes.TEXT
    }, 
    image: {
        type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Clinic',
    timestamps: true 
  });

  return Clinic;
};
