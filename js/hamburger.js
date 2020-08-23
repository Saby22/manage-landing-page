const hamburger=document.querySelector(".nav-hamburger");
const cross=document.querySelector(".nav-cross");
const overlay=document.querySelector(".gradient-overlay");
const mobileNav=document.querySelector(".mobile-nav");

hamburger.addEventListener("click",function (event){
    overlay.classList.toggle("gradient-overlay-active");
    mobileNav.classList.toggle("mobile-nav-active");
    hamburger.style.display="none";
    cross.style.display="block";
    document.getElementsByTagName("body")[0].style.overflow="hidden";
});

cross.addEventListener("click",function (event){
    overlay.classList.toggle("gradient-overlay-active");
    mobileNav.classList.toggle("mobile-nav-active");
    hamburger.style.display="block";
    cross.style.display="none";
    document.getElementsByTagName("body")[0].style.overflow="visible";
});