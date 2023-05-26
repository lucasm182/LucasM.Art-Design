const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

const btnLeft2 = document.querySelector("#btn-left2");
const btnRight2 = document.querySelector("#btn-right2");

const btnLeft3 = document.querySelector("#btn-left3");
const btnRight3 = document.querySelector("#btn-right3");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast)
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});


btnRight2.addEventListener('click', function(){
    Next();
});

btnLeft2.addEventListener('click', function(){
    Prev();
});



btnRight3.addEventListener('click', function(){
    Next();
});

btnLeft3.addEventListener('click', function(){
    Prev();
});


/*para que sea automatico

setInterval(function(){   
    Next();
}, 5000);
    
    */