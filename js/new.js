// Prevent Submit on enter
const form = document.querySelector(".trail-form");
const titleElement = document.querySelector("[name=title]");
const descriptionElement = document.querySelector("[name=description]");

form.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
});

descriptionElement.addEventListener('keyup', function (e) {
    autoTag(this.value);
});

titleElement.addEventListener('keyup', function (e) {
    autoTag(this.value);
});

function autoTag(text) {
    text = text.toLowerCase();

    if (text.includes("anello")) {
        document.querySelector("[value=Anello]").checked = true;
    }

    if (text.includes("ferrat")) {
        document.querySelector("[value=Ferrata]").checked = true;
        document.querySelector("[name=difficulty]").value = "EEA";
    }

    if (text.includes("crest")) {
        document.querySelector("[value=Cresta]").checked = true;
    }

    if (text.includes("ciaspol")) {
        document.querySelector("[value=Ciaspole]").checked = true;
        document.querySelector("[name=difficulty]").value = "EAI";
    }

    if (text.includes("trekking")) {
        document.querySelector("[value=Trekking]").checked = true;
    }

    if (text.includes("fium")) {
        document.querySelector("[value=Fiume]").checked = true;
    }

    if (text.includes("lag")) {
        document.querySelector("[value=Lago]").checked = true;
    }

    if (text.includes("ghiacci")) {
        document.querySelector("[value=Ghiacciaio]").checked = true;
    }
    if (text.includes("cascat")) {
        document.querySelector("[value=Cascata]").checked = true;
    }

    if (text.includes("guerr")) {
        document.querySelector("[value=Storia]").checked = true;
    }
    if (text.includes("rifug")) {
        document.querySelector("[value=Rifugio]").checked = true;
    }

    if (text.includes("malg")) {
        document.querySelector("[value=Malga]").checked = true;
    }

    if (text.includes("bivacc")) {
        document.querySelector("[value=Bivacco]").checked = true;
    }
    if (text.includes("bambin") || text.includes("cani") || text.includes("disabil")) {
        document.querySelector("[value=Bambini]").checked = true;
    }
}

let submitted = false;

form.addEventListener('submit', async function (e) {

    //prevent the normal submission of the form
    e.preventDefault();
    if (!submitted) {
        submitted = true;
        data = {};
        const formData = new FormData(this);
        const entires = formData.entries();

        let trail = new Trail();

        for (const [name, value] of entires) {
            console.log(name + ': ' + value);
            if (!data[name]) {
                data[name] = []
            }
            data[name].push(value);
        }

        for (var k in data) {
            if (data[k].length == 1) {

                trail[k] = data[k][0];
            } else {
                trail[k] = data[k];
            }
        }

        trail.imagesURL = [];
        trail.imagesURL.push(image_url);
        trail.authorId = firebase.auth().currentUser.uid;
        trail.authorName = firebase.auth().currentUser.displayName;

        if (!Array.isArray(trail.tags)) {
            let tag = trail.tags;
            trail.tags = [];
            trail.tags.push(tag);
        }


        trail.duration = parseFloat(trail.duration);
        trail.elevation_gain = parseFloat(trail.elevation_gain);
        trail.trail_length = parseFloat(trail.trail_length);
        trail.max_altitude = parseFloat(trail.max_altitude);

        trail.upload();
        saved();
        setTimeout(() => {
            document.location.href = "../../";
        }, 1600);

        let confetti = document.querySelector(".confetti");
        if (confetti) {
            party.confetti(confetti, {
                count: party.variation.range(60, 60),
                size: party.variation.range(0.9, 1.4),
            });
        }
    }

});


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        loading.classList.add("loaded");
        form.classList.remove("hide");
        save_button.removeAttribute('disabled');
    } else {
    }
});
