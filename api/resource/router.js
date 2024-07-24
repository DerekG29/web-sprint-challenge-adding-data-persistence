const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json('GET at resources')
});

router.post('/', (req, res, next) => {
  res.json('POST at resources')
});

module.exports = router;
