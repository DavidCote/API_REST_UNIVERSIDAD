var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var univ = require('../models/universidad');
mongoose.set('useFindAndModify', false);
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


router.post('/m', function(req, res, next) { 
  univ.findOneAndUpdate(
  	{'siglas': req.body.siglas},{$set:req.body},
  	(err,datos)=>{
  		if(err) res.status(500).json({error:"Error"});
  		if(datos){
			//res.render('editar', {data:siglas});
  			res.status(200).json(datos);
  		}
  		});
});

router.post('/por', function(req, res, next) { 
	//console.log(req.body);
  univ.findOneAndUpdate(
  	{'nombreCompleto': req.body.nombreCompleto},
  	{'siglas':  req.body.siglas,
    'nivel.Licenciatura':  req.body.Licenciatura,
    'nivel.Maestria':  req.body.Maestria,
    'nivel.Doctorado':  req.body.Doctorado,
    'nivel.PosDoctorado':  req.body.PosDoctorado,
 	'rankingNacional':  req.body.rankingNacional ,
  	'numeroDeAlumnos':  req.body.numeroDeAlumnos,
    'conPosgrado.disponible':  req.body.disponible,
    'conPosgrado.cantidad':  req.body.cantidad,
  	'prestigio':  req.body.prestigio,
  	'imagen':  req.body.imagen},
  	(err,datos)=>{
  		if
  		(err) res.status(500).json({error:"Error"});	
  		if(datos){
			//res.render('editar', {data:siglas});
  			res.status(200).json(datos);
  		}
  		});
});
module.exports = router;