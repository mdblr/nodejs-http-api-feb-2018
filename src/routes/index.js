'use strict';

const express = require('express');
const router = express.Router();

const names = require('./names');

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'src/public' });
})

router.use('/names', names);

module.exports = router;
