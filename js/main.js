// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

// Function to dynamically check if currency converter server application is running
async function isServerAppRunning() {
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
}

// Function to apply padding values to divs with class project-description to even out bottom padding
function setPadding() {
  let elements = document.getElementsByClassName("project-description");
  for (let i = 2; i < elements.length; i++) {
    elements[i].style.paddingBottom = "30px";
  }
}

window.isServerAppRunning = isServerAppRunning();
window.setPadding = setPadding();
