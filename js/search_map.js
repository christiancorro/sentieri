// Filters
let filters = [];
const checkboxs = document.querySelectorAll('.filters input[type=checkbox]');

let showingMarkers = markers;

const maxDurationLimit = 12;
const maxElevationLimit = 2000;
const maxLengthLimit = 30;

const bigNumber = 100000;

let maxElevation = bigNumber, minElevation = 0, maxLength = bigNumber, minLength = 0, maxDuration = bigNumber, minDuration = 0;


checkboxs.forEach(function (checkbox) {
    checkbox.addEventListener('change', (event) => {

        if (event.currentTarget.checked) {
            // console.log("checked " + checkbox.value);
            filters.push(checkbox.value);
            // console.log(filters);
        } else {
            // console.log("not checked");
            filters = filters.filter(filter => filter !== checkbox.value)
            // console.log(filters);
        }



        updateMarkers();
    })
});


let includesAll = (array, target) => target.every(element => array.includes(element));
function checkTags(marker) {
    return includesAll(marker.trail.tags.concat(marker.trail.location).concat(marker.trail.difficulty), filters);
}

function checkSearch(marker) {
    let text = searchBar.value.toLowerCase();

    return text.length == 0 || (marker.trail.title.toLowerCase().includes(text) ||
        marker.trail.group.toLowerCase().includes(text) ||
        marker.trail.location.toLowerCase().includes(text) ||
        marker.trail.description.toLowerCase().includes(text));
}

function checkSliders(marker) {
    return (marker.trail.duration <= maxDuration && marker.trail.duration >= minDuration) &&
        (marker.trail.trail_length <= maxLength && marker.trail.trail_length >= minLength) &&
        (marker.trail.elevation_gain <= maxElevation && marker.trail.elevation_gain >= minElevation);
}

function checkMarker(marker) {
    if (checkTags(marker) && checkSearch(marker) && checkSliders(marker)) {
        return true;
    }
    return false;
}

function updateMarkers() {
    //
    showingMarkers = [];
    markers.forEach(marker => {
        if (checkMarker(marker)) {
            marker.addTo(map);
            showingMarkers.push(marker);
        } else {
            marker.remove();
        }
    });

    updateQuantity();

}

function updateQuantity() {
    quantity.classList.add("changed");
    let value = showingMarkers.length;
    quantity.innerHTML = value;

    setTimeout(() => {
        quantity.classList.remove("changed");
    }, 200);

    if (value == 0) {
        no_result.classList.add("show")
    } else {
        no_result.classList.remove("show")
    }
}


searchBar.addEventListener("keyup", (e) => {
    updateMarkers();
});


var slider_duration = document.getElementById('slider-duration');
var slider_trail_length = document.getElementById('slider-trail-length');
var slider_elevation_gain = document.getElementById('slider-elevation-gain');

noUiSlider.create(slider_duration, {
    start: [0, 12],
    connect: true,
    step: 1,
    // tooltips: true,
    range: {
        'min': 0,
        'max': 12
    },
    format: wNumb({
        decimals: 0
    }),
});

noUiSlider.create(slider_elevation_gain, {
    start: [0, 2000],
    connect: true,
    step: 100,
    // tooltips: true,
    range: {
        'min': 0,
        'max': 2000
    },
    format: wNumb({
        decimals: 0
    }),
});

noUiSlider.create(slider_trail_length, {
    start: [0, 30],
    connect: true,
    step: 1,
    // tooltips: true,
    range: {
        'min': 0,
        'max': 30
    },
    format: wNumb({
        decimals: 0
    }),
});

const duration_filter_max = document.querySelector(".max-duration");
const duration_filter_min = document.querySelector(".min-duration");
const duration_plus = document.querySelector(".plus-duration");

const trail_length_filter_max = document.querySelector(".max-trail-length");
const trail_length_filter_min = document.querySelector(".min-trail-length");
const trail_length_plus = document.querySelector(".plus-trail-length");

const elevation_gain_filter_max = document.querySelector(".max-elevation-gain");
const elevation_gain_filter_min = document.querySelector(".min-elevation-gain");
const elevation_gain_plus = document.querySelector(".plus-elevation-gain");


function bindSlider(slider, minElement, maxElement, plusElement, max) {
    slider.noUiSlider.on('update', function (values, handle) {
        // console.log(values);

        minElement.value = values[0];
        maxElement.value = values[1];

        if (values[1] >= max) {
            plusElement.classList.add("active");
            if (loading.classList.contains("loaded"))
                // filter([slider.noUiSlider.get(true)[0], 10000]);
                filterSliders();
        } else {
            plusElement.classList.remove("active");
            if (loading.classList.contains("loaded"))
                // filter(slider.noUiSlider.get(true));
                filterSliders();
        }
    });
}

bindSlider(slider_duration, duration_filter_min, duration_filter_max, duration_plus, maxDurationLimit);
bindSlider(slider_trail_length, trail_length_filter_min, trail_length_filter_max, trail_length_plus, maxLengthLimit);
bindSlider(slider_elevation_gain, elevation_gain_filter_min, elevation_gain_filter_max, elevation_gain_plus, maxElevationLimit);


function bindInputSlider(inputMin, inputMax, slider) {
    inputMax.addEventListener('change', function (event) {
        slider.noUiSlider.set([slider.noUiSlider.get(true)[0], this.value]);
    });

    inputMin.addEventListener('change', function (event) {
        slider.noUiSlider.set([this.value, slider.noUiSlider.get(true)[1]]);
    });
}

bindInputSlider(duration_filter_min, duration_filter_max, slider_duration);
bindInputSlider(trail_length_filter_min, trail_length_filter_max, slider_trail_length);
bindInputSlider(elevation_gain_filter_min, elevation_gain_filter_max, slider_elevation_gain);



function filterSliders() {
    console.log("Filter");
    minDuration = duration_filter_min.value;
    maxDuration = duration_filter_max.value;
    maxDuration = maxDuration >= maxDurationLimit ? 10000 : maxDuration;

    minElevation = elevation_gain_filter_min.value;
    maxElevation = elevation_gain_filter_max.value;
    maxElevation = maxElevation >= maxElevationLimit ? 10000 : maxElevation;

    minLength = trail_length_filter_min.value;
    maxLength = trail_length_filter_max.value;
    maxLength = maxLength >= maxLengthLimit ? 10000 : maxLength;


    updateMarkers();
}
