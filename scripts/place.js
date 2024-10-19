// Display current year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Calculate Wind Chill
function calculateWindChill(temp, windSpeed) {
    return (
        35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(2);
}

// Get temperature and wind speed
const temp = 10; // °C
const windSpeed = 5; // km/h

// Check if wind chill can be calculated
if (temp <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById('windChill').textContent = windChill + " °C";
} else {
    document.getElementById('windChill').textContent = "N/A";
}
