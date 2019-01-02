const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//[inicio] Routes.
var hospitalizados = require('./routes/hospitalizados');
var roles = require('./routes/roles');
//[fin] Routes.

//[inicio] Uso de Routes.
app.use('/api/hospitalizados', hospitalizados);
app.use('/api/roles', roles);
//[fin] Uso de Routes.

app.listen(8080, () => console.log('Listening on port 8080!'));
