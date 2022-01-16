//Imagenes principales 
function agrandarImagen1() {
    document.getElementById("imagen1").style.width = "33%";
    document.getElementById("imagen1").style.height = "320px";
    document.getElementById("imagen1").style.marginLeft = "1%";
    document.getElementById("imagen2").style.marginLeft = "1%";
}

function normalImagen1() {
    document.getElementById("imagen1").style.width = "30%";
    document.getElementById("imagen1").style.height = "300px";
    document.getElementById("imagen1").style.marginLeft = "2%";
    document.getElementById("imagen2").style.marginLeft = "2%";
}

function agrandarImagen2() {
    document.getElementById("imagen2").style.width = "33%";
    document.getElementById("imagen2").style.height = "320px";
    document.getElementById("imagen2").style.marginLeft = "1%";
    document.getElementById("imagen3").style.marginLeft = "1%";
}

function normalImagen2() {
    document.getElementById("imagen2").style.width = "30%";
    document.getElementById("imagen2").style.height = "300px";
    document.getElementById("imagen2").style.marginLeft = "2%";
    document.getElementById("imagen3").style.marginLeft = "2%";
}

function agrandarImagen3() {
    document.getElementById("imagen3").style.width = "33%";
    document.getElementById("imagen3").style.height = "320px";
    document.getElementById("imagen3").style.marginLeft = "1%";
}

function normalImagen3() {
    document.getElementById("imagen3").style.width = "30%";
    document.getElementById("imagen3").style.height = "300px";
    document.getElementById("imagen3").style.marginLeft = "2%";
}

//Efecto de imagenes secundarias
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

//Botón para volver hacia arriba
const botonTop = document.querySelector(".boton-top");

botonTop.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
    if (window.scrollY < 500) {
        botonTop.style.right = -100 + "px";
    } else {
        botonTop.style.right = 5 + "px";
    }
});

//Acción del botón Reservar en el formulario
function validarReserva() {
    resultado = false;
    resultado = enviar();
    if (resultado === true) {
        alert("Su reservación ha sido enviada con éxito");
    }
    return resultado;
}

function enviar() {
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





