const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
const switchThemeBtn = document.querySelector('.changeTheme');
const toggleDark = document.getElementById('toggleDark');
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


/* ==== Mobile Menu ==== */

    menuHamburger.addEventListener('click', ()=> {
        navLinks.classList.toggle('mobile-menu');
    });


/* ==== Change Theme ==== */

    /* ==== A: Change Color ==== */

    let toggleTheme = 0;

    switchThemeBtn.addEventListener('click', () => {

        if(toggleTheme === 0) {

            document.documentElement.style.setProperty('--bleu1', '#ff0000');
            document.documentElement.style.setProperty('--bleu2', '#000000');
            document.documentElement.style.setProperty('--bleu3', '#000000');
            document.documentElement.style.setProperty('--noir', '#ffffff')
            toggleTheme++;

        } else {

            document.documentElement.style.setProperty('--bleu1', '#00eeff');
            document.documentElement.style.setProperty('--bleu2', '#1f242d');
            document.documentElement.style.setProperty('--bleu3', '#323946');
            document.documentElement.style.setProperty('--noir', '#000000')
            toggleTheme--;
        }

    })

    /* ==== B: Change icon ==== */

    toggleDark.addEventListener('click', function() {
        this.classList.toggle('bi-moon-stars-fill');
    })


/* ==== Navbar Active Link On Scroll ==== */

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

/* ==== Send Email ==== */

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${mess.value}`;

    Email.send({
        SecureToken : "c0ef829b-9aa9-40ab-b3ab-66c1f87972a8",
        To : 'leakimganno@gmail.com',
        From : "leakimganno@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully",
                icon: "success"
            });
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }
});
