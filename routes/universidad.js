const express = require('express');
const router = express.Router();

const moongose = require('mongoose');
const Universidad = require('../models/universidad');

router.get('/mostrar', async (req, res)=> {
  const universidad= await Universidad.find();
  res.json(universidad);
});

router.post('/agregar_nuevo', async(req, res)=>{
  const {nombreCompleto, siglas, Licenciatura, Maestria, Doctorado, PosDoctorado,rankingNacional,numeroDeAlumnos, disponible, cantidad, prestigio, imagen}=req.body;
  const newUniversidad= new Universidad({nombreCompleto, siglas, Licenciatura, Maestria, Doctorado, PosDoctorado,rankingNacional,numeroDeAlumnos, disponible, cantidad, prestigio, imagen})
  await newUniversidad.save((error, uni)=>{
    if(error){
      res.status(404).json({mensaje: "Fallo al guardar"});
    }else{
      res.status(201).json(uni);
    }
  });
  /*const uni = new Universidad(req.body);
  await uni.save((error, uni)=>{
    if(error){
      res.status(404).json({mensaje: "Fallo al guardar"});
    }else{
      res.status(201).json(uni);
    }
  });*/


});

module.exports = router;
