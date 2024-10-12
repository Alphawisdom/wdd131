// Sample temple data structure
const temples = [
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
