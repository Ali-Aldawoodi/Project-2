// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Users model (table) by extending off Sequelize's Model class
class Users extends Model { }

// set up fields and rules for Users model
Users.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    users_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    users_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    users_password: {
      type: DataTypes.STRING,
      allowNull: false,
      // add bitcryption here
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
  }
);

module.exports = Users;

