const express = require('express');

const router = express.Router();

const { 
  getProjects,
  insertProject
} = require('./model');

router.get('/', (req, res, next) => {
  getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  insertProject(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(next);
});

module.exports = router;