var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var universidadesSchema= Schema({
  nombreCompleto: String,
  siglas: String,
  nivel: String,
  rankingNacional: Number ,
  numeroDeAlumnos: Number,
  conPosgrado: Boolean,
  prestigio: String  //esta wea no me queda claro como se mide el nivel, asi que lo pongo String xd
});

module.exports = mongoose.model('Universidades', universidadesSchema);
