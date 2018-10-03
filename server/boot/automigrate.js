module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate(null, function(err) {
    if (err) throw err;

    app.models.Juego.create([{
      nombre: 'Carrera'
    }, {
      nombre: 'Busqueda'
    }, {
      nombre: 'Juego 3'
    }], function(err, Juegos) {
      if (err) throw err;

      console.log('Models created: \n', Juegos);
    });
  });
};

