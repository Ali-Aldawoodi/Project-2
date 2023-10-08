const router = require('express').Router();
const apiRoutes = require('./api');
// const chatRoutes = require('./api/chatRoutes');

router.use('/api', apiRoutes);
// router.use('/chat/ask', chatRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;