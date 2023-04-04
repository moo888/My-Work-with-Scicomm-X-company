let ToggleDir = document.querySelector("#ar-dir");
let pad = document.querySelectorAll(".pe-5");
ToggleDir.onclick = function () {
    if(ToggleDir.id == "ar-dir"){
        document.documentElement.setAttribute("lang","ar");
        document.documentElement.setAttribute("dir","rtl");
        ToggleDir.id = "en-dir";
        document.querySelector(".oz-cont-he .sea-1 img").style.cssText = "left: 36px;right: unset";
        document.querySelector(".oz-cont-he .calend img").style.cssText = "left: 36px;right: unset";
        for(i=0;i<pad.length;i++){
            pad[i].classList.replace("ps-5","pe-5");
        }
    }
    else if (ToggleDir.id == "en-dir"){
        document.documentElement.setAttribute("lang","en");
        document.documentElement.setAttribute("dir","ltr");
        ToggleDir.id = "ar-dir"; 
        document.querySelector(".oz-cont-he .sea-1 img").style.cssText = "right: 36px;left: unset";
        document.querySelector(".oz-cont-he .calend img").style.cssText = "right: 36px;left: unset";
        for(i=0;i<pad.length;i++){
            pad[i].classList.replace("pe-5","ps-5");
        }
    }
}

let chang = document.querySelector(".he-pa .chang");
let nochang = document.querySelector(".he-pa .nochang");
let disbtn = document.querySelectorAll(".oz-cont-bo .col-lg-9 div.row div button");
nochang.onclick = () => {
    chang.classList.remove("active");
    nochang.classList.add("active");
    for(i=0;i<disbtn.length;i++){
        disbtn[i].style.cssText = "display:none"
    }
}
chang.onclick = () => {
    nochang.classList.remove("active");
    chang.classList.add("active");
    for(i=0;i<disbtn.length;i++){
        disbtn[i].style.cssText = "display:flex"
    }
}