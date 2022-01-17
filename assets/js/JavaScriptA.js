//DOM
//Slider de Imagenes Principales
function agrandarImagen1(){
    document.getElementById("imagen1").style.width="33%";
    document.getElementById("imagen1").style.height="320px";
    document.getElementById("imagen1").style.marginLeft = "1%";
    document.getElementById("imagen2").style.marginLeft = "1%";
}

function normalImagen1() {
    document.getElementById("imagen1").style.width="30%";
    document.getElementById("imagen1").style.height="300px";
    document.getElementById("imagen1").style.marginLeft = "2%";
    document.getElementById("imagen2").style.marginLeft = "2%";
}

function agrandarImagen2(){
    document.getElementById("imagen2").style.width="33%";
    document.getElementById("imagen2").style.height="320px";
    document.getElementById("imagen2").style.marginLeft = "1%";
    document.getElementById("imagen3").style.marginLeft = "1%";
}

function normalImagen2() {
    document.getElementById("imagen2").style.width="30%";
    document.getElementById("imagen2").style.height="300px";
    document.getElementById("imagen2").style.marginLeft = "2%";
    document.getElementById("imagen3").style.marginLeft = "2%";
}

function agrandarImagen3(){
    document.getElementById("imagen3").style.width="33%";
    document.getElementById("imagen3").style.height="320px";
    document.getElementById("imagen3").style.marginLeft = "1%";
}

function normalImagen3() {
    document.getElementById("imagen3").style.width="30%";
    document.getElementById("imagen3").style.height="300px";
    document.getElementById("imagen3").style.marginLeft = "2%";
}

function textoCambiado() {
    var texto = document.getElementsByClassName("centro");
    texto[0].innerHTML = "Estimado Cliente disfrute de nuestros atractivos paquetes promocionales.<br> Nunca ha habido un mejor momento "+
    "para disfrutar de nuestro grandioso Lux Hotel.";
}

function textoNormal() {
    var texto = document.getElementsByClassName("centro");
    texto[0].innerHTML = " Guayaquil, Ecuador es un gran destino para vacacionar. <br> Lux Hotel es la mejor elección con grandes paquetes y promociones para mejorar su experiencia.";
}
//DOM
//Efecto de fade up para las imagenes secundarias
window.addEventListener('scroll', function () {

    var imagen = document.querySelectorAll('.fade_up');
    for (var i = 0; i < imagen.length; i++) {
        var altura = window.innerHeight / 1.3;
        var distancia = imagen[i].getBoundingClientRect().top;
        imagen[i].classList.add('transform_up')
        if (distancia <= altura) {
            imagen[i].classList.add('show_img');
        }
        else {
            imagen[i].classList.remove('show_img');
        }
    }
})

//DOM
//Botón para volver hacia arriba
const botonTop = document.querySelector(".boton-top");

botonTop.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
    if(window.scrollY < 500){
        botonTop.style.right = -100 + "px";
    }else{
        botonTop.style.right = 5 + "px";
    }
});

//DOM
//Acción del Botón Reservar fomulario
function validarReserva(){
    resultado = true;
    var txtNombres = document.getElementById("nombres");
    var txtApellidos = document.getElementById("apellidos");
    var txtTelefono = document.getElementById("telefono");
    var txtemail = document.getElementById("correo");
    var txtFecha = document.getElementById("fecha");
    var txtHora = document.getElementById("hora");

    limpiarMensajes();
    var valNombre = nombres(txtNombres);
    var valApellido = nombres(txtApellidos);
    var valTelefono = telefono(txtTelefono);
    var valCorreo = email(txtemail);
    var valFecha = fecha(txtFecha);
    var valHora = hora(txtHora);

    if(valNombre === false || valApellido === false || valCorreo === false || valTelefono === false ||
        valFecha === false || valHora === false){
        resultado = false;
    }

    if(resultado===true){
        resultado = enviar();
        if(resultado===true){
            alert("Su reservación ha sido enviada con éxito");
        }
    }

    return resultado;
}

function nombres(txtVariable){
    var letra = /^[a-z ,.'-]+$/i;// letras y espacio ///^[A-Z]+$/i;// solo letras
    if (txtVariable.value === '') {
        mensaje("『 Este campo es requerido 』", txtVariable);
        return false;
    } else if (!letra.test(txtVariable.value)) {
        mensaje("『 Este campo solo debe contener letras 』", txtVariable);
        return false;
    } else if (txtVariable.value.length > 20) {
        mensaje("『 Este campo debe tener maximo 20 caracteres 』", txtVariable);
        return false;
    }
}

function email(txtemail) {
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (txtemail.value === "") {
        mensaje("『 Email es requerido 』", txtemail);
        return false;
    } else if (!correo.test(txtemail.value)) {
        mensaje("『 Email no es correcto 』", txtemail);
        return false;
    }
}

function telefono(txtTelefono) {
    var telefonoreg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros
    if (txtTelefono.value === "") {
        mensaje("『 Teléfono es requerido 』", txtTelefono);
        return false;
    } else if (!telefonoreg.test(txtTelefono.value)) {
        mensaje("『 Teléfono debe ser de 10 digitos 』", txtTelefono);
        return false;
    }
}

function fecha(txtFecha) {
    var dato = txtFecha.value;
    var fechaN = new Date(dato);
    var anioN = fechaN.getFullYear();
    
    var fechaActual = new Date(); //fecha actual
    var anioA = fechaActual.getFullYear();

    if(dato === ""){
        mensaje("『 Fecha es requerida 』",txtFecha);
        return false;
    }else if(fechaN < fechaActual){
        mensaje("『 Fecha debe ser superior a la actual 』",txtFecha);
        return false;
    }else if(anioN > (anioA+2)){
        mensaje("『 No puede asignar una reserva mayor a 2 años 』",txtFecha);
        return false;
    }
}

function hora(txtHora) {
    var dato = txtHora.value;
    var separador = dato.split(":");
    horaN = parseInt(separador[0]);
    minutoN = parseInt(separador[1]);

    if(dato === ""){
        mensaje("『 Hora es requerida 』",txtHora);
        return false;
    }
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

function enviar(){
    var mensaje;
    var opciones = confirm("Está seguro de realizar su reserva!");
    if (opciones == true) {
        valor = true;
    } else {
        valor = false;
    }
    document.getElementById("botonReservaP").innerHTML = mensaje;
    return valor;
}

