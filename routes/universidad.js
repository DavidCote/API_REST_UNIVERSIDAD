const express = require('express');
const router = express.Router();
const moongose = require('mongoose');
const Universidad = require('../models/universidad');

router.get('/universidades', async (req, res)=> {
  const universidad= await Universidad.find();
  res.json(universidad);
});

router.get('/universidades/:id', async (req, res)=> {
  const universidad= await Universidad.find();
  res.json(universidad);
});

module.exports = router;
