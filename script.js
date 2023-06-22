
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
let faqItem1 = document.querySelector('.faq-item1');
let faqItem2 = document.querySelector('.faq-item2');
let faqItem3 = document.querySelector('.faq-item3');
let faqItem4 = document.querySelector('.faq-item4');

let faqBtn1 = document.querySelector('.faq-btn1');
let faqBtn2 = document.querySelector('.faq-btn2');
let faqBtn3 = document.querySelector('.faq-btn3');
let faqBtn4 = document.querySelector('.faq-btn4');

faqBtn1.addEventListener('click', () => {
    faqItem1.classList.toggle('faq-open');
    faqItem2.classList.remove('faq-open');
    faqItem3.classList.remove('faq-open');
    faqItem4.classList.remove('faq-open');
});
faqBtn2.addEventListener('click', () => {
    faqItem2.classList.toggle('faq-open');
    faqItem1.classList.remove('faq-open');
    faqItem3.classList.remove('faq-open');
    faqItem4.classList.remove('faq-open');
});
faqBtn3.addEventListener('click', () => {
    faqItem3.classList.toggle('faq-open');
    faqItem1.classList.remove('faq-open');
    faqItem2.classList.remove('faq-open');
    faqItem4.classList.remove('faq-open');
});
faqBtn4.addEventListener('click', () => {
    faqItem4.classList.toggle('faq-open');
    faqItem1.classList.remove('faq-open');
    faqItem2.classList.remove('faq-open');
    faqItem3.classList.remove('faq-open');
});
