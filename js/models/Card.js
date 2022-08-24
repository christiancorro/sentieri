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
            parseInt(this.trail.duration).toFixed(2) +
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
            '<span class ="distance" title="Distanza in linea d\'aria"><i class="fa-solid fa-car"></i> <i class="distance-value"></i><i class="unit">km</i></span>' +
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
    }

}

function gotoModify(trailId) {
    document.location.href = "pages/modify/?id=" + trailId;
}
