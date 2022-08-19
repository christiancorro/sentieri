mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aWFuY29ycm8iLCJhIjoiY2w2N3BuMHB1MGdnMTNybzlqbDN1cTZtbiJ9.8J71pX4O3VxqN8K-bA0K7w';
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    // types: 'locality, place, country,region, postcode,neighborhood',
    placeholder: 'Ricerca la tua posizione',
    limit: 1,
    country: "it",
    language: "it",
    proximity: "ip",
    // types: "place",
    // fuzzyMatch: true
});

geocoder.addTo('#geocoder');

// Get the geocoder results container.
// const results = document.getElementById('result');



// Clear results container when search is cleared.
geocoder.on('clear', () => {
    // results.innerText = '';
});
