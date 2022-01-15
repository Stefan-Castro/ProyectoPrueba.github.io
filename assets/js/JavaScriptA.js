
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
const toTop = document.querySelector(".to-top");
window.addEventListener('scroll'), () => {
   if(window.pageYOffset >100){
    toTop.classList.add("active");
   }else{
    toTop.classList.remove("active");
   }
  


}

        




