// import models
const Users = require('./Users');
const Reviews = require('./Reviews');

// Userss belongsTo Reviews
Users.belongsTo(Reviews, {
  foreignKey: 'reviews_id',
});

// Categories have many Userss
Reviews.hasMany(Users, {
  foreignKey: 'reviews_id',
});

module.exports = {
  Users,
  Reviews
};
