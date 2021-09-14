let sesion1 = document.querySelector(".sesion1");
let sesion2 = document.querySelector(".sesion2");
window.addEventListener("scroll", function(){
    let value = window.scrollY;
    sesion1.style.marginLeft =  - value + "px";
    sesion2.style.marginRight =  - value + "px";
});