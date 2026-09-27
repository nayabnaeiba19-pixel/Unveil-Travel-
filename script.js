/* =====================================================
   DESTINATIONS
===================================================== */

const destinations = [

    {
        country: "PERU",

        title: "MACHU<br>PICCHU",

        description:
            "Where ancient stones meet the clouds.",

        image:
            "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=2400&q=95"
    },


    {
        country: "FRANCE",

        title: "CHAMONIX",

        description:
            "A wild escape beneath the highest peaks.",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_YAQC8V7RoDGFuHsYzPxq6_8dYxzUpuXIFeRVWo8lFw&s=10"
    },


    {
        country: "NORWAY",

        title: "LOFOTEN",

        description:
            "Where mountains rise straight from the sea.",

        image:
            "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=2400&q=95"
    },


    {
        country: "PATAGONIA",

        title: "PATAGONIA",

        description:
            "A land shaped by wind, ice and silence.",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf95GKxp-bYuHnEyd_3sSR21oAbE_l0AjFwxKGYQ0EUA&s=10"
    },


    {
        country: "FAROE<br>ISLANDS",

        title: "FAROE<br>ISLANDS",

        description:
            "Remote cliffs floating between sea and sky.",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQctnc4sdATW7mlA-SWMCkZnQ-HoG3IXGkHLpXaVHAXYA&s=10"
    }

];



/* =====================================================
   ELEMENTS
===================================================== */

const cards =
    document.querySelectorAll(".destination-card");


const country =
    document.getElementById("country");


const destination =
    document.getElementById("destination");


const description =
    document.getElementById("description");


const currentNumber =
    document.getElementById("currentNumber");


const progressBar =
    document.getElementById("progressBar");


const bigNumber =
    document.getElementById("bigNumber");


const background =
    document.querySelector(".background-image");


const nextButton =
    document.getElementById("nextBtn");


const previousButton =
    document.getElementById("prevBtn");


const travelSite =
    document.querySelector(".travel-site");



/* =====================================================
   STATE
===================================================== */

let currentIndex = 2;

let isMoving = false;



/* =====================================================
   GET POSITION
===================================================== */

function getPosition(card) {

    return parseInt(
        card.dataset.position
    );

}



/* =====================================================
   SET POSITION
===================================================== */

function setPosition(card, position) {

    if (position < 0) {

        position = 4;

    }


    if (position > 4) {

        position = 0;

    }


    card.dataset.position =
        position;

}



/* =====================================================
   CONTENT ANIMATION
===================================================== */

function animateContent(callback) {

    country.style.opacity = "0";

    destination.style.opacity = "0";

    description.style.opacity = "0";


    country.style.transform =
        "translateY(15px)";


    destination.style.transform =
        "translateY(25px)";


    description.style.transform =
        "translateY(15px)";


    destination.style.filter =
        "blur(8px)";


    setTimeout(() => {

        callback();


        country.style.opacity = "1";

        destination.style.opacity = "1";

        description.style.opacity = "1";


        country.style.transform =
            "translateY(0)";


        destination.style.transform =
            "translateY(0)";


        description.style.transform =
            "translateY(0)";


        destination.style.filter =
            "blur(0)";

    }, 280);

}



/* =====================================================
   UPDATE CONTENT
===================================================== */

function updateContent() {

    const data =
        destinations[currentIndex];


    animateContent(() => {

        country.innerHTML =
            data.country;


        destination.innerHTML =
            data.title;


        description.textContent =
            data.description;


        currentNumber.textContent =
            String(currentIndex + 1)
                .padStart(2, "0");


        bigNumber.textContent =
            String(currentIndex + 1)
                .padStart(2, "0");


        progressBar.style.width =
            `${((currentIndex + 1) / destinations.length) * 100}%`;


        background.style.backgroundImage =
            `url("${data.image}")`;

    });

}



/* =====================================================
   MOVE SLIDER
===================================================== */

function moveSlider(direction) {

    if (isMoving) {

        return;

    }


    isMoving = true;



    /* -----------------------------------------
       Move cards
    ----------------------------------------- */

    cards.forEach(card => {

        const oldPosition =
            getPosition(card);


        let newPosition;


        if (direction === "next") {

            newPosition =
                oldPosition - 1;


            if (newPosition < 0) {

                newPosition = 4;

            }

        }

        else {

            newPosition =
                oldPosition + 1;


            if (newPosition > 4) {

                newPosition = 0;

            }

        }


        setPosition(
            card,
            newPosition
        );

    });



    /* -----------------------------------------
       Update index
    ----------------------------------------- */

    if (direction === "next") {

        currentIndex++;


        if (
            currentIndex >=
            destinations.length
        ) {

            currentIndex = 0;

        }

    }

    else {

        currentIndex--;


        if (currentIndex < 0) {

            currentIndex =
                destinations.length - 1;

        }

    }



    /* -----------------------------------------
       Update content
    ----------------------------------------- */

    updateContent();



    /* -----------------------------------------
       Release lock
    ----------------------------------------- */

    setTimeout(() => {

        isMoving = false;

    }, 950);

}



/* =====================================================
   NEXT
===================================================== */

nextButton.addEventListener(
    "click",
    () => {

        moveSlider("next");

    }
);



/* =====================================================
   PREVIOUS
===================================================== */

previousButton.addEventListener(
    "click",
    () => {

        moveSlider("prev");

    }
);



/* =====================================================
   CARD CLICK
===================================================== */

cards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const position =
                getPosition(card);


            if (position === 3) {

                moveSlider("next");

            }


            else if (position === 1) {

                moveSlider("prev");

            }

        }
    );

});



/* =====================================================
   KEYBOARD
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "ArrowRight"
        ) {

            moveSlider("next");

        }


        if (
            event.key === "ArrowLeft"
        ) {

            moveSlider("prev");

        }

    }
);



/* =====================================================
   TOUCH SWIPE
===================================================== */

let touchStartX = 0;

let touchEndX = 0;


document.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    event => {

        touchEndX =
            event.changedTouches[0].screenX;


        const distance =
            touchStartX - touchEndX;


        if (distance > 60) {

            moveSlider("next");

        }


        if (distance < -60) {

            moveSlider("prev");

        }

    },
    {
        passive: true
    }
);



/* =====================================================
   MOUSE PARALLAX
===================================================== */

travelSite.addEventListener(
    "mousemove",
    event => {

        if (window.innerWidth < 900) {

            return;

        }


        const x =
            event.clientX /
            window.innerWidth -
            0.5;


        const y =
            event.clientY /
            window.innerHeight -
            0.5;


        const moveX =
            x * 12;


        const moveY =
            y * 7;


        background.style.transform =
            `scale(1.08) translate(${moveX}px, ${moveY}px)`;

    }
);



/* =====================================================
   RESET PARALLAX
===================================================== */

travelSite.addEventListener(
    "mouseleave",
    () => {

        background.style.transform =
            "scale(1.08)";

    }
);



/* =====================================================
   PRELOAD
===================================================== */

destinations.forEach(
    destinationData => {

        const image =
            new Image();

        image.src =
            destinationData.image;

    }
);



/* =====================================================
   INITIALIZE
===================================================== */

updateContent();
/* =========================================================
   ODD PLACES
   SHARED HEADER ENGINE
========================================================= */


/* =========================================================
   VOYAGE
   SHARED HEADER ENGINE
========================================================= */

const navbar =
    document.querySelector(".site-header .navbar");


/* =========================================================
   NAVBAR SCROLL
========================================================= */

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
   MOBILE NAV
========================================================= */

const mobileNav =
    document.querySelector(
        ".site-header #mainNav"
    );

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
   ACTIVE PAGE
========================================================= */

const currentPage =
    window.location.pathname
        .split("/")
        .pop() || "index.html";

document
    .querySelectorAll(
        ".site-header .navbar-nav .nav-link"
    )
    .forEach(link => {

        const href =
            link.getAttribute("href");

        if (!href) return;

        const cleanHref =
            href.split("#")[0];

        if (
            cleanHref === currentPage ||
            (
                currentPage === "" &&
                cleanHref === "index.html"
            )
        ) {

            link.classList.add("active");

        }

    });


/* =========================================
   NAVBAR SCROLL
========================================= */

/* =========================================
   MOBILE NAV
========================================= */

const navLinks =
    document.querySelectorAll(".navbar-nav .nav-link");

const mainNav =
    document.getElementById("mainNav");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (
            window.innerWidth < 992 &&
            mainNav
        ) {

            const collapse =
                bootstrap.Collapse
                    .getInstance(mainNav);

            if (collapse) {

                collapse.hide();

            }

        }

    });

});