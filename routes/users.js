// Enrutador
const express = require('express');
const router = express.Router();

// Servicios
const UsersService = require('../services/users');
const service = new UsersService();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  const users = service.get();
  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user);
});
module.exports = router;
