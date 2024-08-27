document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav_bar');

    hamburger.addEventListener('click', function () {
        navBar.classList.toggle('active');
    });
});