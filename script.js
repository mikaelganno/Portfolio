const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

    menuHamburger.addEventListener('click', ()=> {
    navLinks.classList.toggle('mobile-menu')
    })


let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('.nav-links ul li a');
    
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 5;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-links ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};