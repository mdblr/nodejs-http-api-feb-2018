'use strict';

const express = require('express');
const router = express.Router();

const names = require('./names');

router.get('/', (req, res) => {
  res.json({hello: 'world'});
})

router.use('/names', names);

module.exports = router;
