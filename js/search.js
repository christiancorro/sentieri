
// searchBar.addEventListener("focus", setCardSearchMode);
// searchBar.addEventListener("focusout", setCardSearchModeOff);


async function setCardSearchMode() {
    // console.log("focus");
    cards.forEach(card => {
        card.html.classList.add("search-mode");
    });
}

async function setCardSearchModeOff() {
    // console.log("focus");
    cards.forEach(card => {
        card.html.classList.remove("search-mode");
    });
}




// Filters
let filters = [];
const checkboxs = document.querySelectorAll('.filters input[type=checkbox]')

checkboxs.forEach(function (checkbox) {
    checkbox.addEventListener('change', (event) => {
        let counter = 0;
        if (event.currentTarget.checked) {
            // console.log("checked " + checkbox.value);
            filters.push(checkbox.value);
            // console.log(filters);
        } else {
            // console.log("not checked");
            filters = filters.filter(filter => filter !== checkbox.value)
            // console.log(filters);
        }



        cards.forEach(card => {

            let matches = 0;



            filters.forEach(filter => {
                card.trail.tags.forEach(tag => {
                    if (tag.toLowerCase() === filter.toLowerCase()) {
                        matches++;
                    }
                });
            });

            if (matches == filters.length) {
                card.html.classList.remove("hide");

            } else {
                counter++
                card.html.classList.add("hide");
            }


            if (card.trail.tags.length == 0) {
                card.html.classList.add("hide");
                // counter++;
            }

            if (filters.length == 0) {
                card.html.classList.remove("hide");
            }


            if (counter >= cards.length) {
                no_result.classList.add("show");
                // orderby_container.classList.add("hide");
            } else {
                no_result.classList.remove("show");
                orderby_container.classList.remove("hide");
            }

            updateQuantity(counter);

        });
    })
});



async function updateQuantity(counter = 0) {
    quantity.classList.add("changed");
    quantity.innerHTML = "" + cards.length - counter;

    setTimeout(() => {
        quantity.classList.remove("changed");
    }, 200);
}










// Search

searchBar.addEventListener("keyup", search);

async function search() {
    let text = this.value.toLowerCase();
    let counter = 0;

    cards.forEach(card => {
        if (card.trail.title.toLowerCase().includes(text)
            ||
            card.trail.group.toLowerCase().includes(text)
            ||
            card.trail.location.toLowerCase().includes(text)) {
            card.html.classList.remove("hide");

        } else {
            card.html.classList.add("hide");
            counter++;
        }
    });

    // console.log(counter);
    // quantity.innerHTML = "" + cards.length - counter;
    updateQuantity(counter);

    if (counter == cards.length) {
        no_result.classList.add("show")
    } else {
        no_result.classList.remove("show")
    }
}


let toggleFilters = document.querySelector(".toggle-filters");
let other_filters = document.querySelector(".other-filters");

toggleFilters.addEventListener("click", function () {
    toggleFilters.classList.toggle("opened");
    other_filters.classList.toggle("opened");
})








// Orderby

// console.log(orderby.value);

async function updateMain() {
    //Remove cards
    mainArea.innerHTML = "";

    // Add cards
    cards.forEach(function (card, i) {
        mainArea.appendChild(card.html);

        setTimeout(() => {

            card.html.classList.remove("hide");
        }, 200);
    });
}

orderby.addEventListener("change", function () {
    // console.log(this.value);

    sortCards();
    updateMain();
});

async function sortCards() {

    // Order asc
    console.log(orderby.value);
    position_container.classList.remove("show");
    switch (orderby.value) {
        case "date":
            cards.sort((card1, card2) => (card1.trail.id < card2.trail.id) ? 1 : -1)
            break;

        case "length":
            cards.sort((card1, card2) => (card1.trail.trail_length < card2.trail.trail_length) ? 1 : -1)
            break;

        case "duration":
            cards.sort((card1, card2) => (card1.trail.duration < card2.trail.duration) ? 1 : -1)
            break;

        case "max_altitude":
            cards.sort((card1, card2) => (card1.trail.max_altitude < card2.trail.max_altitude) ? 1 : -1)
            break;

        case "elevation_gain":
            cards.sort((card1, card2) => (card1.trail.elevation_gain < card2.trail.elevation_gain) ? 1 : -1)
            break;

        case "difficulty":
            cards.sort((card1, card2) => (card1.trail.difficulty < card2.trail.difficulty) ? 1 : -1)
            break;

        case "distance":
            manageDistanceCalculation();
            cards.sort((card1, card2) => (card1.trail.distance < card2.trail.distance) ? 1 : -1)
            break;


        default:
            return;
    }
    if (!order.classList.contains("desc")) {
        cards.reverse();
    }
}


function manageDistanceCalculation() {
    console.log(position_container.classList);

    if (!position_container.classList.contains("show")) {
        position_container.classList.add("show");

    }

    if (position.value.length > 0) {
        return;
    } else {
        position.focus();
        cards.forEach(card => {
            card.html.querySelector(".distance").classList.remove("show");
        });
    }
}


order.addEventListener("click", function () {
    this.classList.toggle("desc");

    sortCards();
    updateMain();

});


// position.addEventListener("focus", event => {
//     position_container.classList.add("searching");
// });

// position.addEventListener("focusout", event => {
//     position_container.classList.remove("searching");
// });






var slider_duration = document.getElementById('slider-duration');
var slider_trail_length = document.getElementById('slider-trail-length');
var slider_elevation_gain = document.getElementById('slider-elevation-gain');

noUiSlider.create(slider_duration, {
    start: [1, 10],
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
    start: [300, 1500],
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
    start: [5, 20],
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


function bindSlider(slider, minElement, maxElement, plusElement, max, filter) {
    slider.noUiSlider.on('update', function (values, handle) {
        // console.log(values);

        minElement.value = values[0];
        maxElement.value = values[1];

        if (values[1] >= max) {
            plusElement.classList.add("active");
            if (loading.classList.contains("loaded"))
                filter([slider.noUiSlider.get(true)[0], 10000]);
        } else {
            plusElement.classList.remove("active");
            if (loading.classList.contains("loaded"))
                filter(slider.noUiSlider.get(true));
        }
    });
}

bindSlider(slider_duration, duration_filter_min, duration_filter_max, duration_plus, 12, filterDuration);
bindSlider(slider_trail_length, trail_length_filter_min, trail_length_filter_max, trail_length_plus, 30, filterTrailLength);
bindSlider(slider_elevation_gain, elevation_gain_filter_min, elevation_gain_filter_max, elevation_gain_plus, 2000, filterElevationGain);


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


async function filterDuration([min, max]) {

    let counter = 0;

    console.log("Filter Duration");

    cards.forEach(card => {
        if (card.trail.duration <= max && card.trail.duration >= min) {
            card.html.classList.remove("hide");
        } else {
            card.html.classList.add("hide");
            counter++;
        }
    });

    updateQuantity(counter);

    if (counter == cards.length) {
        // no_result.classList.add("show")
    } else {
        no_result.classList.remove("show")
    }
}

async function filterTrailLength([min, max]) {

    console.log("Filter Length");

    let counter = 0;

    cards.forEach(card => {
        if (card.trail.trail_length <= max && card.trail.trail_length >= min) {
            card.html.classList.remove("hide");
        } else {
            card.html.classList.add("hide");
            counter++;
        }
    });

    updateQuantity(counter);

    if (counter == cards.length) {
        // no_result.classList.add("show")
    } else {
        no_result.classList.remove("show")
    }
}

async function filterElevationGain([min, max]) {

    console.log("Filter Elevation Gain");

    let counter = 0;

    cards.forEach(card => {
        if (card.trail.elevation_gain <= max && card.trail.elevation_gain >= min) {
            card.html.classList.remove("hide");
        } else {
            card.html.classList.add("hide");
            counter++;
        }
    });

    updateQuantity(counter);

    if (counter == cards.length) {
        // no_result.classList.add("show")
    } else {
        no_result.classList.remove("show")
    }
}


geocoder.on('result', (e) => {
    console.log(JSON.stringify(e.result, null, 2));

    var options = {
        units: 'kilometers'
    };

    let from = e.result.center.reverse();

    cards.forEach(card => {
        let to = card.trail.start_coords;
        console.log("From: " + from + "\nTo: " + to);
        let distance = turf.distance(from, to, options);

        console.log("Distance: " + distance.toFixed([2]) + " km");

        console.log(card.html.querySelector(".distance-value"));
        let distance_value = card.html.querySelector(".distance-value");
        distance_value.innerHTML = distance.toFixed([0]);
        distance_value.parentElement.classList.add("show");
        card.trail.distance = distance;

    });

    // Sort
    sortCards();
    updateMain();
});
