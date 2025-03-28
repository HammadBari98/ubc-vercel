function handleAlert() {
    const overly = document.getElementById('alertOverly');
    const popup = document.getElementById('alertPopup');
    

    popup.classList.remove("hidden");
    overly.classList.remove("hidden");

    popup.classList.add("flex");
    overly.classList.add("flex");
    
}
function handleCloseAlert() {
    const overly = document.getElementById('alertOverly');
    const popup = document.getElementById('alertPopup');
    popup.classList.add("hidden");
    overly.classList.add("hidden");

    popup.classList.remove("flex");
    overly.classList.remove("flex");
    
}