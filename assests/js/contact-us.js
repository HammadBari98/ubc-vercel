function handleMessage() {
    const overly = document.getElementById('messageOverly');
    const popup = document.getElementById('messagePopup');
    

    popup.classList.remove("hidden");
    overly.classList.remove("hidden");

    popup.classList.add("flex");
    overly.classList.add("flex");
    
}
function handleCloseAlert() {
    const overly = document.getElementById('messageOverly');
    const popup = document.getElementById('messagePopup');
    popup.classList.add("hidden");
    overly.classList.add("hidden");

    popup.classList.remove("flex");
    overly.classList.remove("flex");
    
}