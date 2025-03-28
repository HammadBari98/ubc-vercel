function openUserDropDown() {
    const dropdown = document.getElementById("user-dropdown");
    const isHidden = dropdown.classList.contains("hidden");
    if (isHidden) {
        dropdown.classList.remove("hidden");
        dropdown.classList.add("flex");
    } else {
        dropdown.classList.add("hidden");
        dropdown.classList.remove("flex");
    }
}