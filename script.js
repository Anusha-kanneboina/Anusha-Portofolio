/* =====================================================
   PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
   1. ACTIVE NAVBAR LINK
===================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


/* =====================================================
   2. TYPING ANIMATION
===================================================== */

const typingText = document.getElementById("typing-text");

const roles = [
    "Python Full Stack Developer",
    "Web Developer",
    "Frontend Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

        }

    }

    const speed = isDeleting ? 60 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =====================================================
   DARK / LIGHT THEME
===================================================== */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {

            themeToggle.innerHTML =
                '<i class="bi bi-sun-fill"></i>';

            localStorage.setItem("theme", "light");

        } else {

            themeToggle.innerHTML =
                '<i class="bi bi-moon-fill"></i>';

            localStorage.setItem("theme", "dark");

        }

    });


    /* Remember user's selected theme */

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-theme");

        themeToggle.innerHTML =
            '<i class="bi bi-sun-fill"></i>';

    }

}

/* =====================================================
   4. PROJECT FILTERING
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectItems =
    document.querySelectorAll(".project-item");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const selectedFilter =
            button.getAttribute("data-filter");


        projectItems.forEach((project) => {

            const categories =
                project.getAttribute("data-category");


            if (
                selectedFilter === "all" ||
                (categories && categories.includes(selectedFilter))
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


/* =====================================================
   5. BACK TO TOP BUTTON
===================================================== */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

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

}


/* =====================================================
   6. CONTACT FORM VALIDATION
===================================================== */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const firstName =
            document.getElementById("firstName");

        const lastName =
            document.getElementById("lastName");

        const email =
            document.getElementById("email");

        const subject =
            document.getElementById("subject");

        const message =
            document.getElementById("message");


        /* Check required fields */

        if (
            !firstName ||
            !lastName ||
            !email ||
            !subject ||
            !message
        ) {
            return;
        }


        if (
            firstName.value.trim() === "" ||
            lastName.value.trim() === "" ||
            email.value.trim() === "" ||
            subject.value.trim() === "" ||
            message.value.trim() === ""
        ) {

            alert("Please fill in all required fields.");

            return;
        }


        /* Email validation */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email.value.trim())) {

            alert("Please enter a valid email address.");

            return;
        }


        /* Success message */

        alert(
            "Thank you! Your message has been submitted successfully."
        );


        contactForm.reset();

    });

}


/* =====================================================
   7. MOBILE NAVBAR CLOSE
===================================================== */

const navbarCollapse =
    document.getElementById("navbarNav");


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (
            window.innerWidth < 992 &&
            navbarCollapse &&
            navbarCollapse.classList.contains("show")
        ) {

            const bootstrapCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bootstrapCollapse) {

                bootstrapCollapse.hide();

            }

        }

    });

});


/* =====================================================
   8. SCROLL REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
    ".section-heading, .skill-card, .project-card, " +
    ".education-card, .contact-info, .contact-form, " +
    ".about-image, #about .col-lg-7"
);


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =====================================================
   9. PROJECT LINK CHECK
===================================================== */

const projectLinks =
    document.querySelectorAll(".project-links a");


projectLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        if (link.getAttribute("href") === "#") {

            event.preventDefault();

            alert("Project link will be added soon.");

        }

    });

});