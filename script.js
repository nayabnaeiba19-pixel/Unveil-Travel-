const revealElements = document.querySelectorAll(
  ".contact-item, .contact-form, .location, .newsletter, .footer-about",
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

function revealOnScroll() {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

const backTop = document.createElement("button");

backTop.className = "back-top";
backTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
backTop.setAttribute("aria-label", "Back to top");

document.body.appendChild(backTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = this.querySelector('input[type="email"]').value;
  const name = this.querySelector('input[type="text"]').value;
  const message = this.querySelector("textarea").value;

  if (!email || !name || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Thank you! Your message has been received.");

  this.reset();
});

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

const placeImage = document.querySelector(".place-image");

window.addEventListener("mousemove", (event) => {
  const x = (window.innerWidth / 2 - event.clientX) / 50;
  const y = (window.innerHeight / 2 - event.clientY) / 50;

  if (window.innerWidth > 991) {
    placeImage.style.transform = `translate(${x}px, ${y}px)`;
  }
});
