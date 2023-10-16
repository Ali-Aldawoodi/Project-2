// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Reviews model (table) by extending off Sequelize's Model class
class Reviews extends Model { }

// set up fields and rules for Reviews model
Reviews.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    tutors_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tutors',
        key: 'id',
      },
    },
    tutors_rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1, // Minimum rating value
        max: 5, // Maximum rating value
      },
    },
    reviews_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poster_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'reviews',
  }
);

module.exports = Reviews;
