
function validar() {
    var nombre = /^[a-zA-ZÀ-ÿ\s]{5,40}$/;
    var card_number = /^[0-9]{16,16}$/g;
    /*var exp_fecha = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;*/
    var cvv = /^[0-9]{3,4}$/g;

    var resultado = true;

    var nombre_titular = document.getElementById("nombre");
    var tarjeta = document.getElementById("numero_tarjeta");
    var tipo_tarjeta = document.getElementById("tipo_tarjeta");
    var testDate = document.getElementById("exp_fecha");
    var cvv_numero = document.getElementById("cvv");


    limpiarMensajes();

    if (nombre_titular.value === "") {
        resultado = false;
        mensaje("Este campo es requerido", nombre_titular);
    } else if (!nombre.test(nombre_titular.value)) {
        resultado = false;
        mensaje("Nombre no válido", nombre_titular);
    }

    if (tarjeta.value === "") {
        resultado = false;
        mensaje("Este campo es requerido", tarjeta);
    } else if (!card_number.test(tarjeta.value)) {
        resultado = false;
        mensaje("Número de tarjeta no válido", tarjeta);
    }

    if (tipo_tarjeta.value === "") {
        resultado = false;
        mensaje("Por favor, escoja un tipo de tarjeta", tipo_tarjeta);
    }
    
    if (testDate.value === "") {
        resultado = false;
        mensaje("Este campo es requerido", testDate);
    } 

   

    if (cvv_numero.value === "") {
        resultado = false;
        mensaje("Este campo es requerido", cvv_numero);
    } else if (!cvv.test(cvv_numero.value)) {
        resultado = false;
        mensaje("CVV de tarjeta no válido", cvv_numero);
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

