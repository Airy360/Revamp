const slides = document.querySelectorAll('.team-slide');
let currentSlide = 0;

document.querySelector('.next-btn').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
});

document.addEventListener('DOMContentLoaded', function() {
    let serviceItems = document.querySelectorAll('.service-item');

    function revealOnScroll() {
        for (let i = 0; i < serviceItems.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = serviceItems[i].getBoundingClientRect().top;
            let elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                serviceItems[i].classList.add('is-visible');
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on page load
});