//java do evento
let slideIndex = [1, 1, 1];
/* Classifique os membros de cada grupo de slideshow com diferentes nomes de CSS e JS */
let slideId = ["slide1", "slide2", "slide3"];

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
    let i;
    let carouselContainers = document.querySelectorAll(".item-evento .carousel-container");
    let slides = carouselContainers[no].querySelectorAll(".carousel-slide img");
    let dotsContainers = document.querySelectorAll(".item-evento .carousel-controls");
    let dots = dotsContainers[no].querySelectorAll(".dot");

    if (n > slides.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[no]-1].style.display = "block";
    dots[slideIndex[no]-1].className += " active";
}

// Inicializa os carrosséis
document.addEventListener('DOMContentLoaded', function() {
    const numCarousels = document.querySelectorAll('.carousel-container').length;
    for (let i = 0; i < numCarousels; i++) {
        showSlides(1, i);
    }
});

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    nav.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = mobileMenu.contains(event.target) || hamburger.contains(event.target);
    if (!isClickInsideMenu && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        nav.classList.remove('open');
    }
});