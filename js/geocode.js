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


async function getRoute(start, end) {

    const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=false&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: 'GET' }
    );

    const json = await query.json();
    const route = json.routes[0];
    // const route = data.geometry.coordinates;
    // const geojson = {
    //     type: 'Feature',
    //     properties: {},
    //     geometry: {
    //         type: 'LineString',
    //         coordinates: route
    //     }
    // };

    return route;

}
