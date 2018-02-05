'use strict';

const express = require('express');
const router = express.Router();

const { searchNames, searchNamess } = require('../controllers/names');

router.get('/all', (req, res) => {
  const names = searchNamess();
  res.json(names);
});

router.get('/search', (req, res) => {
  const nameQuery = req.query.nameQuery;
  const results = searchNames(nameQuery);
  res.json({ names: results });
});

module.exports = router;
