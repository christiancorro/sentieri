class Card {
    constructor(trail) {
        this.trail = trail;
        this.html = "";

        this.init();

    }

    setTrail(trail) {
        this.trail = trail;
        init();
    }

    init() {
        let card = document.createElement('article');

        card.className = 'card hide';
        card.innerHTML =
            '<button class="trail-button delete-trail-button only-user hide" title="Elimina"><i class="fa-solid fa-trash"></i></button>' +
            '<button class="trail-button modify-trail-button only-user hide" title="Modifica"><i class="fa-solid fa-pen"></i></button>' +
            '<a target="_blank" href="' +
            this.trail.url +
            '">' +
            '<picture class="thumbnail">' +
            '<img src="' +
            this.trail.imagesURL[0] +
            '" alt="' +
            this.trail.title +
            '">' +
            '</picture>' +
            '</a > ' +
            '<div class="card-content">' +
            '<a target="_blank" href="' +
            this.trail.url +
            '">' +
            '<h2 class="title">' +
            this.trail.title +
            '</h2>' +
            '</a > ' +
            '<div class="description">' +
            this.trail.description.replace(/\s+/g, " ").split(/(?=\s)/gi).slice(0, 29).join('') + "..." +
            '</div >' +
            '<div class="characteristics">' +
            '<span class="difficulty" title="Difficoltà">' +
            Difficulty[this.trail.difficulty] +
            '</span>' +
            '<span class ="duration" title="Durata"><i class ="fa-solid fa-clock"></i> ' +
            (parseFloat(this.trail.duration) % 1 != 0 ? parseFloat(this.trail.duration).toFixed(2) : parseFloat(this.trail.duration).toFixed(0)) +
            '<i class="unit">h</i></span>' +
            '<span class ="trail_length" title="Lunghezza"><i class ="fa-solid fa-route"></i> ' +
            this.trail.trail_length +
            '<i class="unit">km</i></span>' +
            '<span class ="elevation-gain" title="Dislivello">' +
            this.trail.elevation_gain +
            '<i class="unit">m</i></span>' +
            '<span class ="max-altitude" title="Altitudine massima"><i class="fa-solid fa-flag"></i> ' +
            this.trail.max_altitude +
            '<i class="unit">m</i></span>' +
            '<span class ="region" title="Regione"><i class ="fa-solid fa-location-dot"></i> ' +
            this.trail.location +
            '</span>' +
            '<span class ="group" title="Gruppo"><i class ="fa-solid fa-mountain"></i> ' +
            this.trail.group +
            '</span>' +
            '<a target="_blank" href="' +
            this.trail.start_google_maps_url +
            '"><span class ="distance" ><i class="fa-solid fa-car"></i> <i class="travel_time_value" title="Durata del viaggio stimata"></i><i class="unit time-unit">h</i><i class="distance-value" title="Distanza in linea d\'aria"></i><i class="unit distance-unit">km</i></span > ' +
            '</a>' +
            '<button class="favorite favorite-trail-button all-users hide" title="Preferito"><i class="fa-solid fa-heart"></i> <span class="favorite-number">' +
            this.trail.favorite +
            '</span></button>' +
            '</div>' +
            '</div>';

        this.html = card;


        this.html.addEventListener('click', (event) => {
            console.log(this.trail);
        });

        this.html.querySelector(".delete-trail-button").addEventListener('click', (event) => {
            console.log("DELETE trail-" + this.trail.id);
            deleteCard(this);
        });

        this.html.querySelector(".modify-trail-button").addEventListener('click', (event) => {
            gotoModify(this.trail.id);
        });

        this.html.querySelector(".favorite-trail-button").addEventListener('click', (event) => {
            toggleFavorite(event.currentTarget, this);
        });
    }

}

function gotoModify(trailId) {
    document.location.href = "pages/modify/?id=" + trailId;
}

function toggleFavorite(button, card) {
    if (button.classList.contains("active")) {
        card.trail.favorite--;

        button.classList.remove("active");
    } else {
        card.trail.favorite++;
        button.classList.add("active");
    }
    card.html.querySelector(".favorite-number").innerHTML = card.trail.favorite;
    // if (button.classList.toggle) {

    // }
}
