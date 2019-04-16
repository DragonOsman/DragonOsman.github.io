// Function to dynamically check if currency converter server application is running
async function isServerAppRunning() {
  const displayInfo = document.getElementById("display-info");
  try {
    const response = await fetch("https://dragonosman.dynu.net:5501/");
    if (response.status >= 200 && response.status < 300) {
      displayInfo.textContent =
        "Server app is running (bold-faced text generated using JavaScript)";
    } else {
      displayInfo.textContent =
        "Something went wrong (bold-faced text generated using JavaScript)";
    }
  } catch (err) {
    console.log(err);
    displayInfo.textContent =
      "Server app is not running (bold-faced text generated using JavaScript)";
  }
}

const isRunningButton = document.querySelector("#isAppRunning");
isRunningButton.addEventListener("click", isServerAppRunning);
