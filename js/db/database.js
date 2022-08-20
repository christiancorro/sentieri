
// config 
const firebaseConfig = {
    apiKey: "AIzaSyCoUka-K0d8FHEKWTa59rsW2EHa5V4fvgo",
    authDomain: "sentieri-80f46.firebaseapp.com",
    projectId: "sentieri-80f46",
    storageBucket: "sentieri-80f46.appspot.com",
    messagingSenderId: "502978485914",
    appId: "1:502978485914:web:fe74812573b447c2008923",
    measurementId: "G-LY1JSLKG6Z",
    databaseURL: "https://sentieri-80f46-default-rtdb.europe-west1.firebasedatabase.app"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getDatabase(id) {
    let database = firebase.database().ref("trails/trail-" + id);
    return database;
}

function submitTrail() {

    let testTrail = new Trail();
    // testTrail.id = 0
    testTrail.title = "Il Lago di Sorapis dal Passo Tre Croci attraverso la Forcella Marcoira"
    testTrail.description = "Il Lago di Sorapiss (o Sorapis) è uno dei laghi più conosciuti e frequentati, nonché una delle migliori perle, di tutte le Dolomiti. Il fattore principale che contraddistingue questo lago rispetto ai suoi “rivali” alpini…";
    testTrail.difficulty = Difficulty.E;
    testTrail.duration = 5;
    testTrail.tags.push(Tags.Lago);
    testTrail.trail_length = 14;
    testTrail.elevation_gain = 700;
    testTrail.location = Location.Veneto;
    testTrail.max_altitude = 2267;
    testTrail.group = "Gruppo del Sorapiss"
    testTrail.imagesURL.push("https://www.itineraridimontagna.it/wp-content/uploads/2017/03/SP-15-panoramica-lago-sorapiss.jpg");
    testTrail.imagesURL.push("https://upload.wikimedia.org/wikipedia/commons/1/1b/080103_hakkai_fuji.jpg");
    testTrail.start_google_maps_url = "https://www.google.it/maps/place/Lago+di+Sorapis/@46.5205549,12.2223001,18z/data=!3m1!4b1!4m5!3m4!1s0x4779cb283c54b5a5:0xfe6920bbfd34b63c!8m2!3d46.5205589!4d12.2235133";
    testTrail.extractCoords();
    testTrail.upload();

    let testTrail2 = new Trail();
    // testTrail.id = 0
    testTrail2.title = "Rifugio Casera Bosconero da Lago di Pontesei: escursione ad anello"
    testTrail2.description = "La salita al Rifugio Casera Bosconero, data la sua relativa difficoltà abbastanza contenuta, è una delle escursioni più conosciute dell’omonimo gruppo montuoso, tuttavia, e per fortuna, non caoticamente frequentata come...";
    testTrail2.difficulty = Difficulty.E;
    testTrail2.tags.push(Tags.Anello);
    testTrail2.tags.push(Tags.Lago);
    testTrail2.duration = 4.30;
    testTrail2.trail_length = 10;
    testTrail2.elevation_gain = 800;
    testTrail2.location = Location.Veneto;
    testTrail2.group = "Gruppo del Bosconero";
    testTrail2.max_altitude = 1629;
    testTrail2.imagesURL.push("https://www.itineraridimontagna.it/wp-content/uploads/2022/06/BSN-06-panorama-sentiero-485.jpg");
    testTrail2.imagesURL.push("https://upload.wikimedia.org/wikipedia/commons/1/1b/080103_hakkai_fuji.jpg");
    testTrail2.start_google_maps_url = "https://www.google.it/maps/place/Lago+di+Sorapis/@46.5205549,12.2223001,18z/data=!3m1!4b1!4m5!3m4!1s0x4779cb283c54b5a5:0xfe6920bbfd34b63c!8m2!3d46.5205589!4d12.2235133";
    testTrail2.extractCoords();
    testTrail2.upload();

    let testTrail3 = new Trail();
    // testTrail.id = 0
    testTrail3.title = "Giro delle Cinque Torri e dei Rifugi Averau, Nuvolau e Scoiattoli"
    testTrail3.description = "Dal Passo Giau, inizia una delle escursioni considerate tra le più panoramiche e suggestive delle Dolomiti Ampezzane: il giro delle Cinque Torri è un trekking ad anello assai emozionante, caratterizzato da un susseguirsi di splendidi…";
    testTrail3.difficulty = Difficulty.E;
    testTrail3.duration = 4.30
    testTrail3.trail_length = 11
    testTrail3.elevation_gain = 700
    testTrail3.location = Location.Veneto;
    testTrail3.group = "Gruppo del Nuvolau"
    testTrail3.max_altitude = 1190;
    testTrail3.imagesURL.push("https://www.itineraridimontagna.it/wp-content/uploads/2017/07/5TR-1-ra-gusela-passo-giau.jpg");
    testTrail3.imagesURL.push("https://upload.wikimedia.org/wikipedia/commons/1/1b/080103_hakkai_fuji.jpg");
    testTrail3.start_google_maps_url = "https://www.google.it/maps/place/Lago+di+Sorapis/@46.5205549,12.2223001,18z/data=!3m1!4b1!4m5!3m4!1s0x4779cb283c54b5a5:0xfe6920bbfd34b63c!8m2!3d46.5205589!4d12.2235133";
    testTrail3.extractCoords();
    testTrail3.upload();

    let testTrail4 = new Trail();
    // testTrail.id = 0
    testTrail4.title = "Escursione ad anello al Rifugio Chiggiato da Calalzo di Cadore"
    testTrail4.description = "Dal Passo Giau, inizia una delle escursioni considerate tra le più panoramiche e suggestive delle Dolomiti Ampezzane: il giro delle Cinque Torri è un trekking ad anello assai emozionante, caratterizzato da un susseguirsi di splendidi…";
    testTrail4.difficulty = Difficulty.E;
    testTrail4.duration = 5.30
    testTrail4.tags.push(Tags.Anello);
    testTrail4.trail_length = 15
    testTrail4.elevation_gain = 1100
    testTrail4.location = Location.Veneto;
    testTrail4.group = "Gruppo del Nuvolau"
    testTrail4.imagesURL.push("https://picsum.photos/1920/1080");
    testTrail4.imagesURL.push("https://upload.wikimedia.org/wikipedia/commons/1/1b/080103_hakkai_fuji.jpg");
    testTrail4.max_altitude = 2190;
    testTrail4.start_google_maps_url = "https://www.google.it/maps/place/32042+Calalzo+di+Cadore+BL/@46.444319,12.3727508,15z/data=!3m1!4b1!4m5!3m4!1s0x4779b7f5447cc5c9:0x500d336d64393be7!8m2!3d46.4462554!4d12.3807452";
    testTrail4.extractCoords();
    testTrail4.upload();

}


function getAllTrails(trails, callback = () => { }) {
    let ref = firebase.database().ref("trails");
    ref.on("value", function (snapshot) {
        snapshot.forEach(function (snapshot) {
            var data = snapshot.val();
            let trail = Trail.from(data);
            trails.push(trail);
        });
        // console.log(trails);

        // Get last id
        const ids = trails.map(trail => {
            return trail.id;
        });

        if (ids.length > 0)
            Trail.lastId = Math.max(...ids);

        console.log(ids);
        console.log(Trail.lastId);
        callback(trails);
    });
}

async function imageToFile(url) {
    fetch(url).then(res => res.blob())
        .then(blob => {
            let objectURL = URL.createObjectURL(blob);
            uploadImage(blob);
            document.querySelector(".work_in_progress").src = objectURL;
        });

}


function uploadImage(file, progressBar = null) {
    return new Promise((resolve, reject) => {
        console.log("Uploading image: trail-" + (Trail.lastId + 1) + "/image");
        const ref = firebase.storage().ref().child('trail-' + Trail.lastId + '/image');

        let uploadTask = ref.put(file);

        uploadTask.then((snapshot) => {
            console.log('Uploaded a blob or file!');
            snapshot.ref.getDownloadURL().then((fileUrl) => {
                // url = fileUrl;
                console.log(fileUrl);
                resolve(fileUrl);
            });
        });


        uploadTask.on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log(percentage);
            if (progressBar) {
                progressBar.animate(percentage / 100);
                // console.log(percentage);
            }
        });


    });

}

function downloadImage() {
    const ref = firebase.storage().ref().child('trail-0');

    ref.getDownloadURL()
        .then((url) => {
            document.querySelector(".work_in_progress").src = url;
        });

}
