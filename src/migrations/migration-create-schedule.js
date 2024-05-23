'use strict';
const path = require('path'); 

const { sequelize } = require('../models/schedule');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedule', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      currentNumber: { 
        type: Sequelize.INTEGER 
      },
      maxNumber: { 
          type: Sequelize.INTEGER
      }, 
      date: {
          type: Sequelize.DATE
      },
      timeType: {
          type: Sequelize.STRING
      },
      doctorId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Schedule');
  }
};


