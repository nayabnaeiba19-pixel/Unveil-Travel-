/* =========================================================
   ODD PLACES
   ✦ MAGIC INTERACTION ENGINE ✦
========================================================= */


/* =========================================================
   HERO VIDEO
========================================================= */

const heroVideo =
    document.querySelector(".hero-video");

if (heroVideo) {

    heroVideo.muted = true;
    heroVideo.playsInline = true;

    const playVideo = () => {

        heroVideo.play().catch(() => {});

    };

    playVideo();

    document.addEventListener(
        "visibilitychange",
        () => {

            if (!document.hidden) {
                playVideo();
            }

        }
    );

}


/* =========================================================
   DESKTOP DETECTION
========================================================= */

const isDesktop =
    window.matchMedia(
        "(hover:hover) and (pointer:fine)"
    ).matches;


/* =========================================================
   GLOBAL MAGIC LIGHT
========================================================= */

if (isDesktop) {

    window.addEventListener(
        "pointermove",
        e => {

            document.documentElement.style.setProperty(
                "--mouse-x",
                `${e.clientX}px`
            );

            document.documentElement.style.setProperty(
                "--mouse-y",
                `${e.clientY}px`
            );

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   NAVBAR
========================================================= */

const navbar =
    document.querySelector(".navbar");

const updateNavbar = () => {

    if (!navbar) return;

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 70
    );

};

window.addEventListener(
    "scroll",
    updateNavbar,
    {
        passive: true
    }
);

updateNavbar();


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id], main[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".navbar-nav .nav-link"
    );

const updateActiveNav = () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop -
            window.innerHeight * .4;

        if (window.scrollY >= top) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === "#" + current) {

            link.classList.add("active");

        }

    });

};

window.addEventListener(
    "scroll",
    updateActiveNav,
    {
        passive: true
    }
);

updateActiveNav();


/* =========================================================
   MOBILE NAV
========================================================= */

const mobileNav =
    document.querySelector("#mainNav");

if (
    mobileNav &&
    typeof bootstrap !== "undefined"
) {

    const collapse =
        bootstrap.Collapse.getOrCreateInstance(
            mobileNav,
            {
                toggle: false
            }
        );

    mobileNav
        .querySelectorAll(".nav-link")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    if (
                        window.innerWidth < 992 &&
                        mobileNav.classList.contains("show")
                    ) {

                        collapse.hide();

                    }

                }
            );

        });

}


/* =========================================================
   HERO PARALLAX
========================================================= */

const hero =
    document.querySelector(".hero");

if (hero && isDesktop) {

    hero.addEventListener(
        "pointermove",
        e => {

            const x =
                e.clientX /
                window.innerWidth -
                .5;

            const y =
                e.clientY /
                window.innerHeight -
                .5;

            hero.style.setProperty(
                "--video-x",
                `${x * -12}px`
            );

            hero.style.setProperty(
                "--video-y",
                `${y * -12}px`
            );

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   DESTINATION CARDS
========================================================= */

const destinationCards =
    document.querySelectorAll(
        ".destination-card"
    );


if (isDesktop) {

    destinationCards.forEach(card => {

        card.addEventListener(
            "pointermove",
            e => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    ((e.clientX - rect.left) /
                        rect.width) *
                    100;

                const y =
                    ((e.clientY - rect.top) /
                        rect.height) *
                    100;

                card.style.setProperty(
                    "--mx",
                    `${x}%`
                );

                card.style.setProperty(
                    "--my",
                    `${y}%`
                );

            },
            {
                passive: true
            }
        );


        card.addEventListener(
            "pointerleave",
            () => {

                card.style.setProperty(
                    "--mx",
                    "50%"
                );

                card.style.setProperty(
                    "--my",
                    "50%"
                );

            }
        );

    });

}


/* =========================================================
   ABOUT IMAGE MAGIC
========================================================= */

const aboutImage =
    document.querySelector(
        ".about-right"
    );

if (aboutImage && isDesktop) {

    aboutImage.addEventListener(
        "pointermove",
        e => {

            const rect =
                aboutImage.getBoundingClientRect();

            const x =
                ((e.clientX - rect.left) /
                    rect.width) *
                100;

            const y =
                ((e.clientY - rect.top) /
                    rect.height) *
                100;

            aboutImage.style.setProperty(
                "--mx",
                `${x}%`
            );

            aboutImage.style.setProperty(
                "--my",
                `${y}%`
            );

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   FEATURE CARDS 3D
========================================================= */

const featureCards =
    document.querySelectorAll(
        ".feature-card"
    );

if (isDesktop) {

    featureCards.forEach(card => {

        card.addEventListener(
            "pointermove",
            e => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    (e.clientX - rect.left) /
                    rect.width;

                const y =
                    (e.clientY - rect.top) /
                    rect.height;

                const rotateY =
                    (x - .5) * 12;

                const rotateX =
                    (.5 - y) * 10;

                card.style.setProperty(
                    "--rx",
                    `${rotateX}deg`
                );

                card.style.setProperty(
                    "--ry",
                    `${rotateY}deg`
                );

                card.style.setProperty(
                    "--mx",
                    `${x * 100}%`
                );

                card.style.setProperty(
                    "--my",
                    `${y * 100}%`
                );

            },
            {
                passive: true
            }
        );


        card.addEventListener(
            "pointerleave",
            () => {

                card.style.setProperty(
                    "--rx",
                    "0deg"
                );

                card.style.setProperty(
                    "--ry",
                    "0deg"
                );

                card.style.setProperty(
                    "--mx",
                    "50%"
                );

                card.style.setProperty(
                    "--my",
                    "50%"
                );

            }
        );

    });

}


/* =========================================================
   MAGIC MAGNETIC BUTTONS
========================================================= */

const magneticButtons =
    document.querySelectorAll(
        ".black-btn, .white-button, .glass-button, .luxury-book, .search-btn"
    );


if (isDesktop) {

    magneticButtons.forEach(button => {

        button.addEventListener(
            "pointermove",
            e => {

                const rect =
                    button.getBoundingClientRect();

                const x =
                    e.clientX -
                    rect.left -
                    rect.width / 2;

                const y =
                    e.clientY -
                    rect.top -
                    rect.height / 2;


                button.style.setProperty(
                    "--mag-x",
                    `${x * .10}px`
                );

                button.style.setProperty(
                    "--mag-y",
                    `${y * .10}px`
                );


                button.style.setProperty(
                    "--mx",
                    `${e.clientX - rect.left}px`
                );

                button.style.setProperty(
                    "--my",
                    `${e.clientY - rect.top}px`
                );

            },
            {
                passive: true
            }
        );


        button.addEventListener(
            "pointerleave",
            () => {

                button.style.setProperty(
                    "--mag-x",
                    "0px"
                );

                button.style.setProperty(
                    "--mag-y",
                    "0px"
                );

            }
        );

    });

}


/* =========================================================
   MAGNETIC TRANSFORM
========================================================= */

const magneticStyle =
    document.createElement("style");

magneticStyle.textContent = `

    .black-btn,
    .white-button,
    .glass-button,
    .luxury-book,
    .search-btn {

        transform:
            translate(
                var(--mag-x, 0px),
                var(--mag-y, 0px)
            );

    }

`;

document.head.appendChild(
    magneticStyle
);


/* =========================================================
   STAGGER REVEAL
========================================================= */

const revealElements = [

    ...document.querySelectorAll(".about-left"),
    ...document.querySelectorAll(".about-right"),
    ...document.querySelectorAll(".destination-card"),
    ...document.querySelectorAll(".featured-heading"),
    ...document.querySelectorAll(".feature-card"),
    ...document.querySelectorAll(".final-content"),
    ...document.querySelectorAll("footer")

];


revealElements.forEach(
    (element, index) => {

        element.classList.add("reveal");

        element.style.transitionDelay =
            `${index * 70}ms`;

    }
);


/* =========================================================
   INTERSECTION OBSERVER
========================================================= */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12,

            rootMargin:
                "0px 0px -70px 0px"
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   SMOOTH ANCHORS
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            e => {

                const id =
                    link.getAttribute("href");

                if (
                    !id ||
                    id === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(id);

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });




/* =========================================================
   DESTINATION SCROLL PARALLAX
========================================================= */
/* =========================================================
   DESTINATION SCROLL PARALLAX
   DESKTOP ONLY
========================================================= */

const desktopParallax =
    window.matchMedia(
        "(hover: hover) and (pointer: fine) and (min-width: 992px)"
    );

let parallaxTick = false;

const updateParallax = () => {

    if (!desktopParallax.matches) {
        parallaxTick = false;
        return;
    }

    destinationCards.forEach(card => {

        const rect =
            card.getBoundingClientRect();

        const center =
            window.innerHeight / 2;

        const distance =
            (rect.top - center) * .018;

        card.style.backgroundPosition =
            `center calc(50% + ${distance}px)`;

    });

    parallaxTick = false;

};


/* =========================================================
   CINEMATIC PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
const newsletterForm = document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = this.querySelector("input").value;

  if (!email) {
    alert("Please enter your email.");
    return;
  }

  alert("Thank you for subscribing to our newsletter!");

  this.reset();
});