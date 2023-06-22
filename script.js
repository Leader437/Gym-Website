
// hamburger
let navBtn = document.querySelector('.hamburger');
let navbar = document.querySelector('nav');

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('cross');
    navbar.classList.toggle('open');
});


// arrow up
window.onscroll = () => {
    let arrowUp = document.querySelector('.arrow__top');
    arrowUp.classList.toggle('arrow__visible', window.scrollY > 400);
}


// Remove navbar onclick of any nav button
let navLinks = document.querySelectorAll('.nav__anchor');
let navRemove = () => {
    navBtn.classList.remove('cross')
    navbar.classList.remove('open');
}

navLinks.forEach(btn => {
    btn.addEventListener('click', navRemove); 
});


// slider
const swiper = new Swiper('.feedback', {
    autoplay: {
        delay: 2000,
        disableonInteraction: false,
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 25,
    freeMode: 'true',
    centerSlide: 'true',
    fade: 'true',
    grabCursor: true,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }
});


// FAQ'S
let faqItem = document.querySelector('.faq-item');
let faqBtn = document.querySelectorAll('.faq-btn');

faqBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        faqItem.classList.toggle('faq-open');
    }); 
});
