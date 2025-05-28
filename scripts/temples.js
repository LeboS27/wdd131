const currentYearElem = document.getElementById("currentyear");
if (currentYearElem) {
    currentYearElem.textContent = new Date().getFullYear();
}

const lastModifiedElem = document.getElementById("lastModified");
if (lastModifiedElem) {
    lastModifiedElem.textContent = "Last Updated: " + document.lastModified;
}

const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector(".nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        menuButton.textContent = menuButton.textContent === "☰" ? "✖" : "☰";
    });
}
