function validar() {
    var nombre = /^[a-zA-ZÀ-ÿ\s]{5,40}$/;
    var email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    

    var resultado = true;

    var nombre_com = document.getElementById("nombreCompleto");
    var emailPersona = document.getElementById("correo");
    var testDate1 = document.getElementById("fecha1");
    var testDate2 = document.getElementById("fecha2");
    var tipo_habitacion = document.getElementById("habitacion");
    var cant_adultos = document.getElementById("adulto");
    var cant_niños = document.getElementById("niño");
    var Otros = document.getElementById("otro");


    limpiarMensajes();

    if (nombre_com .value === "") {
        resultado = false;
        mensaje("Este campo es requerido", nombre_com );
    } else if (!nombre.test(nombre_com .value)) {
        resultado = false;
        mensaje("Nombre no válido", nombre_com );
    }

    if (emailPersona.value === "") {
        resultado = false;
        mensaje("El campo email es requerido", emailPersona);
    } else if (!correo.test(emailPersona.value)) {
        resultado = false;
        mensaje("Email no válido", emailPersona);
    }

    if (testDate1.value === "") {
        resultado = false;
        mensaje("Este campo es requerido", testDate1);
    } 

    if (testDate2.value === "") {
        resultado = false;
        mensaje("Este campo es requerido", testDate2);
    } 


    if (tipo_habitacion.value === "") {
        resultado = false;
        mensaje("Por favor, escoja un tipo de tipo de habitacion", tipo_habitacion);
    }

    if (cant_adultos.value === "") {
        resultado = false;
        mensaje("Por favor, escoja la cantidad de adultos", cant_adultos);
    }

    if (cant_niños.value === "") {
        resultado = false;
        mensaje("Por favor, escoja la cantidad de niños", cant_niños);
    }
    
    if (Otros.value.length === 0) {
        resultado = false;
        mensaje("Este campo es requerido", Otros);
    }    

    return resultado;

}

function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("span");
    nodoMensaje.innerHTML = cadenaMensaje;
    nodoMensaje.style.color = "red";
    nodoMensaje.display = "block";
    nodoMensaje.setAttribute("class", "mensaje");

    nodoPadre.appendChild(nodoMensaje);

}
function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensaje");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }

}
