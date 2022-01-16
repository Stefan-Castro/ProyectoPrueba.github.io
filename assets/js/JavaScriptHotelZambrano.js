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
