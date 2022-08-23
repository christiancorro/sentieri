// Prevent Submit on enter
const form = document.querySelector(".trail-form");

form.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
});

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
        trail.upload();
        saved();
        setTimeout(() => {
            document.location.href = "../";
        }, 2000);
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
