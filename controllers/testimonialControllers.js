import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async(req, res) => {

    //VALIDAR..
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim()=== ''){
        errores.push({mensaje: 'El nombre esta vacio'});
    }

    if(correo.trim()=== ''){
        errores.push({mensaje: 'El correo esta vacio'});
    }

    if(mensaje.trim()=== ''){
        errores.push({mensaje: 'El mensaje esta vacio'});
    }

    if(errores.length > 0){

        //CONSULTAR TESTIMONIALES EXISTENTES 
        const testimoniales = await Testimonial.findAll();

        //MOSTRAR LA VISTA CON ERRORES
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else {
        //ALMACENARLO EN LA BD
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');

        } catch (error) {
            console.log(error);
        }
    }

}

export {
    guardarTestimonial
} 