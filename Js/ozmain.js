let ToggleDir = document.querySelector("#ar-dir");
let svg =  document.querySelectorAll(".oz-main-cont .row.col-lg-4 .row .py-4 span");
ToggleDir.onclick = function () {
    if(ToggleDir.id == "ar-dir"){
        document.documentElement.setAttribute("lang","ar");
        document.documentElement.setAttribute("dir","rtl");
        ToggleDir.id = "en-dir";
        for(i=0;i<svg.length;i++){
            svg[i].style.cssText = "padding-left: 10px;padding-right: 0px;";
        }
        document.querySelector(".oz-main-cont .row.col-lg-4 .row .pen").style.cssText = "justify-content: left;"
    }
    else if (ToggleDir.id == "en-dir"){
        document.documentElement.setAttribute("lang","en");
        document.documentElement.setAttribute("dir","ltr");
        ToggleDir.id = "ar-dir"; 
        for(i=0;i<svg.length;i++){
            svg[i].style.cssText = "padding-left: 0px;padding-right: 10px;";
        }    
        document.querySelector(".oz-main-cont .row.col-lg-4 .row .pen").style.cssText = "justify-content: right;"
    }
}