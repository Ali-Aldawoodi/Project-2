// import models
const Tutors = require('./Tutors')
const Users = require('./Users');
const Reviews = require('./Reviews');

// Reviews belongsTo Users
Reviews.belongsTo(Users, {
  foreignKey: 'users_id',
});

Reviews.belongsTo(Tutors, {
  foreignKey: 'tutors_id'
})

// Reviews hasMany Users
Users.hasMany(Reviews, {
  foreignKey: 'users_id'
});

Tutors.hasMany(Reviews, {
  foreignKey: 'tutors_id'
});

module.exports = {
  Tutors,
  Users,
  Reviews,
};
