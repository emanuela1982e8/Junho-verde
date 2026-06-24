function respostaCorreta(){
    document.getElementById("resultado").innerHTML =
    "🎉 Parabéns! Você acertou!";
}

function respostaErrada(){
    document.getElementById("resultado").innerHTML =
    "❌ Tente novamente!";
}

const elementos = document.querySelectorAll(".card, .section, .evento");

const observador = new IntersectionObserver((entradas)=>{
    entradas.forEach((entrada)=>{
        if(entrada.isIntersecting){
            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";
        }
    });
});

elementos.forEach((elemento)=>{
    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(50px)";
    elemento.style.transition = "all 0.8s ease";
    observador.observe(elemento);
});
