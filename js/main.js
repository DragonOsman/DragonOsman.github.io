// On smaller screens keep only first link and CSS hamburger icon visible in navigation
// menu and hide the rest of it, until hamburger is clicked which would be when the rest
// of the navigation menu is shown
let mainNav = document.getElementById("js-menu");
const navBarToggle = document.getElementById("js-navbar-toggle");
navBarToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});
