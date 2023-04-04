let ToggleDir = document.querySelector("#ar-dir");
let me = document.querySelectorAll(".me-3");
let ms = document.querySelectorAll(".ms-2");
ToggleDir.onclick = function () {
    if(ToggleDir.id == "ar-dir"){
        document.documentElement.setAttribute("lang","ar");
        document.documentElement.setAttribute("dir","rtl");
        ToggleDir.id = "en-dir";
        for(i=0;i<me.length;i++){
            me[i].classList.remove("ms-3");
            me[i].classList.add("me-3");
        }
        for(i=0;i<ms.length;i++){
            ms[i].classList.remove("ms-2");
            ms[i].classList.add("me-2");
        }
        document.querySelector(".oz-cont-he .sea-1 img").style.cssText = "left: 36px;right: unset";
    }
    else if (ToggleDir.id == "en-dir"){
        document.documentElement.setAttribute("lang","en");
        document.documentElement.setAttribute("dir","ltr");
        ToggleDir.id = "ar-dir"; 
        for(i=0;i<me.length;i++){
            me[i].classList.add("ms-3");
            me[i].classList.remove("me-3");
        }
        for(i=0;i<ms.length;i++){
            ms[i].classList.add("ms-2");
            ms[i].classList.remove("me-2");
        }
        document.querySelector(".oz-cont-he .sea-1 img").style.cssText = "right: 36px;left: unset";
    }
}