const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
const switchThemeBtn = document.querySelector('.changeTheme');
const toggleDark = document.getElementById('toggleDark');

/* Mobile Menu */

    menuHamburger.addEventListener('click', ()=> {
        navLinks.classList.toggle('mobile-menu');
    });


/* Change Theme */

    /* A: Color */

let toggleTheme = 0;

switchThemeBtn.addEventListener('click', () => {

    if(toggleTheme === 0) {

        document.documentElement.style.setProperty('--bleu1', '#ff0000');
        document.documentElement.style.setProperty('--bleu2', '#808080');
        document.documentElement.style.setProperty('--bleu3', '#000000');
        toggleTheme++;

    } else {

        document.documentElement.style.setProperty('--bleu1', '#0ef');
        document.documentElement.style.setProperty('--bleu2', '#1f242d');
        document.documentElement.style.setProperty('--bleu3', '#323946');
        toggleTheme--;
    }

})

    /* B: icons */

toggleDark.addEventListener('click', function() {
    this.classList.toggle('bi-moon-stars-fill');
})

/* Navbar Active Link On Scroll */

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
                navLinks.classList.remove('mobile-menu');
                document.querySelector('.nav-links ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};