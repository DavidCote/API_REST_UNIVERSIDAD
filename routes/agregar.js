var express = require('express');
const router = express.Router();
const Uni = require('../models/universidad');
const mongoose = require('mongoose');

router.get('/', async(req, res)=>{
  res.render('agregar', {mensaje:"holi"})
});

module.exports = router;
