// Handle Itinerary Form Submission
document.getElementById('itinerary-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const startDate = document.getElementById('start-date').value;
    const days = document.getElementById('days').value;
    const places = Array.from(document.getElementById('places').selectedOptions).map(option => option.value);

    let itineraryOutput = `<h3>Your Itinerary:</h3><p>Start Date: ${startDate}</p><ul>`;
    places.slice(0, days).forEach((place, index) => {
        itineraryOutput += `<li>Day ${index + 1}: ${place}</li>`;
    });
    itineraryOutput += `</ul>`;
    document.getElementById('itinerary-output').innerHTML = itineraryOutput;
});

// Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});
