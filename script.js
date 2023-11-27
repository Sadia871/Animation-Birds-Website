
document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();
    document.querySelector('.footer-bottom p').innerText = `&copy; ${currentYear} Your Website. All rights reserved.`;
});
document.addEventListener("DOMContentLoaded", function () {
    var currentSlide = 0;
    var slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach(function (slide, i) {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initial display
    showSlide(currentSlide);

    // Auto-advance to the next slide every 3 seconds (adjust as needed)
    setInterval(nextSlide, 3000);
});
