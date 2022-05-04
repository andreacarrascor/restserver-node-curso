require('dotenv').config();
const Server = require('./models/server');


const server = new Server();



// creamos una nueva instancia de nuestro servidor y para que se abra en el puerto llamamos al metodo listen()
server.listen();

