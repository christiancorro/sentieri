const save_button = document.querySelector(".save");
const form = document.querySelector(".trail-form");

const laod_image = document.querySelector("#load-image");
const image_preview = document.querySelector(".image-preview");

laod_image.addEventListener('change', function (e) {
    image_preview.style.backgroundImage = "url(" + URL.createObjectURL(e.target.files[0]) + ")";
});

data = {};

form.addEventListener('submit', function (e) {

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

    console.log(formData);
});
