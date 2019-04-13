// On smaller screens keep only first link and CSS hamburger icon visible in navigation
// menu and hide the rest of it, until hamburger is clicked which would be when the rest
// of the navigation menu is shown
let mainNav = document.getElementById("js-menu");
const navBarToggle = document.getElementById("js-navbar-toggle");
navBarToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

// Function to dynamically check if currency converter server application is running
async function isServerAppRunning() {
  let button = document.getElementById("isrunning");
  button.addEventListener("click", function() {
    const displayInfo = document.getElementById("display-info");
    try {
      const response = await fetch("https://dragonosman.dynu.net:5501/");
      if (response.status >= 200 && response.status < 300) {
        displayInfo.textContent =
        "Server app is running (bold-faced text generated using JavaScript)";
      }
     } catch (err) {
       console.log(err);
       displayInfo.textContent =
       "Server app is not running (bold-faced text generated using JavaScript)";
      }
    });
  }
