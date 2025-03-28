const popup = document.getElementById("accountCreatedPopup");
const overly = document.getElementById("accountCreatedOverly");
function handleCreatedPopup(){


    popup.classList.remove("flex");
    overly.classList.remove("flex");
    
    popup.classList.add("hidden");
    overly.classList.add("hidden");

}

// function hanldePopup(){
//     popup.classList.remove("hidden");
//     overly.classList.remove("hidden");
    
//     popup.classList.add("flex");
//     overly.classList.add("flex");
// }