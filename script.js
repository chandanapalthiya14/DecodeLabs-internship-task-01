// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal animation on scroll
const sections = document.querySelectorAll('section');

const revealSection = () => {
    sections.forEach(section => {
        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 120) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

// Initial styles for animation
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// Hero typing animation
const roles = [
    "Biomedical Engineering Undergraduate",
    "AI & Machine Learning Enthusiast",
    "Healthcare Technology Learner",
    "Cloud Computing Enthusiast"
];

let roleIndex = 0;
const roleText = document.querySelector(".hero h3");

setInterval(() => {
    if (roleText) {
        roleText.textContent = roles[roleIndex];
        roleIndex = (roleIndex + 1) % roles.length;
    }
}, 2500);

// Navbar background on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "#0b1120";
        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";
    } else {
        nav.style.background = "#111827";
        nav.style.boxShadow = "none";
    }
});

// Project card hover effect
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});

console.log("Portfolio Loaded Successfully!");