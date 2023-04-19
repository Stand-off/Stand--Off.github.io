document.getElementById("latest_game").style.display = "none";
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

//read more

function myFunction() {
  var x = document.getElementById("latest_game");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/*<script type="text/javascript" scr="js/script.js"></script>
                
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script>
    var typed = new typed(".span", {
        strings:[".....","Long Gone"],
        typeSpeed: 70,
        backSpeed: 60,
        loop:true
    });

</script>*/
