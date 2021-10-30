//Hamburger Menu bar
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const closeNav = document.querySelector("#close");

let menuOpen = false;
hamburger.addEventListener('click', () => {
    if(!menuOpen){
        mobileNav.classList.add("mobile-nav_active");
        menuOpen = true;
    }
});

closeNav.addEventListener('click', () => {
    mobileNav.classList.remove("mobile-nav_active");
    menuOpen = false;
});