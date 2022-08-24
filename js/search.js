
// searchBar.addEventListener("focus", setCardSearchMode);
// searchBar.addEventListener("focusout", setCardSearchModeOff);
let showingCards = cards;

const maxDurationLimit = 12;
const maxElevationLimit = 2000;
const maxLengthLimit = 30;

let maxElevation = 2000, minElevation = 0, maxLength = 30, minLength = 0, maxDuration = maxDurationLimit, minDuration = 0;

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



        filterCards();
        checkCards();
    })
});

let includesAll = (arr, target) => target.every(v => arr.includes(v));

function checkCard(card) {
    // Tags
    let text = searchBar.value.toLowerCase();

    if (includesAll(card.trail.tags, filters) &&
        (text.length == 0 || (card.trail.title.toLowerCase().includes(text) ||
            card.trail.group.toLowerCase().includes(text) ||
            card.trail.location.toLowerCase().includes(text) ||
            card.trail.description.toLowerCase().includes(text))) &&
        ((card.trail.duration <= maxDuration && card.trail.duration >= minDuration) &&
            (card.trail.trail_length <= maxLength && card.trail.trail_length >= minLength) &&
            (card.trail.elevation_gain <= maxElevation && card.trail.elevation_gain >= minElevation))) {
        return true;
    }
    return false;
}



function filterCards() {
    let counter = 0;
    showingCards = [];
    cards.forEach(card => {

        let matches = 0;

        filters.forEach(filter => {
            card.trail.tags.forEach(tag => {
                if (tag.toLowerCase() === filter.toLowerCase()) {
                    matches++;
                }
            });
            if (card.trail.location.toLowerCase() === filter.toLowerCase()
                || card.trail.difficulty.toLowerCase() === filter.toLowerCase()) {
                matches++;
            }
        });

        if (matches == filters.length) {
            card.html.classList.remove("hide");
            showingCards.push(card);

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

    search();

}


async function updateQuantity(counter = 0) {
    quantity.classList.add("changed");
    let value = showingCards.length - counter;
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



// Search

searchBar.addEventListener("keyup", (e) => {
    search();
});

function search() {
    let text = searchBar.value.toLowerCase();

    checkCards();

    if (text.length >= 0) {
        let counter = 0;

        showingCards.forEach(card => {
            if (card.trail.title.toLowerCase().includes(text)
                ||
                card.trail.group.toLowerCase().includes(text)
                ||
                card.trail.location.toLowerCase().includes(text) ||

                card.trail.description.toLowerCase().includes(text)) {
                card.html.classList.remove("hide");

            } else {
                card.html.classList.add("hide");
                // console.log(counter);
                counter++;
            }
        });

        // console.log(counter);
        // quantity.innerHTML = "" + cards.length - counter;
        updateQuantity(counter);


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
    console.log("Update Main");
    //Remove cards
    mainArea.innerHTML = "";

    // Add cards
    showingCards.forEach(function (card, i) {
        mainArea.appendChild(card.html);
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
    mainArea.innerHTML = "";
    loading.classList.remove("loaded");
}

orderby.addEventListener("change", function () {
    // console.log(this.value);

    sortCards();
    updateMain();
});

function updateHighlight(className) {
    let spans = document.querySelectorAll('.card-content .characteristics span');

    // reset higlight
    spans.forEach(span => {
        span.classList.remove("highlight");
    });

    if (className != "date") {
        let elements = document.querySelectorAll('.card-content .characteristics span.' + className);
        elements.forEach(span => {
            span.classList.add("highlight");
        });
    }


}

async function sortCards() {

    // Order asc
    console.log(orderby.value);

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
            showingCards.sort((card1, card2) => (card1.trail.distance < card2.trail.distance) ? 1 : -1)
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
    minDuration = parseFloat(duration_filter_min.value);
    maxDuration = parseFloat(duration_filter_max.value);
    maxDuration = maxDuration >= maxDurationLimit ? 10000 : maxDuration;

    minElevation = parseFloat(elevation_gain_filter_min.value);
    maxElevation = parseFloat(elevation_gain_filter_max.value);
    maxElevation = maxElevation >= maxElevationLimit ? 10000 : maxElevation;

    minLength = parseFloat(trail_length_filter_min.value);
    maxLength = parseFloat(trail_length_filter_max.value);
    maxLength = maxLength >= maxLengthLimit ? 10000 : maxLength;

    let counter = 0;

    // console.log("Filter All");

    showingCards.forEach(card => {
        if ((card.trail.duration <= maxDuration && card.trail.duration >= minDuration) &&
            (card.trail.trail_length <= maxLength && card.trail.trail_length >= minLength) &&
            (card.trail.elevation_gain <= maxElevation && card.trail.elevation_gain >= minElevation)) {
            card.html.classList.remove("hide");
        } else {
            // console.log(card.trail);
            card.html.classList.add("hide");
            counter++;
        }
    });

    updateQuantity(counter);

    // if (counter == showingCards.length) {
    //     // no_result.classList.add("show")
    // } else {
    //     no_result.classList.remove("show")
    // }

    search(); //FIXME:error check
}

// async function filterDuration([min, max]) {

//     let counter = 0;

//     console.log("Filter Duration");

//     showingCards.forEach(card => {
//         if (card.trail.duration <= max && card.trail.duration >= min) {
//             card.html.classList.remove("hide");
//         } else {
//             card.html.classList.add("hide");
//             counter++;
//         }
//     });

//     updateQuantity(counter);

//     if (counter == showingCards.length) {
//         // no_result.classList.add("show")
//     } else {
//         no_result.classList.remove("show")
//     }
// }

// async function filterTrailLength([min, max]) {

//     console.log("Filter Length");

//     let counter = 0;

//     showingCards.forEach(card => {
//         if (card.trail.trail_length <= max && card.trail.trail_length >= min) {
//             card.html.classList.remove("hide");
//         } else {
//             card.html.classList.add("hide");
//             counter++;
//         }
//     });

//     updateQuantity(counter);

//     if (counter == showingCards.length) {
//         // no_result.classList.add("show")
//     } else {
//         no_result.classList.remove("show")
//     }
// }

// async function filterElevationGain([min, max]) {

//     console.log("Filter Elevation Gain");

//     let counter = 0;

//     showingCards.forEach(card => {
//         if (card.trail.elevation_gain <= max && card.trail.elevation_gain >= min) {
//             card.html.classList.remove("hide");
//         } else {
//             card.html.classList.add("hide");
//             counter++;
//         }
//     });

//     updateQuantity(counter);

//     if (counter == showingCards.length) {
//         // no_result.classList.add("show")
//     } else {
//         no_result.classList.remove("show")
//     }
// }


geocoder.on('result', (e) => {
    console.log(JSON.stringify(e.result, null, 2));

    var options = {
        units: 'kilometers'
    };

    let from = e.result.center.reverse();

    cards.forEach(card => {
        try {
            let to = card.trail.start_coords;
            console.log("From: " + from + "\nTo: " + to);
            let distance = turf.distance(from, to, options);

            console.log("Distance: " + distance.toFixed([2]) + " km");

            console.log(card.html.querySelector(".distance-value"));
            let distance_value = card.html.querySelector(".distance-value");
            distance_value.innerHTML = distance.toFixed([0]);
            distance_value.parentElement.classList.add("show");
            card.trail.distance = distance;
        } catch (error) {
            console.log("Card does't have coords");
        }

    });

    // Sort
    sortCards();
    updateMain();
});
