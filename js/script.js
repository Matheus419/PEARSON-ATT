// // DOM
// // Navegar no documento html

// const brand = document.querySelector("#brand");

// brand.addEventListener('click', function(event,){
//     // console.log("testando click");
//     // console.log(event.target)
//     event.target.style.color = "blue"
// })

// selecionar os elementos dos slides
const slides = document.querySelectorAll(".banner");
// console.log(slides)
//
const dots = document.querySelectorAll(".dot")

let slideIndex = 0;

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

//Inicialização
showSlides()