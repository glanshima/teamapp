/* const anime = require('animejs'); */


const contactForm = document.querySelector('.contact-form-section');
const contactUs = document.querySelector('.contact-form');
const staffLogin = document.querySelector('.staff-login-form');
const contactBtn = document.querySelector('.contact-select');
const staffLoginBtn = document.querySelector('.login-select');
const ourTeamText = document.querySelector('.our-team-hd');
const closeForm = document.querySelector('.form-close');
const teamFrame = document.querySelector('.team');
const siteTitle = document.querySelector('.site-title');
const serviceContainer = document.querySelector('.service-container');
const flashHeroBox = document.querySelector('.flash-hero');
const flashImgWide = document.querySelector('#flash-img-wide');
const flashImgNarrow = document.querySelector('#flash-img-narrow');
const serviceDescription = document.querySelector('.service-description');
const productSection = document.querySelector('.our-products');
/* anime({
    targets: 'div.center-box',
    left: [{
            value: 240,
            duration: 3000
        },
        { value: 100, duration: 3000 }
    ],
    backgroundColor: '#FFF',
    color: '#151320',
    borderRadius: ['0%', '90%'],
    easing: 'easeInOutSine',
    loop: true,


}) */


function clickEvents(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) callback(e)
    })
}
/* Contact Section Form Toggle Events */

contactForm.addEventListener('click', (e) => {
    if (e.target.matches('.contact-select')) {
        contactForm.style.cssText = "height: 26rem; padding-bottom: 1rem";
        contactUs.style.cssText = "right: 0";
        staffLogin.style.cssText = "right: -100";
        closeForm.style.cssText = "visibility: visible";
        serviceContainer.style.cssText = "width: 50%; translate: -50%;";
        serviceContainer.classList.add('opened-forms')
        flashHeroBox.classList.remove('login-clicked')
        flashHeroBox.style.cssText = "visibility: visible";
        serviceDescription.style.cssText = "display: none";
        productSection.style.cssText = "display: flex";
        flashImgNarrow.style.cssText = "translate: 0";
        flashImgWide.style.cssText = "translate:-100%";



    } else if (e.target.matches('.login-select')) {
        contactForm.style.cssText = "height: 19rem";
        staffLogin.style.cssText = "right: 0";
        contactUs.style.cssText = "right: -100";
        closeForm.style.cssText = "visibility: visible";
        serviceContainer.style.cssText = "width: 50%; translate: -50%;";
        serviceContainer.classList.add('opened-forms')
        flashHeroBox.classList.add('login-clicked');
        flashHeroBox.style.cssText = "height: 12rem; visibility: visible";
        flashImgWide.style.cssText = "translate: 0";
        flashImgNarrow.style.cssText = "translate: -100%";
        serviceDescription.style.cssText = "display: none";
        productSection.style.cssText = "display: flex";

    } else if (e.target.matches('.form-close')) {
        contactForm.style.cssText = "height:3.5rem";
        staffLogin.style.cssText = "right: -100";
        contactUs.style.cssText = "right: -100";
        closeForm.style.cssText = "visibility: hidden";
        serviceContainer.style.cssText = "width: 90%";
        serviceContainer.classList.remove('opened-forms')
        flashHeroBox.classList.remove('login-clicked')
        serviceDescription.style.cssText = "display: flex";
        flashHeroBox.style.cssText = "visibility: hidden";
        productSection.style.cssText = "display: none";



    }
})

/* clickEvents('click', '.contact-select', (e) => {
    contactForm.style.cssText = "height: 27rem";
    contactUs.style.cssText = "right: 0";
    staffLogin.style.cssText = "right: -100";
    closeForm.style.cssText = "visibility: visible";
    serviceContainer.style.cssText = "width: 100%";
    serviceContainer.classList.add('opened-forms')

})
clickEvents('click', '.login-select', (e) => {
    contactForm.style.cssText = "height: 19rem";
    staffLogin.style.cssText = "right: 0";
    contactUs.style.cssText = "right: -100";
    closeForm.style.cssText = "visibility: visible";
    serviceContainer.style.cssText = "width: 100%";
    serviceContainer.classList.add('opened-forms')
})
clickEvents('click', '.close', (e) => {
    contactForm.style.cssText = "height:3.5rem";
    staffLogin.style.cssText = "right: -100";
    contactUs.style.cssText = "right: -100";
    closeForm.style.cssText = "visibility: hidden";
    serviceContainer.style.cssText = "width: 50wv";
    serviceContainer.classList.remove('opened-forms')
}) */

/* Hover Effect on Meet our Team Text */
teamFrame.addEventListener('mouseover', () => {

    ourTeamText.style.opacity = '0';

})
teamFrame.addEventListener('mouseout', () => {

        ourTeamText.style.opacity = '1';

    })
    /* Flashing Site Title Text */

setInterval(() => {

    siteTitle.classList.toggle("glow")
}, 5000)

const slidingImg = document.querySelectorAll('.carousel-item.img-mine');
slidingImg.forEach(imgSlide => {
    setTimeout(() => {
        imgSlide.classList.toggle("scale")
    }, 2500);
})