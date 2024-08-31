// Blender Docs / See more button
document.querySelector('.blender_docs').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = "https://docs.blender.org/";
})

// C# Docs / See more button
document.querySelector('.cSharp_docs').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/";
})

// Smooth scrolling for About link
document.querySelector('.about-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

// Smooth scrolling for Experience link
document.querySelector('.experience-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#experience').scrollIntoView({
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation buttons
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    });
});

// Toggle navigation menu on mobile
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.nav_bar').classList.toggle('show');
});