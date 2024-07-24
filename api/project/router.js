const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json('GET at projects')
});

router.post('/', (req, res, next) => {
  res.json('POST at projects')
})

module.exports = router;