'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  class History extends Model {
    static associate(models) {}
  }
  
  History.init({
    patiendId: { 
        type: DataTypes.INTEGER 
    },
    doctorId: { 
        type: DataTypes.INTEGER
    }, 
    description: {
        type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'History',
    timestamps: true 
  });

  return History;
};
