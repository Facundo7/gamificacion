'use strict';

module.exports = function(Juego) {
    /**
     * Devuelve el nombre de un Juego enviado como parámetro
     * @param {Function(Error, string)} callback
     */

    Juego.prototype.getNombre = function(callback) {
      var nombre = this.nombre;
      // TODO
      callback(null, nombre);
    };



  Juego.beforeRemote('create', function(context, user, next) {
    
    context.args.data.creador = context.req.accessToken.userId;
    next();
  });




};
