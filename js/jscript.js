var imagenes = ['./img/img1.jpg','./img/img2.jpg','./img/img3.jpg','./img/img4.jpg','./img/img5.jpg',
'./img/img6.jpg','./img/img7.jpg','./img/img8.jpg','./img/img9.jpg','./img/img10.jpg','./img/img11.jpg','./img/img12.jpg','./img/img13.jpg','./img/img17.jpg','./img/img18.jpg','./img/img19.jpg','./img/img20.jpg','./img/img21.jpg','./img/img22.jpg','./img/img23.jpg','./img/img24.jpg','./img/img25.jpg','./img/img27.jpg','./img/img28.jpg','./img/img29.jpg','./img/img30.jpg','./img/img31.jpg','./img/img32.jpg','./img/img33.jpg','./img/img34.jpg','./img/img35.jpg','./img/img36.jpg','./img/img37.jpg','./img/img38.jpg','./img/img39.jpg','./img/img40.jpg','./img/img41.jpg','./img/img42.jpg','./img/img43.jpg','./img/img44.jpg','./img/madnes.jpg'];

cont = 0;

function carrousel(carrouselCont){
    carrouselCont.addEventListener('click', e =>{
        let atras = carrouselCont.querySelector('.atras'),
            adelante = carrouselCont.querySelector('.adelante'),
            img = carrouselCont.querySelector('img'),
            tgt = e.target;

            if(tgt == atras){
                if(cont > 0){
                    img.src = imagenes[cont - 1];
                    cont--;
                }else {
                    img.src = imagenes[imagenes.length - 1];
                    cont = imagenes.length - 1;
                }
            }else if(tgt == adelante){
                if(cont <  imagenes.length - 1){
                    img.src = imagenes[cont + 1];
                    cont++;
                }else {
                    img.src = imagenes[0];
                    cont = 0;
                }
            }
    })
}

document.addEventListener("DOMContentLoaded", () =>{
    let carrouselCont = document.querySelector('.carrouselCont');

    carrousel(carrouselCont);
});


