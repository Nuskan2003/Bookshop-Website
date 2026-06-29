// ==========================================
// BOOK WORLD - SCRIPT
// ==========================================

// Loader

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        }, 500);

    }

});

// ==========================================
// Scroll To Top
// ==========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================================
// Dark Mode
// ==========================================

const themeBtn = document.getElementById("themeBtn");

const body = document.body;

if (localStorage.getItem("theme") === "dark") {

    body.classList.add("dark");

    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

}

themeBtn.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

    }

});

// ==========================================
// Mobile Menu
// ==========================================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="fas fa-xmark"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    }

});

// ==========================================
// Close Mobile Menu
// ==========================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

// ==========================================
// Search Books
// ==========================================

const searchInput = document.getElementById("searchInput");

const bookCards = document.querySelectorAll(".book-card");

searchInput.addEventListener("keyup", () => {

    const searchValue = searchInput.value.toLowerCase();

    bookCards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(searchValue)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// ==========================================
// Add To Cart
// ==========================================

let cartCount = 0;

const cartNumber = document.getElementById("cartCount");

const toast = document.getElementById("toast");

document.querySelectorAll(".cart-btn").forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartNumber.textContent = cartCount;

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);

    });

});

// ==========================================
// Animated Counter
// ==========================================

const counters = document.querySelectorAll(".counter");

const speed = 200;

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        const updateCounter = () => {

            const current = +counter.innerText;

            const increment = target / speed;

            if (current < target) {

                counter.innerText = Math.ceil(current + increment);

                setTimeout(updateCounter, 10);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight && !counterStarted) {

        startCounter();

        counterStarted = true;

    }

});

// ==========================================
// Navbar Shadow
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

    } else {

        navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,.05)";

    }

});

// ==========================================
// Smooth Anchor Scrolling
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================================
// Newsletter
// ==========================================

const newsletter = document.querySelector(".newsletter-form");

newsletter.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you for subscribing to Book World!");

    newsletter.reset();

});