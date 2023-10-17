// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Tutors model (table) by extending off Sequelize's Model class
class Tutors extends Model { }

// set up fields and rules for Tutors model
Tutors.init(
    {
        // Define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tutors_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        // tutors_email: {
        //     type:DataTypes.STRING,
        //     unique: true,
        // },
        tutors_avgRating: {
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        // tutors_password: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     // add bitcryption here
        // }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'tutors',
    }
);

module.exports = Tutors;

