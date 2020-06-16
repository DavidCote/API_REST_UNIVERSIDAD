var express = require('express');
var router = express.Router();

var moongose = require('mongoose');
const Universidad = require('../models/universidad');

router.get('/g',(req,res,next)=>{
  Universidad.find({},(err,datos)=>{
    if(err) res.status(500).json({error:"Error en la consulta"});
    if(datos) res.status(200).json(datos);
  });
});

router.post('/prueba/',(req,res,next)=>{
  var nuevo = Universidad({
    nombreCompleto:req.body.nombreCompleto,
    siglas:req.body.siglas,
    nivel: {
      Licenciatura: req.body.Licenciatura,
      Maestria: req.body.Maestria,
      Doctorado: req.body.Doctorado,
      PosDoctorado: req.body.PosDoctorado
    },
    rankingNacional:req.body.rankingNacional ,
    numeroDeAlumnos:req.body.numeroDeAlumnos,
    conPosgrado:req.body.conPosgrado,
    prestigio:req.body.prestigio,
    imagen:req.body.imagen
  });
  nuevo.save((err,datos)=>{
    if(err){
      res.status(404).json({mensaje:"Error al guardar"});
    }else {
      res.status(201).json(datos);
    }
  });
});

module.exports = router;
