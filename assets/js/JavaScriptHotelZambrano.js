window.addEventListener('load', function(){
      new Glider(document.querySelector('.carousel-lista'), {
        slidesToShow: 1,
        dots: '.carousel-indicadores',
        draggable: true,
        arrows: {
          prev: '.carousel-anterior',
          next: '.carousel-siguiente'
        }
      });
});

function validar(){
    resultado = true;
    var txtNombres = document.getElementById("nombres");
    var txtApellidos = document.getElementById("apellidos");

    limpiarMensajes();
    var valNombre = nombres(txtNombres);
    var valApellido = nombres(txtApellidos);

    if(valNombre === false || valApellido === false){
      resultado = false;
    }

    if(resultado===true){
      resultado = enviar();
      if(resultado===true){
          alert("Su reclamo ha sido enviado con éxito");
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
  var opciones = confirm("Está seguro de enviar su reclamo!");
  if (opciones == true) {
      valor = true;
  } else {
      valor = false;
  }
  document.getElementById("botonReclamo").innerHTML = mensaje;
  return valor;
}
