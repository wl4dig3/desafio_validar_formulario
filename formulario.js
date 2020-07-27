// Funcion Validar 

function validar() {
    
    let rut = document.getElementById('rut').value;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let correo = document.getElementById('correo').value;
    let select = document.getElementById('select').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;

    // expresion regular rut 
         expRut = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;
    // expresion regular nombre 
          expNombre = /^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/;
    // expresion regular apellido
        expApellido = /^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/;
    // expresion regular edad
         expEdad = /\d{2}/;
    // expresion regular correo
         expCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    // expresion regular fecha
         expFecha = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;


    if(rut.value === "" || 
    nombre.value === "" ||
    apellido.value === "" || 
    edad.value === "" ||
    correo.value === "" ||
    select.value === "" ||
    fecha.value === "" ||
    hora.value === "" ) {
        alert('Favor llenar todos los campos');
        return false;
    }
    // Condicionales 
    if (!expRut.test(rut)){
        alert('Ingrese rut válido');
        return false;
    }
    else if (nombre.length >10) {
        alert('Nombre excede de 10 caracteres');
        return false;
    }
    else if (!expNombre.test(nombre)){
        alert('Ingrese un nombre válido');
        return false;
    }
    else if (apellido.length >10){
        alert('Apellido excede de 10 caracteres');
        return false;
    }
    else if(!expApellido.test(apellido)){
        alert('Ingrese un apellido válido');
        return false;
    }
    else if(edad.length >3){
        alert('Imposible que tengas más de 100 años,\n bueno, casi imposible');
        return false;
    }
    // else if (isNaN(edad.value)){
    //     alert('Debe ser sólo números');
    //     return false;
    // }
    else if (!expEdad.test(edad)){
        alert('Edad no valida');
        return false;
    }
    else if(correo.length >20) {
        alert('Correo electronico muy largo');
        return false;
    }
    else if (!expCorreo.test(correo)){
        alert('Ingrese un formato de correo válido')
        return false
    }
    else if (!expFecha.test(fecha)){
        alert('Ingrese una fecha válida')
        return false
    }
    else {
        // alert('Gracias por completar todo los datos Sr(a) ');
        imprimir();
        return false;
    }
        
        


    // funcion para imprimir el texto 
    function imprimir(){
    let caja = document.createElement('div');
    let contenido = document.createTextNode(`Estimado(a) ${nombre} ${apellido} y su Rut: ${rut}, su hora para ${select} ha sido reservada para el día ${fecha} a las ${hora}. Además, se le envió un mensaje a su correo ${correo} con el detalle de su cita. Gracias por preferirnos`);
    caja.appendChild(contenido);
    caja.setAttribute('class', 'caja azul');
    let contenedor = document.getElementById('contenedor');
    contenedor.appendChild(caja);
    }

    
}
