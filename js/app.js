//Hamburger Menu bar
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const closeNav = document.querySelector("#close");

let menuOpen = false;
hamburger.addEventListener('click', () => {
    if (!menuOpen) {
        mobileNav.classList.add("mobile-nav_active");
        menuOpen = true;
    }
});

closeNav.addEventListener('click', () => {
    mobileNav.classList.remove("mobile-nav_active");
    menuOpen = false;
});

//Image Slider for mobile
const images = document.querySelectorAll(".images");
const thumbnails = document.querySelectorAll(".thumbnails");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const arrow = document.querySelectorAll(".arrow");

previous.addEventListener('click', () => {
    slider(-1);
});
next.addEventListener('click', () => {
    slider(1);
});

let slide = 1;

function slider(n){ 
    show(slide += n);
}

function show(n) {
    let i;
    if( n > images.length) {
        slide = 1;
    }
    if( n < 1 ) {
        slide = images.length;
    }
    for( i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }
    images[slide - 1].style.display = "block";
}
