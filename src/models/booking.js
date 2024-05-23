'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  class Booking extends Model {
    static associate(models) {}
  }
  
  Booking.init({
    statusID: { 
        type: DataTypes.STRING 
    },
    doctorID: { 
        type: DataTypes.INTEGER
    }, 
    patientId: {
        type: DataTypes.INTEGER
    },
    date: {
        type: DataTypes.DATE
    },
    timeType: {
        type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Booking',
    timestamps: true 
  });

  return Booking;
};
