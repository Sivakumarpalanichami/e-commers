
var sidenav = document.querySelector(".side-navbar");

function showNavBar() {
    sidenav.style.display = "block";
    setTimeout(() => {
        sidenav.style.left = "0"; // Slide in
    }, 10); // Small timeout for smooth transition
}

function closeNavBar() {
    sidenav.style.left = "-100%"; // Slide out
    setTimeout(() => {
        sidenav.style.display = "none"; // Hide after animation
    }, 300); // Match this duration with CSS transition
}
