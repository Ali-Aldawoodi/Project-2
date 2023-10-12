const express = require('express');
const router = express.Router();
const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');
// const chatRoutes = require('./chatRoutes');

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
// router.use('/chat', chatRoutes)

module.exports = router;
