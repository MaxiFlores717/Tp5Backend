const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');
var app = express();
//middlewares
app.use(express.json()); //define variable para rutas
app.use(cors({ origin: 'http://localhost:4200' })); //aca va el frontend
//Cargamos el modulo de direccionamiento de rutas
app.use('/api/producto', require('./routes/producto.route.js')); //route llama a controller y este llama a model.
app.use('/api/transaccion', require('./routes/transaccion.route.js'));
app.use('/api/ticket', require('./routes/ticket.route.js'));
app.use('/api/espectador', require('./routes/espectador.route.js'));
app.use('/api/categoria', require('./routes/categoria.route.js'));


//app.use('/api/agente', require('./routes/agente.route.js'));
//app.use('/api/ticket', require('./routes/ticket.route.js'));
//app.use('/api/sector', require('./routes/sector.route'));
//setting
app.set('port', process.env.PORT || 3000);//define puerto
//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});
