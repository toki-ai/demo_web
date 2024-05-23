'use strict';
const path = require('path'); 

const { sequelize } = require('../models/booking');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statusID: { 
        type: Sequelize.STRING 
    },
    doctorID: { 
        type: Sequelize.INTEGER
    }, 
    patientId: {
        type: Sequelize.INTEGER
    },
    date: {
        type: Sequelize.DATE
    },
    timeType: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Bookings');
  }
};


