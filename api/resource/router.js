const express = require('express');

const router = express.Router();

const {
  getResources,
  insertResource
} = require('./model');

router.get('/', (req, res, next) => {
  getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  insertResource(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(next);
});

module.exports = router;
