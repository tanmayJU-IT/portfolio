// Drop-down button in the navbar as the screen size reduces
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')

};


// Adjusting the active color on navbar whichever section is present 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

//  making the navbar sticky 

let header = document.querySelector('header');
header.classList.toggle('sticky' , window.scrollY > 100);

// remove the drop-down navbar as the screen is being scrolled
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

// as page changes the transiton effect of the texts is added using the scroll reveal website
ScrollReveal({
    reset: true,
    distance:'80px',
    duration:2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, .skill-container, .portfolio-box , .contact form', {origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 , .about-img', {origin: 'left' });
ScrollReveal().reveal('.home-content p , .about-content', {origin: 'right' });


// typing effects on the home screen
const typed = new Typed('.typing-effect', {
    strings: ['Fresher' , 'Great Enthusiast' ,'Great Learner'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});