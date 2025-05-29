document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(2);
}

function updateWindChill() {
    const chill = document.getElementById("chill");
    if (temp <= 10 && speed > 4.8) {
        chill.textContent = `${calculateWindChill(temp, speed)} °C`;
    } else {
        chill.textContent = "N/A";
    }
}

updateWindChill();
