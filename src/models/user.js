'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  class User extends Model {
    static associate(models) {}
  }
  
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true 
  });

  return User;
};
