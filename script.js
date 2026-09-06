/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================================
   TYPING EFFECT
===================================================== */

const typingText = document.getElementById("typingText");

const roles = [
    "Python Full Stack Developer",
    "Web Developer",
    "Frontend Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );

}


typeEffect();


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   THEME TOGGLE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    themeToggle.innerHTML =
        '<i class="bi bi-sun-fill"></i>';

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");


    const isLight =
        document.body.classList.contains("light-theme");


    if (isLight) {

        themeToggle.innerHTML =
            '<i class="bi bi-sun-fill"></i>';

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

    } else {

        themeToggle.innerHTML =
            '<i class="bi bi-moon-stars-fill"></i>';

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

    }

});


/* =====================================================
   PROJECT FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectItems =
    document.querySelectorAll(".project-item");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        projectItems.forEach(item => {

            const categories =
                item.getAttribute("data-category");


            if (
                filter === "all" ||
                categories.includes(filter)
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", event => {

    event.preventDefault();


    const firstName =
        document.getElementById("firstName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        firstName === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill in all required fields.");

        return;

    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }


    /*
       The portfolio is hosted using GitHub Pages.
       GitHub Pages does not provide a backend for
       processing form submissions.

       For now, open the user's email client with
       the entered information.
    */


    const lastName =
        document.getElementById("lastName").value.trim();


    const mailSubject =
        encodeURIComponent(subject);


    const mailBody =
        encodeURIComponent(
            `Name: ${firstName} ${lastName}\n\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`
        );


    window.location.href =
        `mailto:kanneboinaanusha719@gmail.com` +
        `?subject=${mailSubject}` +
        `&body=${mailBody}`;

});


/* =====================================================
   MOBILE NAVBAR CLOSE
===================================================== */

const navbarLinks =
    document.querySelectorAll(".nav-link");

const navbarCollapse =
    document.getElementById("navbarNav");


navbarLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 992) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(
                    navbarCollapse
                );

            if (bsCollapse) {

                bsCollapse.hide();

            }

        }

    });

});