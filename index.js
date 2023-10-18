import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const { log } = require("console");

// Se crea la app
const app = express()

// app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use(express.static('views'));



//Routing
app.use('/', usuarioRoutes)

// Se define un puerto
const port = 3000;
app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerdo ${port}`);

})

