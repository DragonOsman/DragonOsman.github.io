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
  let resultText = document.getElementById("result-text");

  try {
    const response = await fetch("http://dragonosman.dynu.net:5501/");

    if (response.status >= 200 && response.status < 300) {
      resultText.textContent = "Server app is running";
    } else if (response.status >= 500) {
      resultText.textContent = "Server app ran into a problem";
    }
  } catch (err) {
    console.log(err);
    resultText.textContent =
      "Request cannot be sent to server app, either because it is not secure and/or because it is not running.";
  }
}

isServerAppRunning();
