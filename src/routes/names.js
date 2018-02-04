'use strict';

const express = require('express');
const router = express.Router();

const { getName, getNames } = require('../controllers/names');

router.get('/all', (req, res) => {
  const names = getNames();
  res.json(names);
});

router.get('/search', (req, res) => {
  const nameQuery = req.query.nameQuery;
  const results = getName(nameQuery);
  res.json(results);
});

module.exports = router;
