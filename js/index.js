const marquee = document.querySelector('.ticker__text');
let position = 0;

function move() {
    position--;
    if (position < -marquee.offsetWidth) {
        position = window.innerWidth;
    }
    marquee.style.left = position + 'px';
    requestAnimationFrame(move);
}

move();

//burger

const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.getElementById('navMenu');
const logoBase = document.querySelector('.logo__base');
const logoBurger = document.querySelector('.logo__burger');

burgerMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    logoBase.classList.toggle('active');
    logoBurger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    document.body.classList.toggle('stop-scroll');
});

//slider

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 1,
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

swiper.on('slideChange', function () {
    const currentSlide = swiper.activeIndex;
    const colors = ["rgba(145, 139, 228, 1)", "rgba(54, 54, 62, 1)", "rgba(244, 152, 148, 1)"]; // массив цветов для хедера

    document.querySelector('header').style.backgroundColor = colors[currentSlide];
});

//accordion

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const arrow = header.querySelector('.arrow');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            arrow.style.transform = 'rotate(0deg)';
            content.style.height = '0';
        } else {
            accordionItems.forEach(el => {
                el.classList.remove('active');
                el.querySelector('.arrow').style.transform = 'rotate(0deg)';
                el.querySelector('.accordion-content').style.height = '0';
            });

            item.classList.add('active');
            arrow.style.transform = 'rotate(180deg)';
            content.style.height = content.scrollHeight + 'px';
        }
    });
});

