// star hover
let star = document.querySelectorAll(".star");
let starcon = document.querySelectorAll(".fa-star");
for(i=0;i<star.length;i++){
    star[i].onclick = function (){
        console.log(starcon[i]);
    }
}

// show clandAR
let inputShowform = document.querySelector("#input_from");
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
// show more filter
let filt = document.querySelector(".filt");
let dis = document.querySelector(".display-none");
let clos = document.querySelector(".display-none .colse");
filt.onclick = function () {
    if(dis.classList.contains("hidden")){
        dis.classList.remove("hidden")
    }
    else{
        dis.classList.add("hidden")
    }
}
