const save_button = document.querySelector(".save");
const form = document.querySelector(".trail-form");

const laod_image = document.querySelector("#load-image");
const image_preview = document.querySelector(".image-preview");

const loading_bar = document.querySelector("#loading-bar");

let data = {};
let image_url;


//TODO: controllo upload completato

var progressBar = new ProgressBar.Line('#loading-bar', {
    color: '#49B293',
    duration: 1000,
    easing: 'easeInOut'
});

getAllTrails(trails);

laod_image.addEventListener('change', function (e) {
    let imageURL = URL.createObjectURL(e.target.files[0]);
    loading_bar.classList.remove("complete");
    let imgToCompress = new Image();
    imgToCompress.onload = function () {
        // Compress image onload
        compressImage(this).then((compressedImage) => {
            // preview image
            image_preview.style.backgroundImage = "url(" + URL.createObjectURL(compressedImage) + ")";
            // upload image
            uploadImage(compressedImage, progressBar).then(url => {
                // upload completed
                image_url = url;
                loading_bar.classList.add("complete");

            });
        });
    };

    imgToCompress.src = imageURL;


});


// Prevent Submit on enter
form.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
});

form.addEventListener('submit', async function (e) {

    //prevent the normal submission of the form
    e.preventDefault();
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
    trail.upload();

});
