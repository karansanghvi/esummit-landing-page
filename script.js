// script.js
document.addEventListener('DOMContentLoaded', function () {
    const mountain3 = document.querySelector('.mountain3');
    const banner = document.querySelector('.banner');

    window.addEventListener('scroll', function () {
        const scrollValue = window.scrollY;
        mountain3.style.transform = `translateY(-${scrollValue * 0.3}px)`; 
    });
});
