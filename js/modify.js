const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

const form_modify = document.querySelector(".trail-form-modify");

let thisTrail;

getTrail(id).then((trail) => {
    if (checkPermission(trail.authorId)) {

        thisTrail = trail;
        populateModify(trail);
    } else {

        window.location = '/';
    }
});


function populateModify(trail) {

    const image_preview = document.querySelector(".image-preview");
    const title = document.querySelector(".title");
    const description = document.querySelector(".description");
    const difficulty = document.querySelector('[name="difficulty"]');
    const duration = document.querySelector('[name="duration"]');
    const trail_length = document.querySelector('[name="trail_length"]');
    const elevation_gain = document.querySelector('[name="elevation_gain"]');
    const max_altitude = document.querySelector('[name="max_altitude"]');
    const location = document.querySelector('[name="location"]');
    const group = document.querySelector('[name="group"]');
    const start_google_maps_url = document.querySelector('[name="start_google_maps_url"]');
    const url = document.querySelector('[name="url"]');



    image_url = trail.imagesURL[0];

    image_preview.style.backgroundImage = "url(" + image_url + ")";
    title.innerHTML = trail.title;
    description.innerHTML = trail.description;
    difficulty.value = trail.difficulty;
    duration.setAttribute("value", parseFloat(trail.duration));
    trail_length.setAttribute("value", parseFloat(trail.trail_length));
    elevation_gain.setAttribute("value", parseInt(trail.elevation_gain));
    max_altitude.setAttribute("value", parseInt(trail.max_altitude));
    location.setAttribute("value", trail.location);
    group.setAttribute("value", trail.group);
    start_google_maps_url.setAttribute("value", trail.start_google_maps_url);
    url.setAttribute("value", trail.url);

    try {
        trail.tags.forEach(tag => {
            const checkbox = document.querySelector('[value="' + tag + '"]');
            checkbox.checked = true;
        });
    } catch (error) {

    }


    loading.classList.add("loaded");
    form_modify.classList.remove("hide");

    save_button.removeAttribute('disabled');

}

form_modify.addEventListener('submit', async function (e) {

    //prevent the normal submission of the form
    console.log("SUBMIT");
    e.preventDefault();
    data = {};
    const formData = new FormData(this);
    const entires = formData.entries();

    for (const [name, value] of entires) {
        console.log(name + ': ' + value);
        if (!data[name]) {
            data[name] = []
        }
        data[name].push(value);
    }

    for (var k in data) {
        if (data[k].length == 1) {

            thisTrail[k] = data[k][0];
        } else {
            thisTrail[k] = data[k];
        }
    }


    thisTrail.imagesURL = [];
    thisTrail.imagesURL.push(image_url);
    thisTrail.authorId = firebase.auth().currentUser.uid;
    thisTrail.authorName = firebase.auth().currentUser.displayName;

    thisTrail.duration = parseFloat(thisTrail.duration);
    thisTrail.elevation_gain = parseFloat(thisTrail.elevation_gain);
    thisTrail.trail_length = parseFloat(thisTrail.trail_length);
    thisTrail.max_altitude = parseFloat(thisTrail.max_altitude);

    thisTrail.upload();

    saved();
    // setTimeout(() => {
    //     document.location.href = "../";
    // }, 1500);

});
