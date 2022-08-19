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
        card.innerHTML = '<a href="' +
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
            '<a href="' +
            this.trail.url +
            '">' +
            '<h2 class="title">' +
            this.trail.title +
            '</h2>' +
            '</a > ' +
            '<div class="description">' +
            this.trail.description +
            '</div >' +
            '<div class="characteristics">' +
            '<span class="difficulty" title="Difficoltà">' +
            this.trail.difficulty +
            '</span>' +
            '<span class ="duration" title="Durata"><i class ="fa-solid fa-clock"></i> ' +
            this.trail.duration.toFixed(2) +
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
            '<span class ="distance" title="Distanza"><i class="fa-solid fa-map-location-dot"></i> <i class="distance-value"></i><i class="unit">km</i></span>' +
            '</div>' +
            '</div>';

        this.html = card;


        this.html.addEventListener('click', (event) => {
            console.log(this.trail);
        });
    }

}
