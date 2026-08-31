// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active")
            ? "✕"
            : "☰";
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeToggle.textContent = "🌙";

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

    themeToggle.textContent =
        isLight ? "🌙" : "☀️";

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements =
    document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

};


window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    if (!name) {

        formMessage.textContent =
            "Please enter your name.";

        return;
    }


    formMessage.textContent =
        `Thanks, ${name}! Your message has been received.`;

    contactForm.reset();

});


// =========================
// ACTIVE NAVIGATION
// =========================

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach(item => {

        item.classList.remove("active");

        if (
            item.getAttribute("href") ===
            `#${currentSection}`
        ) {

            item.classList.add("active");

        }

    });

});