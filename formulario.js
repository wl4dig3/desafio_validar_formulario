// Funcion Validar 

function validar() {
    
    let rut = document.getElementById('Rut').value;
    let nombre = document.getElementById('Nombre').value;
    let apellido = document.getElementById('Apellido').value;
    let edad = document.getElementById('Edad').value;
    let correo = document.getElementById('Correo').value;
    let select = document.getElementById('Select').value;
    let Fecha=  new Date();
    Fecha.getDate() + "-"+ Fecha.getMonth()+ "-" +Fecha.getFullYear();
    let hora = document.getElementById('Hora').value;

    // expresion regular rut 
    const expRut = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;
    // expresion regular nombre 
    const  expNombre = /^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/;
    // expresion regular apellido
    const expApellido = /^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/;
    // expresion regular edad
    const expEdad = /^\d*$/;
    // expresion regular correo
    const expCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    // expresion regular fecha
    const expFecha = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;


    if(Rut.value === "" || 
    Nombre.value === "" ||
    Apellido.value === "" || 
    Edad.value === "" ||
    Correo.value === "" ||
    Select.value === "" ||
    Fecha.value === "" ||
    Hora.value === "" ) {
        alert('Favor llenar todos los campos');
        return false;
    }
    // Condicionales 
    else if (expRut.test(Rut)){
        alert('Ingrese rut válido');
        return false;
    }
    else if (Nombre.value.length >10) {
        alert('Nombre excede de 10 caracteres');
        return false;
    }
    else if (expNombre.test(Nombre)){
        alert('Ingrese un nombre válido');
        return false;
    }
    else if (Apellido.value.length >10){
        alert('Apellido excede de 10 caracteres');
        return false;
    }
    else if(expApellido.test(Apellido)){
        alert('Ingrese un apellido válido');
        return false;
    }
    else if(Edad.value.length >3){
        alert('Imposible que tengas más de 100 años,\n bueno, casi imposible');
        return false;
    }
    else if (isNaN(Edad.value)){
        alert('Debe ser sólo números');
        return false;
    }
    else if (expEdad.test(Edad)){
        alert('Ingrese sólo números');
        return false;
    }
    else if(Correo.value.length >20) {
        alert('Correo electronico muy largo');
        return false;
    }
    else if (expCorreo.test(Correo)){
        alert('Ingrese un formato de correo válido')
        return false
    }
    else {
        alert('Gracias por completar todo los datos Sr(a) ' + Nombre );
    }


}
    
// (!expresionApellido.test(apellido));