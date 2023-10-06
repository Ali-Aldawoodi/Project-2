// import models
const Users = require('./Users');
const Reviews = require('./Reviews');

// Users have many Reviews
Users.hasMany(Reviews, {
  foreignKey: 'reviews_id',
});

// Reviews belongsTo Users
Reviews.belongsTo(Users, {
  foreignKey: 'users_id'
});

module.exports = {
  Users,
  Reviews
};
