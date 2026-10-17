// ===================================
// 1. MOBILE NAVIGATION MENU
// ===================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile menu
menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuBtn.textContent = isOpen ? "✕" : "☰";
});


// ===================================
// 2. CLOSE MENU AFTER CLICKING A LINK
// ===================================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation");
        menuBtn.textContent = "☰";
    });
});


// ===================================
// 3. CLOSE MENU WITH ESCAPE KEY
// ===================================

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation");
        menuBtn.textContent = "☰";
    }
});


// ===================================
// 4. AUTOMATIC COPYRIGHT YEAR
// ===================================

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();