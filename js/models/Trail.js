class Trail {

    static lastId = 0;

    constructor() {
        this.id = Trail.lastId + 1;

        this.title = "";
        this.description = "";
        this.difficulty = "";
        this.duration = "";
        this.trail_length = "";
        this.elevation_gain = "";
        this.location = "";
        this.group = "";

        this.tags = [];

        this.distance = 0;

        this.start = "";
        this.start_coords = [];
        this.start_google_maps_url = "";
        this.start_altitude = 0;

        this.end = "";
        this.end_coords = [];
        this.end_google_maps_url = ""
        this.end_altitude = 0;

        this.max_altitude = "";
        this.max_altitude_name = "";

        this.huts = "";
        this.signage = "";
        this.gpx = "";
        this.imagesURL = [];
        this.images = [];

        this.date = Date.now();
        this.url = ""
    }

    serialize() {
        let data = {
            id: this.id,
            title: this.title,
            description: this.description,
            difficulty: this.difficulty,
            duration: this.duration,
            trail_length: this.trail_length,
            elevation_gain: this.elevation_gain,
            location: this.location,
            start_google_maps_url: this.start_google_maps_url,
            start_coords: this.start_coords,
            group: this.group,

            tags: this.tags,

            start: this.start,
            end: this.end,
            max_altitude: this.max_altitude,
            huts: this.huts,
            signage: this.signage,
            gpx: this.gpx,
            imagesURL: this.imagesURL,
            date: this.date,
            url: this.url
        }

        return data;
    }



    upload() {
        if (this.start_coords == "") {
            this.extractCoords()
        }

        Trail.lastId += 1;
        let database = getDatabase(this.id);
        database.set(this.serialize());
        database.on("value", function (snapshot) {
            console.log(snapshot);
        });
    }

    extractCoords() {
        let regex = new RegExp('@(.*),(.*),');
        var lat_long_match = this.start_google_maps_url.match(regex);
        let lat = lat_long_match[1];
        let long = lat_long_match[2];

        this.start_coords = [lat, long];
    }

    downloadImages() {
        return new Promise((resolve, error) => {
            this.imagesURL.forEach(url => {
                console.log(url);
                fetch(url).then(res => res.blob())
                    .then(blob => {
                        let image = new File([blob], 'image.jpeg', {
                            type: blob.type,
                        });

                        let objectURL = URL.createObjectURL(blob);
                        document.querySelector(".work_in_progress").src = objectURL;
                        this.images.push(image);
                    });
            });
        });
    }

    static from(json) {
        return Object.assign(new Trail(), json);
    }

}
