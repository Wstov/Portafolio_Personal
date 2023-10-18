import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const inicio = (req, res) => {
//     res.render('auth/inicio',{
//         autenticado:true
//     })
// }

const inicio = (req, res) => {
    // Ruta al archivo inicio.html
    const rutaInicio = path.join(__dirname, '..', 'views', 'index.html');
    res.sendFile(rutaInicio);
}

// const formulario = (req, res) => {
//     res.render('auth/formulario',{
//         autenticado:true
//     })
// }

const formulario = (req, res) => {
    // Ruta al archivo formulario.html
    const rutaFormulario = path.join(__dirname, '..', 'views', 'form.html');
    res.sendFile(rutaFormulario);
}

export{
    inicio,
    formulario
}