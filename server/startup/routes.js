const express = require('express');
const cors = require('cors');

module.exports = app => {
  // middlewares
  app.use(cors());
  app.use(express.json());

  // routes
  app.use('/api/users', require('../routes/users'));
  app.use('/api/auth', require('../routes/auth'));

  // error middlewae
  app.use(require('../middlewares/error'));
};
