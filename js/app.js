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

//Add to cart
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const counter = document.querySelector("#counter");
const itemQty = document.querySelector(".itemQty");
const addToCart = document.querySelector(".addToCart");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cartContainer");

let count = 0;

function addCart(qty){
    counter.innerText = qty;
    itemQty.innerText = qty;
}

plus.addEventListener('click', () => {
    addCart(count++);
});

minus.addEventListener('click', () => {
    addCart(count--);
    if(count <= 1){
        count = 0;
    }
});

let cartIcon = false;
cart.addEventListener('click', () => {
    if(!cartIcon){
        cartList.style.display = "block";
        cartIcon = true;
    }else {
        cartList.style.display = "none";
        cartIcon = false;
    }
});