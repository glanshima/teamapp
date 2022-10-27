/* const anime = require('animejs'); */
let header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const contactForm = document.querySelector('.contact-form');
const contactBtn = document.querySelector('.contact-select');
const ourTeamText = document.querySelector('.our-team-hd wide-screen');
const closeFormBtn = document.querySelector('.form-close');
const teamFrame = document.querySelector('.team');
const siteTitle = document.querySelector('.site-title');
const serviceContainer = document.querySelector('service-container');
const slideCaption = document.querySelector('.slide-caption');
const content = document.querySelector('.content');
const formInput = document.querySelector('.input');
const contentPos = content.getBoundingClientRect().top;
const contactFormSection = document.querySelector('.contact-form-section');
const mainContainer = document.querySelector('.main-container');
let formOpenState = false;



function clickEvents(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) callback(e);
    })
}


/* Sticky nav header  */
/* function setStickyHeader(e) {
    let ScrollPos = window.scrollY;
    if (ScrollPos > contentPos) {

        header.classList.add('sticky')

    } else {
        header.classList.remove('sticky')
    }
} */
let body = document.querySelector('body')

function setStickyHeader() {

    const observeScrollX = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.add('sticky')
            } else {
                header.classList.remove('sticky')
            }
        })
    })


    observeScrollX.observe(content)
}
setStickyHeader()


/* window.addEventListener('scroll', e => {

    _.throttle(setStickyHeader(e), 100)

}) */


/* Sticky nav header end  */

/* Contact Section Form Toggle Events */


document.querySelector('.contact-us-icon').addEventListener('click', (e) => {
      openForm()

})
document.querySelector('.form-close').addEventListener('click', (e) => {
     closeForm()

})
  
window.addEventListener('click', (e) => {
    if (e.target === contactFormSection) {
      contactFormSection.classList.remove('formOpened')
      
  } 
})
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeForm()
    }
})


function openForm() {

    contactFormSection.classList.add('formOpened')

}


function closeForm() {
    contactFormSection.classList.remove('formOpened')

}


/* Contact Section Form Toggle Events  end*/


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



/* SLIDE FUNCTIONALITY */
let slides = document.querySelectorAll('.carousel-slide');
let dots = document.querySelectorAll('.dots');
let currentSlide = 0;

document.addEventListener('DOMContentLoaded', startSlide(currentSlide));
const autoSlide = setInterval(() => {
    nextSlide()
}, 20000);

clickEvents('click', '.slide-nav__btn-icon', (e) => {
    if (e.target.matches('.btn-prev')) {
        prevSlide(currentSlide)
    } else if (e.target.matches('.btn-next')) {
        nextSlide(currentSlide)
    }
})


dots.forEach((dot, i) => {

    dot.addEventListener('click', (e) => {
        startSlide(i);
        currentSlide = i;

    });


})

function startSlide(n) {

    slides.forEach(slide => {
        slide.style.display = 'none'
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    slides[n].style.display = 'block';
    dots[n].classList.add('active');
}

function nextSlide(n) {
    currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
    startSlide(currentSlide);
}

function prevSlide(n) {
    currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--;
    startSlide(currentSlide)
}


/* Team Member slide function */


const teamMembers = document.querySelectorAll('.team-member');
const counter = document.querySelector('.counter');
const currentNumberOutput = document.querySelector('.current-number');
let totalMembersOutput = document.querySelector('.total-members');
let currentMember = 0;
let currentMemberNumber = 1;
let totalMembers = teamMembers.length;
totalMembersOutput.textContent = totalMembers;
currentNumberOutput.textContent = currentMemberNumber;
window.addEventListener('DOMContentLoaded', e => {

    viewNextMember(currentMember);
})

let memberIndex;




clickEvents('click', '.team_btn', e => {
    if (e.target.matches('.prev-member')) {
        prevMember(currentMember);

        /* members counter logic */
        currentMemberNumber <= 1 ? currentMemberNumber = teamMembers.length : currentMemberNumber--;

        currentNumberOutput.textContent = currentMemberNumber;


    } else if (e.target.matches('.next-member')) {
        nextMember(currentMember);

        /* members counter logic */
        currentMemberNumber >= teamMembers.length ? currentMemberNumber = 1 : currentMemberNumber++;

        currentNumberOutput.textContent = currentMemberNumber;

    }

})

/* function viewNextMember(n) {
    teamMembers.forEach(member => {
        member.style.cssText = "display: none;";
    })
    teamMembers[n].style.cssText = "display: flex;";
} */

/* function viewNextMember(n) {
    teamMembers.forEach(member => {
        // Make window switch team views on different view ports 
        window.addEventListener('load', () => {



            if (window.innerWidth <= 649) {
                member.style.cssText = "display: none;";
                member.classList.add('mobile-viewport')
            } else if (window.innerWidth >= 650) {
                member.style.cssText = "display: flex;";
                member.classList.remove('mobile-viewport')
            }
            teamMembers[n].style.cssText = "display: flex;";
        })
    })



} */




function viewNextMember(n) {
    teamMembers.forEach(member => {
        /* Make window switch team views on different view ports */
        let body = document.querySelector('body')


        const observer = new ResizeObserver(entries => {
            body = entries[0]
            const isMobile = body.contentRect.width <= 649;
            if (isMobile === true) {
                member.style.cssText = "display: none";
                // member.classList.add('mobile-viewport')
            } else {
                member.style.cssText = "display: flex";
                // member.classList.remove('mobile-viewport')
            }
            teamMembers[n].style.cssText = "display: flex;";

        });
        observer.observe(body)

        /*  return teamMembers[n]; */



    })



}

/* setInterval(() => {
    numCount()
    nextMember();
}, 2000); */

function numCount() {
    currentMemberNumber >= teamMembers.length ? currentMemberNumber = 1 : currentMemberNumber++;

    currentNumberOutput.textContent = currentMemberNumber;

}

function nextMember() {
    currentMember >= totalMembers - 1 ? currentMember = 0 : currentMember++;

    viewNextMember(currentMember);



}

function prevMember(n) {
    currentMember <= 0 ? currentMember = teamMembers.length - 1 : currentMember--;

    viewNextMember(currentMember);
}



/* set layout for wide and small screen to show team members section */


/* window.addEventListener("resize", setLayout()) */

/* function setLayout() {
    let teamSection = document.querySelector('.team')
    if (window.innerWidth >= 650) {
        teamMembers.forEach(member => {
            teamSection.classList.toggle('wide-screen');

            member.classList.remove('team-member');
            member.classList.add('team-member-wide-screen');
        })
    } else if (window.innerWidth <= 649) {
        teamMembers.forEach(member => {
            teamSection.classList.toggle('wide-screen');

            member.classList.remove('team-member-wide-screen')
            member.classList.add('team-member')
        })
    }
} */


/* testimonial slide functionality */
let testimonialSlide = document.querySelectorAll('.testimonial-client');
let currentTestimony = 0;
window.addEventListener('DOMContentLoaded', setTestimony(currentTestimony));
setInterval(() => {
    nextTestimony(currentTestimony);
    testimonyCount()
}, 10000);



function setTestimony(testimonySlide) {

    testimonialSlide.forEach(testimonial => {
        let body = document.querySelector('body')
        const observeTestimonies = new ResizeObserver(entries => {
            body = entries[0]
            const isMobile = body.contentRect.width >= 960;
            if (isMobile === true) {
                testimonial.style.display = 'flex';
            } else {
                testimonial.style.display = 'none';
            }
            testimonialSlide[testimonySlide].style.display = 'block';
        })
        observeTestimonies.observe(body)
    })


}


/* testimonial slide control functionality  */
function nextTestimony() {
    currentTestimony === testimonialSlide.length - 1 ? currentTestimony = 0 : currentTestimony++;
    setTestimony(currentTestimony);
}

function prevTestimony() {
    currentTestimony === 0 ? currentTestimony = testimonialSlide.length - 1 : currentTestimony--;
    setTestimony(currentTestimony);
}

/* set counter text and functionality */
let testimonyCounterOutput = document.querySelector('.current-count');
let totalTestimonyOutput = document.querySelector('.total-testimonials');
let currentTestimonyNumber = 1
let totalTestimonies = testimonialSlide.length;

testimonyCounterOutput.textContent = currentTestimonyNumber;
totalTestimonyOutput.textContent = totalTestimonies;


/* testimony slide control functions  */
function testimonyCount() {
    currentTestimonyNumber >= testimonialSlide.length ? currentTestimonyNumber = 1 :
        currentTestimonyNumber++
        testimonyCounterOutput.textContent = currentTestimonyNumber;
}

function testimonyCountPrev() {
    currentTestimonyNumber <= 1 ? currentTestimonyNumber = testimonialSlide.length : currentTestimonyNumber--;

    testimonyCounterOutput.textContent = currentTestimonyNumber;
}

/* click events for Testimony slide  */
clickEvents('click', '.testimonial-control__btn', (e) => {
    if (e.target.matches('.next-testimony')) {
        nextTestimony(currentTestimony);
        testimonyCount()
    } else if (e.target.matches('.prev-testimony')) {
        prevTestimony(currentTestimony);

        testimonyCountPrev()
    }
})