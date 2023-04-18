'use strict';




const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function () {
        navbar.classList.remove("active");
        navbarToggler.classList.remove("active");
    });
}

/**
 * search toggle
 */
 


const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
    searchTogglers[i].addEventListener("click", function () {
        searchBox.classList.toggle("active");
    });
}




/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 200) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});

const features = document.querySelectorAll('.feature');
features.forEach((feature) => {
  feature.addEventListener('click', () => {
    feature.classList.toggle('open');
  });
});

const fixes = document.querySelectorAll('.fix');
fixes.forEach((fix) => {
  fix.addEventListener('click', () => {
    fix.classList.toggle('open');
  });
});

const balances = document.querySelectorAll('.balance');
balances.forEach((balance) => {
  balance.addEventListener('click', () => {
    balance.classList.toggle('open');
  });
});


const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function() {
  window.location.href = 'https://example.com/login'; //replace "https://example.com/login" with the URL of your login page
});
