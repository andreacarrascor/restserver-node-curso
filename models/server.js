const express = require('express')
const cors = require('cors')


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';

        // Middlewares: funciones que se van a ejecutar siempre que levantemos nuestro servidor
        this.middlewares();
        // Rutas de la app
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use(cors())

        // Lectura y parseo del body
        this.app.use(express.json());
        
        // Directorio público
        // este método se servirá en el path de las rutas
        this.app.use(express.static('public'));
    }

    routes() {

        this.app.use(this.usuariosRoutePath, require('../routes/usuarios'))
    }

    listen() {       
        this.app.listen(this.port)
    }
}










module.exports = Server;