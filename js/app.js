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

thumbnails.forEach(btn => {
    btn.addEventListener('click', () => {
        slide = btn.dataset.id;
        show(slide);
    });
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
    for(i = 0; i < thumbnails.length; i++){
        thumbnails[i].classList.remove("thumbnails_active");
    }
    images[slide - 1].style.display = "block";
    thumbnails[slide - 1].classList += " thumbnails_active";
}

//Clone Image Slider. This will appear if Big Image Slider will be click.
const cloneImages = document.querySelectorAll(".cl-image");
const cloneThumbnails = document.querySelectorAll(".cl-thumbnails");
const clonePrev = document.querySelector(".cl-prev");
const cloneNext = document.querySelector(".cl-next");
const cloneClose = document.querySelector(".close-slider");
const cloneOpen = document.querySelector(".clone");
const cloneCard = document.querySelector(".clone-card");

let clone = true;

cloneOpen.addEventListener('click', () => {
    cloneCard.style.display = "flex";
    clone = false;
});

cloneClose.addEventListener('click', () => {
    cloneCard.style.display = "flex";
    clone = true;
});


clonePrev.addEventListener('click', () => {
    cloneSlider(-1);
});
cloneNext.addEventListener('click', () => {
    cloneSlider(1);
});

cloneThumbnails.forEach(btn => {
    btn.addEventListener('click', () => {
        cloneSlide = btn.dataset.id;
        cloneShow(cloneSlide);
    });
});

let cloneSlide = 1;

function cloneSlider(n){ 
    cloneShow(cloneSlide += n);
}

function cloneShow(n) {
    let i;
    if( n > cloneImages.length) {
        cloneSlide = 1;
    }
    if( n < 1 ) {
        cloneSlide = cloneImages.length;
    }
    for( i = 0; i < cloneImages.length; i++){
        cloneImages[i].style.display = "none";
    }
    for(i = 0; i < cloneThumbnails.length; i++){
        cloneThumbnails[i].classList.remove("cl_active");
    }
    cloneImages[cloneSlide - 1].style.display = "block";
    cloneThumbnails[cloneSlide - 1].classList += " cl_active";
}

//Add to cart
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const counter = document.querySelector("#counter");
const itemQty = document.querySelector(".itemQty");
const addToCartBtn = document.querySelector(".addToCart");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cartContainer");
const amount = document.querySelector(".amount");

let count = 0;
let totalQty;
let price = 125;

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
    // const total = document.querySelector("#total");
    let total = price * totalQty;
    
    amount.innerText = `$${price.toFixed(2)} x ${totalQty} $${total.toFixed(2)}`;
    //add div
    const item = document.querySelector('.items');
    item.style.display = "flex";

    //Hide "your cart is empty"
    empty.style.visibility = "hidden";
    count = 0;
}

const empty = document.querySelector(".empty");
const deleteBtn = document.querySelector(".delete");
const checkoutBtn = document.querySelector(".checkout");

deleteBtn.addEventListener('click', deleteCart);

function deleteCart(){
    deleteBtn.parentElement.remove();
    checkoutBtn.remove();
    empty.style.visibility = "visible";
    itemQty.innerText -= totalQty;
}