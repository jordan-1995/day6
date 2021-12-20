let navList = document.getElementById("nav-list");
let toggleImg = document.getElementById("toggle");
let cartLogo = document.getElementById("cart-logo");
let cartContainer = document.getElementById("cart-container");
const sliderLeft = document.getElementById("prevBtn");
const sliderRight = document.getElementById("nxtBtn");
const imageSlider = document.querySelectorAll(".main-image");
const mainImage = document.querySelectorAll(".main-image img");
const prodMinus = document.getElementById("product-minus");
const prodPlus = document.getElementById("product-plus");
const addToCart = document.getElementById("add-cart");
let productPrice = document.getElementById("product-price");
let productCartCount = document.getElementById("products-count");
let totalPrice = document.getElementById("total-price");
let sellingPrice = 125;
let productMainCount = document.getElementById("product-count");
const deleteFromCart = document.getElementById("delete-icon");

let productCount = 0;
var totalSlides = mainImage.length;

let counter = 1;
const size = mainImage[0].clientWidth;

// imageSlider.style.transform = 'translateX(' + (size * counter) + 'px)';

function toggleClick(){

    navList.classList.toggle("active");
    if(toggleImg.src.match("/images/icon-menu.svg")){
        toggleImg.src = "/images/icon-close.svg";
    }
    else if(toggleImg.src.match("/images/icon-close.svg")){
        toggleImg.src = "/images/icon-menu.svg";
    }
}

function cartClick(){
    cartContainer.classList.toggle("active");
}

sliderRight.addEventListener('click', ()=>{
    mainImage.forEach((slide) => {
        slide.classList.remove("active");
    })

    counter++;
    console.log(totalSlides)
    if(counter>(totalSlides-1)){
        counter = 0;
    }
    console.log(counter)
    mainImage[counter].classList.add("active");


})

sliderLeft.addEventListener('click', ()=>{
    console.log(counter)
    mainImage.forEach((slide) => {
        slide.classList.remove("active");
    })

    counter--;
    if(counter < 0){
        counter = totalSlides - 1;
        console.log(counter);
    }
    mainImage[counter].classList.add("active");
})

prodPlus.addEventListener('click', ()=>{
    productCount++;
    console.log(productCount);
    productMainCount.innerText = productCount;
    addToCart.addEventListener('click', ()=>{
        productCartCount.innerText = productCount;
        productPrice.innerHTML = "$" + sellingPrice;
        totalPrice.innerHTML = "$" + productCount * sellingPrice;
    })
})

prodMinus.addEventListener('click', ()=>{
    if(productCount==0){
        productCount=0;
    }
    else{
        productCount--;
        console.log(productCount);
    }
    productMainCount.innerText = productCount;
    addToCart.addEventListener('click', ()=>{
        productCartCount.innerText = productCount;
        productPrice.innerHTML = "$" + sellingPrice;
        totalPrice.innerHTML = "$" + productCount * sellingPrice;
    })
})

deleteFromCart.addEventListener('click', () => {
    productCartCount.innerText = 0;
        productPrice.innerHTML = "$" + sellingPrice;
        totalPrice.innerHTML = 0;
})