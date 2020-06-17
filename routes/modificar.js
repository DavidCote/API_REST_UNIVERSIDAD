var express = require('express');
var router = express.Router();
var request = require('request');

var mongoose = require('mongoose');
var univ = require('../models/universidad');
mongoose.set('useFindAndModify', false);
/* GET home page. */
router.get('/', function(req, res, next) {
  univ.find({},(err,datos)=>{
  	if(err) res.status(500).json({error:"Error"});
  	if(datos){
		//res.render('modificar', {data:datos});
  		//res.status(200).json(datos);
          request.get(process.env.HOST,(err,response,body)=>{
              if(err) res.status(404).json({mensaje:"Error al consumir universidad"});
              else res.render('modificar',{'info':JSON.parse(body)});
          })
  	}
  });
});

router.post('/m', function(req, res, next) { //metodo que modifica
	//console.log(req.body);
  univ.findOneAndUpdate(
  	{'_id': req.body._id},
  	{'nombreCompleto': req.body.nombreCompleto,
    'siglas':  req.body.siglas,
    'nivel.Licenciatura':  Boolean(req.body.Licenciatura),
    'nivel.Maestria':  Boolean(req.body.Maestria),
    'nivel.Doctorado':  Boolean(req.body.Doctorado),
    'nivel.PosDoctorado':  Boolean(req.body.PosDoctorado),
 	'rankingNacional':  req.body.rankingNacional ,
  	'numeroDeAlumnos':  req.body.numeroDeAlumnos,
    'conPosgrado.disponible':  Boolean(req.body.disponible),
    'conPosgrado.cantidad':  req.body.cantidad,
  	'prestigio':  req.body.prestigio},
  	(err,datos)=>{
  		if
  		(err) res.status(500).json({error:"Error"});	
  		if(datos){
			//res.render('editar', {data:datos});
  		//res.status(200).json(datos);
        request.get(process.env.HOST,(err,response,body)=>{
          if(err) res.status(404).json({mensaje:"Error al consumir universidad"});
          else res.render('index',{'info':JSON.parse(body)});
        })
  		}
  		});
});
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