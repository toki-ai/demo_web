'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  class Allcode extends Model {
    static associate(models) {}
  }
  
  Allcode.init({
    key: { 
        type: DataTypes.STRING 
    },
    type: { 
        type: DataTypes.STRING
    }, 
    valueEn: {
        type: DataTypes.STRING
    },
    valueVi: {
        type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Allcode',
    timestamps: true 
  });

  return Allcode;
};
