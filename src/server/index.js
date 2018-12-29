const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));

//[inicio] Routes.
var hospitalizados = require('./routes/hospitalizados.js');
//[fin] Routes.

//[inicio] Uso de Routes.
app.use('/hospitalizados', hospitalizados);
//[fin] Uso de Routes.


app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));


app.listen(8080, () => console.log('Listening on port 8080!'));
