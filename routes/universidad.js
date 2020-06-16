var express = require('express');
const router = express.Router();

const moongose = require('mongoose');
const Universidad = require('../models/universidad');

   router.get('/mostrar', async (req, res)=> {
     const universidad= await Universidad.find();
     res.json(universidad);
   });

   router.post('/agregar_nuevo', async(req, res)=>{
     const {nombreCompleto, siglas, nivel, Licenciatura, Maestria, Doctorado, PosDoctorado,rankingNacional,numeroDeAlumnos,conPosgrado, disponible, cantidad, prestigio, imagen}=req.body;
     const newUniversidad= new Universidad({nombreCompleto, siglas, nivel, Licenciatura, Maestria, Doctorado, PosDoctorado,rankingNacional,numeroDeAlumnos,conPosgrado, disponible, cantidad, prestigio, imagen})
     await newUniversidad.save();
     res.json({message: 'Universidad guardada'});
   });

module.exports = router;
