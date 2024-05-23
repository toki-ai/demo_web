'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  class Schedule extends Model {
    static associate(models) {}
  }
  
  Schedule.init({
    currentNumber: { 
        type: DataTypes.INTEGER 
    },
    maxNumber: { 
        type: DataTypes.INTEGER
    }, 
    date: {
        type: DataTypes.DATE
    },
    timeType: {
        type: DataTypes.STRING
    },
    doctorId: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Schedule',
    timestamps: true 
  });

  return Schedule;
};
