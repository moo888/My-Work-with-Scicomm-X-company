let MainNavbar = document.querySelector(".main-navbar");
let Navbar = document.querySelector(".navbar-collapse");
window.addEventListener('scroll',() => {
    if(window.scrollY > 0){
        MainNavbar.classList.remove("bac-trans","pad-0");
        Navbar.classList.remove("bac-trans");
    }
    else if (window.scrollY == 0) {
        MainNavbar.classList.add("bac-trans","pad-0");
        Navbar.classList.add("bac-trans");
    }
});
if(window.scrollY > 0){
    MainNavbar.classList.remove("bac-trans","pad-0");
    Navbar.classList.remove("bac-trans");
}

let toglleBut = document.querySelector(".navbar button")
let bacNav = document.querySelector(".navbar-nav")

toglleBut.addEventListener('click',() => {
    bacNav.classList.toggle("main-bac");
    document.querySelector(".e-d").classList.toggle("main-bac");
});

let ToggleDir = document.querySelector("#en-dir");
let rad = document.querySelectorAll(".rad");
let lab = document.querySelectorAll(".lab");
let mar5 = document.querySelectorAll(".ms-5")
ToggleDir.onclick = function () {
    if(ToggleDir.id == "ar-dir"){
        document.documentElement.setAttribute("lang","ar");
        document.documentElement.setAttribute("dir","rtl");
        ToggleDir.id = "en-dir";
        for(i=0;i<rad.length;i++){
            rad[i].style.cssText = "margin-left:50px;margin-right:0px";
        }
        for(i=0;i<lab.length;i++){
            lab[i].style.cssText = "margin-left: 0px,margin-right: 45px";
        }
        for(i=0;i<mar5.length;i++){
            mar5[i].classList.replace("me-5","ms-5"); 
        }
        document.querySelector(".cale").style.cssText = "border-left: 1px solid #2f374980;border-right:none;padding-left:20px;padding-right:0px";
    }
    else if (ToggleDir.id == "en-dir"){
        document.documentElement.setAttribute("lang","en");
        document.documentElement.setAttribute("dir","ltr");
        ToggleDir.id = "ar-dir";
        for(i=0;i<rad.length;i++){
            rad[i].style.cssText = "margin-left:0px;margin-right:50px";
        }
        for(i=0;i<lab.length;i++){
            lab[i].style.cssText = "margin-right: 0px;margin-left: 45px";
        }
        for(i=0;i<mar5.length;i++){
            mar5[i].classList.replace("ms-5","me-5"); 
        }
        document.querySelector(".cale").style.cssText = "border-right: 1px solid #2f374980;border-left:none;padding-left:0;padding-right:20px";
    }
}

let inputShowform = document.querySelector("#input_from");

let inputShowend = document.querySelector("#input_to");


inputShowform.onclick = () =>{

    if (inputShowform.classList.contains("show")){
        document.querySelector(".picker .picker__holder").style.cssText = "display:flex";
        inputShowform.classList.remove('show');
    }
    else if (!(inputShowform.classList.contains("show")==true)){
        document.querySelector(".picker .picker__holder").style.cssText = "display:none";
        inputShowform.classList.add('show');
    }
}

inputShowend.onclick = () =>{

    if (inputShowend.classList.contains("showtwo")){
        document.querySelector(".picker--opened .picker__holder").style.cssText = "display:flex";
        inputShowend.classList.remove('showtwo');
    }
    else if (!(inputShowform.classList.contains("showtwo")==true)){
        document.querySelector(".picker--opened .picker__holder").style.cssText = "display:none";
        inputShowend.classList.add('showtwo');
    }
    console.log(document.querySelector(".picker__holder") + "picker")
}