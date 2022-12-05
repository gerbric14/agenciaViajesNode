import express from "express"; //IMPORTAMOS EXPRESS PORQUE SOLO SE DEBE USAR UNO
import {
    paginaInicio, 
    paginaNosotros, 
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
} from '../controllers/paginasControllers.js';
import {
    guardarTestimonial
} from '../controllers/testimonialControllers.js';


const router = express.Router(); //UTILIZAMOS EL ROUTER

//ASIGNAMOS LAS RUTAS A ROUTER
//req lo que enviamos > res lo que express responde
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);


export default router;
