document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav_bar');

    hamburger.addEventListener('click', function () {
        navBar.classList.toggle('active');
});

document.querySelector('.about-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.experience-link').addEventListener('click', function (e) {
    e.preventDefault();
        document.querySelector('#experience').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    });
});