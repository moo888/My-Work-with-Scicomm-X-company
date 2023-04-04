let ToggleDir = document.querySelector("#ar-dir");
ToggleDir.onclick = function () {
    if(ToggleDir.id == "ar-dir"){
        document.documentElement.setAttribute("lang","ar");
        document.documentElement.setAttribute("dir","rtl");
        ToggleDir.id = "en-dir";
        }
    else if (ToggleDir.id == "en-dir"){
        document.documentElement.setAttribute("lang","en");
        document.documentElement.setAttribute("dir","ltr");
        ToggleDir.id = "ar-dir"; 
        }
    }
