// Sample temple data structure
const temple = [
    {
        name: "Temple 1",
        location: "Location 1",
        details: "This is a brief description of Temple 1."
    },
    {
        name: "Temple 2",
        location: "Location 2",
        details: "This is a brief description of Temple 2."
    },
    {
        name: "Temple 3",
        location: "Location 3",
        details: "This is a brief description of Temple 3."
    }
];

// Function to render temples on the page
function renderTemples() {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear existing content

    temples.forEach((temple, index) => {
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card');

        templeCard.innerHTML = `
            <h2>${temple.name}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p class="details">${temple.details}</p>
            <button onclick="toggleDetails(${index})">Toggle Details</button>
        `;
        container.appendChild(templeCard);
    });
}

// Function to toggle the display of temple details
function toggleDetails(index) {
    const templeDetails = document.querySelectorAll('.details')[index];
    templeDetails.style.display = templeDetails.style.display === 'none' ? 'block' : 'none';
}

// Call the function to display temples on page load
document.addEventListener('DOMContentLoaded', renderTemples);

// Temple Data Array with three additional temple objects added
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Brigham City Utah",
        location: "Brigham City, Utah, United States",
        dedicated: "2012, September, 23",
        area: 36000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brigham-city-utah/400x250/brigham_city_utah_temple_3.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 17",
        area: 25785,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos_aires_argentina_temple.jpg"
    },
    {
        templeName: "Provo City Center Utah",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85628,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center-utah/400x250/provo_city_center_temple.jpg"
    }
];

// Function to dynamically create a temple card for each temple
function createTempleCard(temple) {
    const card = document.createElement('div');
    card.className = "temple-card";

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} in ${temple.location}`;
    img.loading = "lazy";

    const name = document.createElement('h2');
    name.textContent = temple.templeName;

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    card.append(img, name, location, dedicated, area);
    return card;
}

// Function to display the temples
function displayTemples(filteredTemples) {
    const container = document.getElementById('templeContainer');
    container.innerHTML = ""; // Clear previous content
    filteredTemples.forEach(temple => {
        container.appendChild(createTempleCard(temple));
    });
}

// Filter functions
function displayAll() {
    displayTemples(temples);
}

function filterOld() {
    const oldTemples = temples.filter(temple => new Date(temple.dedicated) < new Date("1900-01-01"));
    displayTemples(oldTemples);
}

function filterNew() {
    const newTemples = temples.filter(temple => new Date(temple.dedicated) > new Date("2000-01-01"));
    displayTemples(newTemples);
}

function filterLarge() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
}

function filterSmall() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
}

// Dynamic Footer Date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Initial Load
displayAll();
