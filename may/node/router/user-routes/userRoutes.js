const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send('<h1>From User</h1>');
});

router.post('/', (req, res, next) => {
  res.status(200).send('<h1>Post</h1>');
});

module.exports = router;
