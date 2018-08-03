const bodyParser    = require('body-parser');
const cors          = require('cors');
const errorHandler  = require('./app/errorHandler');
const express       = require('express');
const http          = require('http');
const morgan        = require('morgan');
const routes        = require('./app/routes');

const app = express();
const env = require('dotenv').config();
console.log(env)

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(routes);
app.use(errorHandler);

const server = http.createServer(app);
server.listen(process.env.PORT || 3000);
server.on('error', (error) => console.log(error));
server.on('listening', () => console.log('Listening on port ' + server.address().port));

module.exports = server;
