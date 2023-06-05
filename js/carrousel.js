var imagenes = ['./img/img1.jpg','./img/img2.jpg','./img/img3.jpg','./img/img4.jpg','./img/img5.jpg',
'./img/img6.jpg','./img/img7.jpg','./img/img8.jpg','./img/img9.jpg','./img/img10.jpg','./img/img11.jpg','./img/img12.jpg','./img/img13.jpg','./img/img17.jpg','./img/img18.jpg','./img/img19.jpg','./img/img20.jpg','./img/img21.jpg','./img/img22.jpg','./img/img23.jpg','./img/img24.jpg','./img/img25.jpg','./img/img27.jpg','./img/img28.jpg','./img/img29.jpg','./img/img30.jpg','./img/img31.jpg','./img/img32.jpg','./img/img33.jpg','./img/img34.jpg','./img/img35.jpg','./img/img36.jpg','./img/img37.jpg','./img/img38.jpg','./img/img39.jpg','./img/img40.jpg','./img/img41.jpg','./img/img42.jpg','./img/img43.jpg','./img/img44.jpg','./img/madnes.jpg'];

var cont = 0;//para llevar un seguimiento de posicion actual

function carrousel(carrouselCont) {//recibe por parametro el contenedor del carousel
    carrouselCont.addEventListener('click', function(event) {//al hacer clic en el contenedor se ejecuta la funcion
        var atras = carrouselCont.querySelector('.atras');
        var adelante = carrouselCont.querySelector('.adelante');
        var img = carrouselCont.querySelector('img');
        var tgt = event.target;//se guarda la referencia al elemento en el que se hizo clic.

        //verifica si el objetivo del evento es atras o adelante
        if (tgt === atras) {
            if (cont > 0) {
                img.src = imagenes[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        } else if (tgt === adelante) {
            if (cont < imagenes.length - 1) {
                img.src = imagenes[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var carrouselCont = document.querySelector('.carrouselCont');
    carrousel(carrouselCont);
});