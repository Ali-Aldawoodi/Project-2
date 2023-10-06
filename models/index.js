// import models
const Users = require('./Users');
const Reviews = require('./Reviews');

// Reviews belongsTo Users
Reviews.belongsTo(Users, {
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
