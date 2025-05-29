const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: "1893-04-06",
        area: 253015,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-49132-main.jpg"
    },
    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019-03-10",
        area: 41010,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-30060-main.jpg"
    },
    {
        name: "Laie Hawaii Temple",
        location: "Laie, Hawaii",
        dedicated: "1919-11-27",
        area: 42320,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7739-main.jpg"
    },
    {
        name: "Johannesburg Temple",
        location: "Johannesburg, South Africa",
        dedicated: "1985-08-24",
        area: 19860,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-7732-main.jpg"
    },
    {
        name: "Harare Zimbabwe Temple",
        location: "Harare, Zimbabwe",
        dedicated: "2024-02-18",
        area: 17600,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/harare-zimbabwe-temple/harare-zimbabwe-temple-94241-main.jpg"
    },
    {
        name: "Paris France Temple",
        location: "Paris, France",
        dedicated: "2017-05-21",
        area: 44175,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-17006-main.jpg"
    }
];

const templeContainer = document.getElementById("templeContainer");

// Display temples
function displayTemples(templesList) {
    templeContainer.innerHTML = ""; // Clear existing
    templesList.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("card");
        card.innerHTML = `
        <h2>${temple.name}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
      `;
        templeContainer.appendChild(card);
    });
}

// Filter function
function filterTemples(category) {
    let filtered = temples;

    switch (category) {
        case "old":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
            break;
        case "new":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;
        case "home":
        default:
            filtered = temples;
    }

    displayTemples(filtered);
}

// Footer: Last modified
document.getElementById("lastModified").textContent = document.lastModified;

// Initial display
filterTemples("home");
  