import express from "express";
import { inicio, formulario } from "../controller/usuarioController.js";


const router = express.Router();

router.get('/', inicio)
router.get('/formulario', formulario)




export default router