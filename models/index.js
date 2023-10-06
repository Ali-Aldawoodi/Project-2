// import models
const Users = require('./Users');
const Reviews = require('./Reviews');

// Userss belongsTo Reviews
Reviews.belongsTo(Users, {
  foreignKey: 'reviews_id',
});

// Categories have many Users
Users.hasMany(Reviews, {
  foreignKey: 'users_id',
});

module.exports = {
  Users,
  Reviews
};
