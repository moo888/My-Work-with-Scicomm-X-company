
/* Start Navbar */ 

let MainNavbar = document.querySelector(".main-navbar");
let Navbar = document.querySelector(".navbar-collapse");
let LogNavbar = document.querySelector(".navbar-brand");
let LinkNav = document.querySelectorAll(".nav-link");

//toglle Buttun Elements

let toglleBut = document.querySelector(".navbar button")
let bacNav = document.querySelector(".navbar-nav")

/* Toglle Button Background*/

toglleBut.addEventListener('click',() => {
    bacNav.classList.toggle("main-bac");
});


/* Transbarent and Padding Navbar When Scroll*/ 

window.addEventListener('scroll',() => {
    if(window.scrollY > 0){
        MainNavbar.classList.remove("bac-trans","pad-0");
        Navbar.classList.remove("bac-trans");
        LogNavbar.classList.remove("hidden");
        for (let i=1;i < LinkNav.length-1;i++) {
            LinkNav[i].classList.remove("color-tr")
        }
    }
    else if (window.scrollY == 0) {
        MainNavbar.classList.add("bac-trans","pad-0");
        Navbar.classList.add("bac-trans");
        LogNavbar.classList.add("hidden");
        for (let i=1;i < LinkNav.length-1;i++) {
            LinkNav[i].classList.add("color-tr")
        }
    }
});
if(window.scrollY > 0){
    MainNavbar.classList.remove("bac-trans","pad-0");
    Navbar.classList.remove("bac-trans");
    LogNavbar.classList.remove("hidden");
    for (let i=1;i < LinkNav.length-1;i++) {
        LinkNav[i].classList.remove("color-tr")
    }
}

// Start Running Animation Fade In Up

let fadeUp =  document.querySelectorAll(".animat-up"); //Calling the class in HTML
let fadeDown =  document.querySelectorAll(".animat-down"); //Calling the class in HTML
let fadeIn =  document.querySelectorAll(".animat-in"); //Calling the class in HTML
window.onscroll = function () {
    for(i=0;i<fadeUp.length;i++){
        if(window.scrollY >= fadeUp[i].offsetTop -400){
            fadeUp[i].classList.add("fadInUp");
            fadeUp[i].classList.remove("animat-up")
        }
    }
    for(i=0;i<fadeDown.length;i++){
        if(window.scrollY >= fadeDown[i].offsetTop -400){
            fadeDown[i].classList.add("fadInDown");
            fadeDown[i].classList.remove("animat-down")
        }
    }
    for(i=0;i<fadeIn.length;i++){
        if(window.scrollY >= fadeIn[i].offsetTop -400){
            fadeIn[i].classList.add("fadIn");
            fadeIn[i].classList.remove("animat-in")
        }
    }    
}
window.onload = function() {
    for(i=0;i<fadeUp.length;i++){
        if(window.scrollY >= fadeUp[i].offsetTop -400){
            fadeUp[i].classList.add("fadInUp");
            fadeUp[i].classList.remove("animat-up")
        }
    }
    for(i=0;i<fadeDown.length;i++){
        if(window.scrollY >= fadeDown[i].offsetTop -400){
            fadeDown[i].classList.add("fadInDown");
            fadeDown[i].classList.remove("animat-down")
        }
    }
    for(i=0;i<fadeIn.length;i++){
        if(window.scrollY >= fadeIn[i].offsetTop -400){
            fadeIn[i].classList.add("fadIn");
            fadeIn[i].classList.remove("animat-in")
        }
    }
};
// Change The Direction To The Page

// What We Will Change In This Page

let stat = document.querySelector(".wide-stat .wide-stat-content");
let ToggleDir = document.querySelector("#ar-dir");
let bars = document.querySelector(".navbar .navbar-expand-lg")
let boxes = document.querySelector(".features .boxes")
let boxe1 = document.querySelector(".features .boxes .box-1")
let boxe2 = document.querySelector(".features .boxes .box-2")
let boxe3 = document.querySelector(".features .boxes .box-3")
let boxe4 = document.querySelector(".features .boxes .box-4")
ToggleDir.onclick = function () {
    if(ToggleDir.id == "ar-dir"){
        document.documentElement.setAttribute("lang","ar");
        document.documentElement.setAttribute("dir","rtl");
        boxes.classList.add("boxesrtl");
        boxe1.classList.add("boxrtl-1");
        boxe2.classList.add("boxrtl-2");
        boxe3.classList.add("boxrtl-3");
        boxe4.classList.add("boxrtl-4");
        ToggleDir.id = "en-dir"; 
        stat.style.cssText = "left:50px";
        bars.style.cssText = "justify-content: end;";
    }
    else if (ToggleDir.id == "en-dir"){
        document.documentElement.setAttribute("lang","en");
        document.documentElement.setAttribute("dir","ltr");
        boxes.classList.remove("boxesrtl");
        boxe1.classList.remove("boxrtl-1");
        boxe2.classList.remove("boxrtl-2");
        boxe3.classList.remove("boxrtl-3");
        boxe4.classList.remove("boxrtl-4");
        ToggleDir.id = "ar-dir";
        stat.style.cssText = "left:-80px";
        bars.style.cssText = "justify-content: flex-start";
    }
}

/* End Navbar */ 

/* Start Show Team */

let SohwMore = document.querySelector("#showMore");
let showcont = document.querySelectorAll(".cont .box ");
SohwMore.onclick = function () {
    for (let i=1;i < showcont.length;i++) {
        if(showcont[i].classList.contains("hidden") == true){
            showcont[i].id = "visible";
            showcont[i].classList.remove("hidden");
            SohwMore.textContent = "Show Less";
        }
        else if (showcont[i].id == "visible"){
            showcont[i].classList.add("hidden");
            SohwMore.textContent = "Show All Memmbers";
            showcont[i].id = "";
        }
    }
};

/* End Show Team */ 

/* Start Show Overlay Of Information  Team */ 

let Overlay = document.querySelector("#box2");
let showOver = document.querySelector(".overlay");
Overlay.onclick = function () {
    showOver.classList.remove("hidden");
    document.querySelector(".over-content").classList.add("fadInDown");
};
showOver.onclick = function (){
    showOver.classList.add("hidden");
};

/* End Show Overlay Of Information  Team */ 

/* Start Show Overlay Of Information  Share To The Team */ 

let Share = document.querySelector(".share");
let OverCopy = document.querySelector("#over-copy");

/* Copy Link */

let copybut = document.querySelector("#linkcopy");
let doCopy = document.querySelector("#docopy");

Share.onclick = function () {
    OverCopy.classList.remove("hidden");
    document.querySelector(".over-content-two").classList.add("fadInDown");
};
OverCopy.onclick = function (e){
    OverCopy.classList.add("hidden");
};
/* End Show Overlay Of Information  Share To The Team */ 

/* Start Carousel Trackt*/
const gap = 32;

const carousel = document.getElementById("carousel"),
next = document.getElementById("next-slid-one"),
prev = document.getElementById("prev-slide-one");
item = document.querySelector(".item");
next.addEventListener("click", e => {
    carousel.scrollBy(item.offsetWidth + gap, 0);

});
prev.addEventListener("click", e => {
    carousel.scrollBy(-(item.offsetWidth + gap), 0);

});
let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

///////////////

const content = document.getElementById("content");

let initialPosition = null;
let moving = false;
let transform = 0;
let lastPageX = 0;
let transformValue = 0;
const gestureStart = (e) => {
    initialPosition = e.pageX;
    moving = true;
    const transformMatrix = window.getComputedStyle(content).getPropertyValue(`transform`);
    console.log(transformMatrix);
    if(transformMatrix != 'none'){
        transform = parseInt(transformMatrix.split(',')[4].trim());
    }
}

const gestureMove = (e) => {
    if(moving){
        const currentPosition = e.pageX;
        const diff = currentPosition - initialPosition;
        if(e.pageX - lastPageX > 0){
            if(transformValue > 0){
                return;
            }
        } else{
            if (Math.abs(transformValue) > content.offsetWidth){
                return;
            }
        }
        transformValue = parseInt(transform) + diff;
        content.style.transform = `translateX(${transform + diff}px)`;
    }
    lastPageX = e.pageX;
};
const gestureEnd = (e) => {
    moving = false;
}

if(window.content.PointerEvent){
    window.content.addEventListener('pointerdown',gestureStart);
    window.content.addEventListener('pointermove',gestureMove);
    window.content.addEventListener('pointerup',gestureEnd);
} else {
    window.content.addEventListener('mousedown',gestureStart);
    window.content.addEventListener('mousemove',gestureMove);
    window.content.addEventListener('mouseup',gestureEnd);
    window.content.addEventListener('touchdown',gestureStart);
    window.content.addEventListener('touchmove',gestureMove);
    window.content.addEventListener('touchup',gestureEnd);
}

/* End Carousel Trackt*/ 

/* Start Carousel Science*/
const gap2 = 16;

const carousel2 = document.querySelector(".carousel"),
next2 = document.getElementById("next-slid-two"),
prev2 = document.getElementById("prev-slide-two");
item2 = document.querySelector(".item-sec");
next2.addEventListener("click", e => {
    carousel2.scrollBy(item2.offsetWidth + gap2, 0);

});
prev2.addEventListener("click", e => {
    carousel2.scrollBy(-(item2.offsetWidth + gap2), 0);

});
let width2 = carousel2.offsetWidth;
window.addEventListener("resize", e => (width2 = carousel2.offsetWidth));

///////////////

const contentTwo = document.querySelector(".content-two");

/* End Carousel Trackt*/ 

