const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json('GET at tasks');
});

router.post('/', (req, res, next) => {
  res.json('POST at tasks');
});

module.exports = router;
