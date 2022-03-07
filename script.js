let slider = document.querySelector(".slider-largura");
let img = document.querySelectorAll(".slide-img");
slider.style.width = `calc(100vw * ${img.length})`;

let slideAtual = 0;

function vai(){
    slideAtual++;
    if(slideAtual > (img.length -1)){
        slideAtual = 0;
    }
    mudarMargem(slideAtual);
}

function volta(){
    slideAtual--;
    if(slideAtual < 0 ){
        slideAtual = (img.length - 1);
    }
    mudarMargem(slideAtual);
}

function mudarMargem(n){
    slider.style.marginLeft = `calc(-100vw * ${n})`;
}

setInterval(vai,5000);

