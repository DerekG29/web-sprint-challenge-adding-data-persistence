const express = require('express');
const server = express();

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.get('*', (req, res, next) => { // eslint-disable-line
  res.status(400).json({ message: 'Nothing to see here...' });
})

server.use((error, req, res, next) => { // eslint-disable-line
  res.status(500).json({ message: error.message });
})

module.exports = server;
