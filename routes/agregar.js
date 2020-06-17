var express = require('express');
const router = express.Router();
const Universidad = require('../models/universidad');
const mongoose = require('mongoose');

router.get('/', async(req, res)=>{
  res.render('agregar',{mensaje:"placeholder"});
});

router.post('/agregar_nuevo', async(req, res)=>{
  const newUniversidad= new Universidad({
    nombreCompleto: req.body.nombreCompleto,
    siglas: req.body.siglas,
    nivel:{
      Licenciatura: req.body.Licenciatura,
      Maestria: req.body.Maestria,
      Doctorado: req.body.Doctorado,
      PosDoctorado: req.body.PosDoctorado,
    },
    rankingNacional: req.body.rankingNacional,
    numeroDeAlumnos: req.body.numeroDeAlumnos,
    conPosgrado:{
      disponible: req.body.disponible,
      cantidad:req.body.cantidad,
    },
    prestigio: req.body.prestigio,
    imagen: req.body.imagen
  })
  await newUniversidad.save((error, uni)=>{
    if(error){
      res.status(404).json({mensaje: "Fallo al guardar"});
    }else{
      res.status(201).json(uni);
    }
  });
});

module.exports = router;
