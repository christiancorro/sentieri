const save_button = document.querySelector(".save");
const form = document.querySelector(".trail-form");

const laod_image = document.querySelector("#load-image");
const image_preview = document.querySelector(".image-preview");


let data = {};

laod_image.addEventListener('change', function (e) {
    image_preview.style.backgroundImage = "url(" + URL.createObjectURL(e.target.files[0]) + ")";
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
    trail.imagesURL.push(data.imagesURL[0]);

    console.log(trail);
    await uploadImage(trail, data.imagesURL[0]).then(imageUrl => {
        trail.imagesURL.push(imageUrl);
        console.log(imageUrl);
        trail.upload()
    });

});
