'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  class User extends Model {
    static associate(models) {}
  }
  
  User.init({
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
    },
    address:{
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.BOOLEAN,
    },
    rodeid: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true 
  });

  return User;
};
