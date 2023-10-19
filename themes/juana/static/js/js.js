document.addEventListener('DOMContentLoaded', function() {
    var articulos = document.querySelectorAll('.articulo');
 
    articulos.forEach(function(articulo) {
       articulo.addEventListener('mouseover', function() {
          articulo.style.transform = 'scale(1.05)'; // Escala un poco más grande
       });
 
       articulo.addEventListener('mouseout', function() {
          articulo.style.transform = 'scale(1)'; // Restaura el tamaño original al quitar el ratón
       });
    });
 });
 
