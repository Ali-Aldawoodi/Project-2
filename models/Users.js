const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Users extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.users_password);
  }
}

Users.init(
  {
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
    // users_email: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   unique: true,
    // },
    users_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.users_password = await bcrypt.hash(newUserData.users_password, 10);
        // console.log(newUserData);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.users_password = await bcrypt.hash(updatedUserData.users_password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
  }
);

module.exports = Users;

