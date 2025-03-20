// selecionando elementos do menu Mobile

const menuBtn = document.querySelector("#menu")
const closeMenuBtn = document.querySelector("#close-menu")
const menu = document.querySelector("#mobile-navbar")


console.log()

// selecionar os elementos dos slides
const slides = document.querySelectorAll(".banner");
// console.log(slides)

const dots = document.querySelectorAll(".dot")

let slideIndex = 1;

function showSlides(){
    for(let i=0; i < slides.length; i++){
        slides[i].classList.remove("active")
        dots[i].classList.remove("active")
    }
    
    slideIndex++; // avançado a variavel
    if (slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex -1].classList.add("active")
    dots[slideIndex -1].classList.add("active")

    setTimeout(showSlides, 3000)


}

//Ativar Menu-Mobile
// Arrow function
// () => {
//    }
// function  () {
// }
menuBtn.addEventListener("click", (e) => {
    menu.classList.add("menu-active")
})

closeMenuBtn.addEventListener("click", (e) => {
    menu.classList.remove("menu-active")
})


//Inicialização
showSlides()