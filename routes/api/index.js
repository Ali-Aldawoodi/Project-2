const express = require('express');
const router = express.Router();
const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
