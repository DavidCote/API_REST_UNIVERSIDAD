var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var UniversidadesSchema= Schema({
  nombreCompleto: String,
  siglas: String,
  nivel: {
    Licenciatura: Boolean,
    Maestria: Boolean,
    Doctorado: Boolean,
    PosDoctorado: Boolean
  },
  rankingNacional: Number ,
  numeroDeAlumnos: Number,
  conPosgrado: Boolean,
  prestigio: Number,
  imagen: String
});

module.exports = mongoose.model('Universidad', universidadesSchema);
