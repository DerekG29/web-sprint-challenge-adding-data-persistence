const express = require('express');

const router = express.Router();

const { 
  getTasks,
  insertTask
} = require('./model');

router.get('/', (req, res, next) => {
  getTasks()
  .then(projects => {
    res.json(projects);
  })
  .catch(next);
});

router.post('/', (req, res, next) => {
  insertTask(req.body)
  .then(task => {
    res.status(201).json(task);
  })
  .catch(next);
});

module.exports = router;
