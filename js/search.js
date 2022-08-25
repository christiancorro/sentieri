
// searchBar.addEventListener("focus", setCardSearchMode);
// searchBar.addEventListener("focusout", setCardSearchModeOff);

let showingCards = cards;

const maxDurationLimit = 12;
const maxElevationLimit = 2000;
const maxLengthLimit = 30;

const bigNumber = 100000;

let maxElevation = bigNumber, minElevation = 0, maxLength = bigNumber, minLength = 0, maxDuration = bigNumber, minDuration = 0;

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
const checkboxs = document.querySelectorAll('.filters input[type=checkbox]');

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



        updateCards();
    })
});

let includesAll = (array, target) => target.every(element => array.includes(element));


function checkTags(card) {
    return includesAll(card.trail.tags.concat(card.trail.location).concat(card.trail.difficulty), filters);
}

function checkSearch(card) {
    let text = searchBar.value.toLowerCase();

    return text.length == 0 || (card.trail.title.toLowerCase().includes(text) ||
        card.trail.group.toLowerCase().includes(text) ||
        card.trail.location.toLowerCase().includes(text) ||
        card.trail.description.toLowerCase().includes(text));
}

function checkSliders(card) {
    return (card.trail.duration <= maxDuration && card.trail.duration >= minDuration) &&
        (card.trail.trail_length <= maxLength && card.trail.trail_length >= minLength) &&
        (card.trail.elevation_gain <= maxElevation && card.trail.elevation_gain >= minElevation);
}

function checkCard(card) {
    if (checkTags(card) && checkSearch(card) && checkSliders(card)) {
        return true;
    }
    return false;
}

function updateQuantity() {
    quantity.classList.add("changed");
    let value = showingCards.length;
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

function filterCards() {
    return cards.filter(card => checkCard(card));
}

function updateCards() {
    showingCards = filterCards();
    updateMain();
    updateQuantity();
}

// Search

searchBar.addEventListener("keyup", (e) => {
    updateCards();
});



let toggleFilters = document.querySelector(".toggle-filters");
let other_filters = document.querySelector(".other-filters");

toggleFilters.addEventListener("click", function () {
    toggleFilters.classList.toggle("opened");
    other_filters.classList.toggle("opened");
})

let lastCard;

function updateMain(limit = 24) {
    new Promise((resolve, reject) => {
        console.log("Update Main");

        //Remove cards
        mainArea.innerHTML = "";

        // Add cards
        showingCards.forEach(function (card, i) {
            if (i <= limit) {
                mainArea.appendChild(card.html);
                lastCard = card;
                lastCard.index = i;
            }
        });

        resolve();
    });

}

function showCards() {
    cards.forEach(function (card, i) {
        setTimeout(() => {
            card.html.classList.remove("hide");
        }, 200);
    });
}

function clearMain() {
    console.log("Clear Main");
    mainArea.innerHTML = "";
    loading.classList.remove("loaded");
}

orderby.addEventListener("change", function () {
    sortCards();
    updateMain();
});

function getSpans(className = "") {
    let spans = [];
    // console.log(className);
    showingCards.forEach(card => {
        let children;
        if (className == "") {
            children = card.html.querySelectorAll('.card-content .characteristics span')
        } else {
            children = card.html.querySelectorAll("." + className);
        }
        children.forEach(span => {
            spans.push(span);
        })
    });
    return spans;
}


function updateHighlight(className) {
    let spans = getSpans();

    // reset higlight
    spans.forEach(span => {
        span.classList.remove("highlight");
    });

    if (className != "date") {
        let elements = getSpans(className);
        elements.forEach(span => {
            span.classList.add("highlight");
        });
    }


}

document.addEventListener('scroll', (event) => {
    // if (document.documentElement.scrollTop % 10 == 0) {
    if (lastCard) {
        let rect = lastCard.html.getBoundingClientRect();
        // console.log("Current " + document.documentElement.scrollTop);
        // console.log("Last " + rect.top);
        // console.log("Diff " + (document.documentElement.scrollTop - rect.top - 550));

        if (lastCard.index < showingCards.length - 1 && document.documentElement.scrollTop > rect.top + 550) {
            // console.log(lastCard.html);
            let increment = lastCard.index + 48;

            updateMain(increment);

        }
    }


},
    { passive: true }
);

function sortCards() {

    // Order asc
    // console.log(orderby.value);

    position_container.classList.remove("show");
    switch (orderby.value) {
        case "date":
            showingCards.sort((card1, card2) => (card1.trail.id > card2.trail.id) ? 1 : -1);
            updateHighlight("date");
            break;

        case "length":
            showingCards.sort((card1, card2) => (card1.trail.trail_length < card2.trail.trail_length) ? 1 : -1);
            updateHighlight("trail_length");
            break;

        case "duration":
            showingCards.sort((card1, card2) => (card1.trail.duration < card2.trail.duration) ? 1 : -1);
            updateHighlight("duration")
            break;

        case "travel_time":
            showingCards.sort((card1, card2) => (card1.trail.travel_time < card2.trail.travel_time) ? 1 : -1);
            updateHighlight("travel_time")
            break;

        case "max_altitude":
            showingCards.sort((card1, card2) => (card1.trail.max_altitude < card2.trail.max_altitude) ? 1 : -1);
            updateHighlight("max-altitude")
            break;

        case "elevation_gain":
            showingCards.sort((card1, card2) => (card1.trail.elevation_gain < card2.trail.elevation_gain) ? 1 : -1)
            updateHighlight("elevation-gain")
            break;

        case "difficulty":
            showingCards.sort((card1, card2) => (card1.trail.difficulty < card2.trail.difficulty) ? 1 : -1)
            updateHighlight("difficulty")
            break;

        case "distance":
            manageDistanceCalculation();
            showingCards.sort((card1, card2) => (card1.trail.travel_time < card2.trail.travel_time) ? 1 : -1)
            updateHighlight("distance")
            break;


        default:
            return;
    }
    if (!order.classList.contains("desc")) {
        showingCards.reverse();
    }
}


function manageDistanceCalculation() {
    // console.log(position_container.classList);

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


    updateCards();
}


function nonLinearIncrease(value) {
    if (value < 60) {
        return value ** 1.05;
    }

    if (value < 150) {
        return value ** 1.02;
    }

    if (value < 450) {
        return value ** 1.005;
    }

    if (value >= 450) {
        return value;
    }
}

let useSimpleRoute = false;

function simpleRoute(params) {

}


geocoder.on('result', (e) => {
    // console.log(JSON.stringify(e.result, null, 2));
    // console.log("Change distance");
    // console.log(e.result);

    var options = {
        units: 'kilometers'
    };

    let start = e.result.center;
    clearMain();
    cards.forEach(async (card, i) => {

        let end = card.trail.start_coords;

        try {
            start = [e.result.center[1], e.result.center[0]];
            let element_travel = card.html.querySelector(".distance-value").parentElement;

            let element_distance_value = card.html.querySelector(".distance-value");
            let element_travel_time = card.html.querySelector(".travel_time_value");
            let element_travel_time_unit = card.html.querySelector(".time-unit");
            let element_distance_unit = card.html.querySelector(".distance-unit");
            element_travel.classList.add("show");
            if (useSimpleRoute || cards.length > 700) {

                let distance = turf.distance(start, end, options);

                distance = nonLinearIncrease(distance);
                element_distance_value.innerHTML = distance.toFixed([0]);
                element_travel.classList.add("show");
                card.trail.distance = distance;
                card.trail.travel_time = distance;

                element_travel_time_unit.classList.add("hide");
                element_travel_time.classList.add("hide");
            } else {

                // reverse safe way for mapbox
                end = [end[1], end[0]];
                start = [start[1], start[0]];
                // console.log(start, end);

                await getRoute(start, end)
                    .then((route) => {
                        // console.log(route);
                        if (route) {
                            // console.log(card.trail);

                            // card.trail.route = route;
                            let distance = route.distance / 1000;
                            let duration = parseFloat(new Date(route.duration * 1000).toISOString().substring(11, 16).replace(":", "."));
                            element_distance_value.innerHTML = " - " + distance.toFixed(0);
                            element_travel_time.innerHTML = duration.toFixed(2);
                            element_distance_value.classList.add("show");
                            element_travel_time.classList.add("show");
                            element_travel_time_unit.classList.add("show");
                            card.trail.distance = distance;
                            card.trail.travel_time = duration;
                            element_travel_time_unit.innerHTML = "h";
                            element_distance_unit.classList.add("hide");
                            element_distance_value.classList.add("hide");

                            if (duration < 1) {
                                element_travel_time.innerHTML = (duration * 100).toFixed(0);
                                element_travel_time_unit.innerHTML = "min";
                            }
                        } else {
                            // console.log("From: " + from + "\nTo: " + to);
                            // let distance = turf.distance(from, to, options);
                            let distance = turf.distance(start, end, options);

                            // console.log("Distance: " + distance.toFixed([2]) + " km");

                            // console.log(card.html.querySelector(".distance-value"));
                            distance = nonLinearIncrease(distance);
                            element_travel_time.innerHTML = "-"
                            element_distance_value.innerHTML = distance.toFixed([0]);
                            element_distance_value.parentElement.classList.add("show");
                            card.trail.distance = distance;
                            card.trail.travel_time = distance;
                            element_distance_value.classList.add("show");
                            element_distance_unit.classList.add("show");
                            element_travel_time_unit.classList.add("hide");
                            element_travel_time.classList.add("hide");
                        }

                        if (i == cards.length - 1) {
                            loading.classList.add("loaded");
                            // Sort
                            sortCards();
                            updateMain();
                        }
                    });


            }

        } catch (error) {
            // console.log("Card does't have coords");
            console.log(error);
        }

    });

    if (useSimpleRoute || cards.length > 700) {
        // Sort
        sortCards();
        updateMain();
    }

});
