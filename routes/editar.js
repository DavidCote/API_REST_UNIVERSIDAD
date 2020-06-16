var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var univ = require('../models/universidad');

/* GET home page. */
router.get('/', function(req, res, next) {
  univ.find({},(err,datos)=>{
  	if(err) res.status(500).json({error:"Error"});
  	if(datos){
		res.render('editar', {data:datos});
  		//res.status(200).json(datos);
  	}
  });
});

function getJson(){

}

router.patch('/:siglas', function(req, res, next) { 
  univ.findOneAndUpdate(
  	{'siglas': req.params.siglas},{$set:req.body},
  	(err,datos)=>{
  		if(err) res.status(500).json({error:"Error"});
  		if(datos){
			//res.render('editar', {data:siglas});
  			res.status(200).json(datos);
  		}
  		});
});
module.exports = router;