const save_button = document.querySelector(".save button");
const saved_icon = document.querySelector(".saved-icon");

const laod_image = document.querySelector("#load-image");
const image_preview = document.querySelector(".image-preview");

const loading_bar = document.querySelector("#loading-bar");

let data = {};
let image_url = "https://3.bp.blogspot.com/-hNWh6ShDJGs/XFUltMH2fsI/AAAAAAAABz0/_UwOXZDl3ZEtejlpgFQoUBJ_rjt3O9ipgCKgBGAs/w1280-h720-c/mountains-fog-landscape-scenery-16-4K.jpg";

let savedInterval;


//TODO: controllo upload completato

var progressBar = new ProgressBar.Line('#loading-bar', {
    color: '#49B293',
    duration: 1000,
    easing: 'easeInOut'
});


laod_image.addEventListener('change', function (e) {
    // file picked
    let imageURL = URL.createObjectURL(e.target.files[0]);
    loading_bar.classList.remove("complete");
    loading_bar.classList.add("uploading");
    save_button.setAttribute('disabled', '');

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
                loading_bar.classList.remove("uploading");
                loading_bar.classList.add("complete");
                save_button.removeAttribute('disabled');

            });
        });
    };

    imgToCompress.src = imageURL;
});

function saved() {
    saved_icon.classList.remove("hide");
    clearInterval(savedInterval);
    savedInterval = setInterval(() => {
        saved_icon.classList.add("hide");
    }, 3000);
}




getAllTrails(trails);
