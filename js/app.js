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

function currentSlide(n){
    show(slide = n);
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
    for(i = 0; i < thumbnails.length; i++){
        thumbnails[i].classList = thumbnails[i].classList.remove("thumbnails");
    }
    images[slide - 1].style.display = "block";
    thumbnails[slide - 1].classList.add("thumbnails_active");
    console.log(thumbnails);
}

//Add to cart
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const counter = document.querySelector("#counter");
const itemQty = document.querySelector(".itemQty");
const addToCartBtn = document.querySelector(".addToCart");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cartContainer");

let count = 0;
let totalQty;

function addCart(qty){
    totalQty = qty;
    counter.innerText = totalQty;
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
    cartList.style.display = "block";
    if(!cartIcon){
        cartIcon = true;
    }else {
        cartList.style.display = "none";
        cartIcon = false;
    }
});

addToCartBtn.addEventListener('click', () => {
    addList();
});

function addList () {
    itemQty.innerText = totalQty;
    counter.innerText = 0;
    //

    //add div
    const item = document.querySelector('.items');
    item.style.display = "flex";

    //Hide "your cart is empty"
    empty.style.display = "none";
}

const empty = document.querySelector(".empty");
const deleteBtn = document.querySelector(".delete");
const checkoutBtn = document.querySelector(".checkout");

deleteBtn.addEventListener('click', deleteCart);

function deleteCart(){
    deleteBtn.parentElement.remove();
    checkoutBtn.remove();
    empty.style.display = "flex";
}