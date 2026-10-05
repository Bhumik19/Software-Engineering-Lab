/* =========================================
   NOVA — JAVASCRIPT
   ========================================= */


/* =========================================
   SCROLL REVEAL
   ========================================= */

const revealElements = document.querySelectorAll(
    ".feature-card, .about-content, .section-heading, .cta-box"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

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


/* =========================================
   CTA BUTTON
   ========================================= */

const ctaButton = document.getElementById("ctaButton");

ctaButton.addEventListener("click", () => {

    ctaButton.innerHTML = "You're in ✓";

    ctaButton.style.background = "#ffffff";

    setTimeout(() => {

        ctaButton.innerHTML = 'Get Started <span>→</span>';

        ctaButton.style.background = "";

    }, 2500);

});


/* =========================================
   CURSOR GLOW
   ========================================= */

const cursorGlow = document.createElement("div");

cursorGlow.style.position = "fixed";
cursorGlow.style.width = "250px";
cursorGlow.style.height = "250px";
cursorGlow.style.borderRadius = "50%";
cursorGlow.style.pointerEvents = "none";
cursorGlow.style.zIndex = "-1";
cursorGlow.style.background =
    "radial-gradient(circle, rgba(183,255,53,0.06), transparent 70%)";
cursorGlow.style.transform = "translate(-50%, -50%)";

document.body.appendChild(cursorGlow);


document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;

});


/* =========================================
   PARALLAX HERO
   ========================================= */

const heroVisual = document.querySelector(".hero-visual");

document.addEventListener("mousemove", (event) => {

    if (!heroVisual) return;

    const x =
        (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 10;

    heroVisual.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* =========================================
   NAVIGATION ACTIVE STATE
   ========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.style.color = "";

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.style.color = "#b7ff35";
        }

    });

});
