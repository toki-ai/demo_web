const { Sequelize } = require('sequelize');
export const sequelize = new Sequelize('health', 'postgres', '123456', {
host: 'localhost',
dialect: 'postgres',});

export const connectDB = () => {
    sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
    });
}

