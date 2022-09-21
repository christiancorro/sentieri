mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aWFuY29ycm8iLCJhIjoiY2w2N3BuMHB1MGdnMTNybzlqbDN1cTZtbiJ9.8J71pX4O3VxqN8K-bA0K7w';
const mapElement = document.querySelector("#map");

let markers = [];

const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/christiancorro/cl7aceajq003015nqbznfhixi?optimize=true',
    zoom: 0.6,
    // zoom: 7.3,
    center: [11.367943927336322, 25.92176838392123],
    projection: 'globe'
});

const end = {
    // center: [74.5, 40],
    // zoom: 2
    center: [11.867943927336322, 46.12176838392123],
    zoom: 7.3,
    bearing: 0,
    pitch: 0
};

map.on('load', () => {
    // Set the default atmosphere style
    // map.setFog({});
    // map.addSource('mapbox-dem', {
    //     'type': 'raster-dem',
    //     'url': 'mapbox://mapbox.terrain-rgb'
    // });

    // map.setTerrain({
    //     'source': 'mapbox-dem',
    //     'exaggeration': 1.5
    // });






    // Center the map on the coordinates of any clicked circle from the 'circle' layer.
    map.on('click', 'circle', (e) => {
        // map.flyTo({
        //     center: e.features[0].geometry.coordinates,
        //     duration: 1000, // Animate over 12 seconds
        // });
    });

    // Change the cursor to a pointer when the it enters a feature in the 'circle' layer.
    map.on('mouseenter', 'circle', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'circle', () => {
        map.getCanvas().style.cursor = '';
    });



});




map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl());

getAllTrails(trails).then((trails) => {

    quantity.innerHTML = trails.length;
    quantity.parentElement.classList.add("show");

    let points = {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': []
        }
    };

    trails.forEach(trail => {
        let point = {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': []
            },
            'properties': {
                'title': '',
                'description': ''
            }
        };
        point.geometry.coordinates = trail.start_coords.reverse();
        point.properties.title = trail.title;
        points.data.features.push(point);
        const el = document.createElement('div');
        el.className = 'marker';
        // el.addEventListener('click', (e) => {
        //     map.flyTo({
        //         center: point.geometry.coordinates,
        //         duration: 600, // Animate over 12 seconds
        //         essential: true
        //     });
        // });

        let popup = new mapboxgl.Popup({ offset: 25 });

        popup.setHTML(
            `<a target = "_blank" href="${trail.url}">
                    <img src="${trail.imagesURL[0]}" alt="${trail.title}">
                    <h3>${trail.title}</h3>
                    <p>${point.properties.description}</p>
                    </a>`
        );

        let marker = new mapboxgl.Marker(el)
            .setLngLat(point.geometry.coordinates)
            .setPopup(popup)
            .addTo(map);

        marker.trail = trail;

        markers.push(marker);
    });

    console.log(markers);

    // map.addSource('points', points);
    // Add a circle layer
    // map.addLayer({
    //     'id': 'circle',
    //     'type': 'circle',
    //     'source': 'points',
    //     'paint': {
    //         'circle-color': '#4264fb',
    //         'circle-radius': 7,
    //         'circle-stroke-width': 1,
    //         'circle-stroke-color': '#ffffff'
    //     }
    // });

    console.log("Loaded");

    // map.flyTo({
    //     ...end, // Fly to the selected target
    //     duration: 0, // Animate over 12 seconds
    //     essential: true // This animation is considered essential with
    //     //respect to prefers-reduced-motion
    // });

    // setTimeout(() => {
    //     map.flyTo({
    //         ...end,
    //         zoom: 0.5, // Fly to the selected target
    //         duration: 10, // Animate over 12 seconds
    //         essential: true // This animation is considered essential with
    //         //respect to prefers-reduced-motion
    //     });
    // }, 3000);



    // setTimeout(() => {

    mapElement.classList.add("loaded");
    loading.classList.add("loaded");

    setTimeout(() => {
        map.flyTo({
            ...end, // Fly to the selected target
            duration: 6000, // Animate over 12 seconds
            essential: true // This animation is considered essential with
            //respect to prefers-reduced-motion
        });
    }, 2000);
    // }, 10);



});


// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
//     map.dragPan.disable();
//     map.scrollZoom.disable();
//     map.touchPitch.disable()
//     map.on('touchstart', function (e) {
//         var oe = e.originalEvent;
//         if (oe && 'touches' in oe) {
//             if (oe.touches.length > 1) {
//                 oe.stopImmediatePropagation();
//                 map.dragPan.enable();
//             } else {
//                 map.dragPan.disable();
//             }
//         }
//     });
// }
