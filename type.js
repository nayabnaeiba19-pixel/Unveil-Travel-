/* =========================================================
   TRIP DATA
========================================================= */

const trips = [

    {
        category: "Train Journey",

        title: "RAILWAY ADVENTURE",

        location: "Swiss Alps",

        description:
            "Discover unforgettable journeys by train. Travel through beautiful landscapes, historic cities and breathtaking destinations while enjoying the comfort of a unique railway adventure.",

        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
    },


    {
        category: "Cruise Trip",

        title: "OCEAN ESCAPE",

        location: "Mediterranean Sea",

        description:
            "Sail across crystal clear waters and discover beautiful coastal cities while enjoying an unforgettable luxury cruise experience.",

        image:
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80"
    },


    {
        category: "Road Trip",

        title: "OPEN ROAD JOURNEY",

        location: "Pacific Coast",

        description:
            "Drive through spectacular landscapes, coastal roads and hidden destinations while experiencing the freedom of the open road.",

        image:
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80"
    },


    {
        category: "Mountain Trip",

        title: "MOUNTAIN ESCAPE",

        location: "Swiss Mountains",

        description:
            "Escape into the mountains and discover peaceful landscapes, dramatic peaks and unforgettable adventures surrounded by nature.",

        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"
    },


    {
        category: "Beach Trip",

        title: "TROPICAL PARADISE",

        location: "Maldives",

        description:
            "Relax beside turquoise waters, white sand beaches and tropical landscapes in one of the world's most beautiful destinations.",

        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
    }

];



/* =========================================================
   VARIABLES
========================================================= */

let currentIndex = 0;


const background =
    document.querySelector(".background");


const category =
    document.querySelector(".category");


const title =
    document.querySelector(".left-content h1");


const description =
    document.querySelector(".description");


const tripCards =
    document.querySelector("#tripCards");


const currentNumber =
    document.querySelector("#currentNumber");


const totalNumber =
    document.querySelector("#totalNumber");


const progressLine =
    document.querySelector(".progress-line");


const prevBtn =
    document.querySelector("#prevBtn");


const nextBtn =
    document.querySelector("#nextBtn");



/* =========================================================
   SHOW TRIP
========================================================= */

function showTrip(index) {

    const trip =
        trips[index];


    background.style.backgroundImage =
        `url("${trip.image}")`;


    category.textContent =
        trip.category;


    title.innerHTML =
        trip.title.replace(
            " ",
            "<br>"
        );


    description.textContent =
        trip.description;


    currentNumber.textContent =
        String(index + 1).padStart(
            2,
            "0"
        );


    totalNumber.textContent =
        String(trips.length).padStart(
            2,
            "0"
        );


    const progress =
        ((index + 1) / trips.length) * 100;


    progressLine.style.background =
        `
        linear-gradient(
            to right,
            #e7c344 0%,
            #e7c344 ${progress}%,
            rgba(255,255,255,.3) ${progress}%,
            rgba(255,255,255,.3) 100%
        )
        `;


    createCards();

}



/* =========================================================
   CREATE CARDS
========================================================= */

function createCards() {

    tripCards.innerHTML = "";


    for (
        let i = 1;
        i <= 4;
        i++
    ) {


        const cardIndex =
            (currentIndex + i)
            % trips.length;


        const trip =
            trips[cardIndex];


        const card =
            document.createElement("div");


        card.className =
            "trip-card";


        card.innerHTML = `

            <img
                src="${trip.image}"
                alt="${trip.title}"
            >

            <div class="card-info">

                <div class="card-line"></div>

                <div class="card-location">
                    ${trip.location}
                </div>

                <div class="card-title">
                    ${trip.title}
                </div>

            </div>

        `;


        card.addEventListener(
            "click",
            () => {

                currentIndex =
                    cardIndex;

                showTrip(
                    currentIndex
                );

                resetAutoSlide();

            }
        );


        tripCards.appendChild(card);

    }

}



/* =========================================================
   NEXT
========================================================= */

function nextTrip() {

    currentIndex =
        (currentIndex + 1)
        % trips.length;


    showTrip(
        currentIndex
    );

}



/* =========================================================
   PREVIOUS
========================================================= */

function previousTrip() {

    currentIndex =
        (
            currentIndex - 1
            + trips.length
        )
        % trips.length;


    showTrip(
        currentIndex
    );

}



/* =========================================================
   NEXT BUTTON
========================================================= */

nextBtn.addEventListener(
    "click",
    () => {

        nextTrip();

        resetAutoSlide();

    }
);



/* =========================================================
   PREVIOUS BUTTON
========================================================= */

prevBtn.addEventListener(
    "click",
    () => {

        previousTrip();

        resetAutoSlide();

    }
);



/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {


        if (
            event.key === "ArrowRight"
        ) {

            nextTrip();

            resetAutoSlide();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousTrip();

            resetAutoSlide();

        }

    }
);



/* =========================================================
   AUTO SLIDE
========================================================= */

let autoSlide =
    setInterval(
        nextTrip,
        7000
    );


function resetAutoSlide() {

    clearInterval(
        autoSlide
    );


    autoSlide =
        setInterval(
            nextTrip,
            7000
        );

}



/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const navbar =
    document.querySelector(".navbar");


function updateNavbar() {

    if (!navbar) return;


    if (
        window.scrollY > 70
    ) {

        navbar.classList.add(
            "scrolled"
        );

    } else {

        navbar.classList.remove(
            "scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateNavbar
);


updateNavbar();



/* =========================================================
   CLOSE MOBILE NAV
========================================================= */

const navLinks =
    document.querySelectorAll(
        ".navbar .nav-link"
    );


const mainNav =
    document.querySelector(
        "#mainNav"
    );


navLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                if (
                    window.innerWidth < 992 &&
                    mainNav &&
                    mainNav.classList.contains("show")
                ) {

                    const collapse =
                        bootstrap.Collapse
                            .getInstance(
                                mainNav
                            );


                    if (collapse) {

                        collapse.hide();

                    }

                }

            }
        );

    }
);



/* =========================================================
   MAGNETIC HEADER BUTTONS
========================================================= */

const magneticButtons =
    document.querySelectorAll(
        ".search-btn, .luxury-book"
    );


magneticButtons.forEach(
    button => {


        button.addEventListener(
            "mousemove",
            event => {

                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX
                    - rect.left
                    - rect.width / 2;


                const y =
                    event.clientY
                    - rect.top
                    - rect.height / 2;


                button.style.transform =
                    `
                    translate(
                        ${x * .12}px,
                        ${y * .12}px
                    )
                    `;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "";

            }
        );

    }
);



/* =========================================================
   INITIAL LOAD
========================================================= */

showTrip(
    currentIndex
);