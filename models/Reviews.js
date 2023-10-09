// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Reviews model (table) by extending off Sequelize's Model class
class Reviews extends Model { }

// set up fields and rules for Reviews model
Reviews.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    users_id: { // user ID that the review is posted to
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    reviews_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poster_id: { // user ID that posted the review
      type: DataTypes.INTEGER,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'reviews',
  }
);

module.exports = Reviews;
