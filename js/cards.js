// let a = document.querySelectorAll('img');
// console.log(a);
// mediumZoom();

let card_open = null;
const card_big_container = document.querySelector(".card-big-container");
const close_button = card_big_container.querySelector(".close-button");
const card_big = card_big_container.querySelector(".card-big-content");



card_big_container.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        closeCard();
    }
});

close_button.addEventListener("click", (e) => {
    closeCard();
});

function closeCard() {
    card_big_container.classList.remove("open");
    card_open.html.classList.remove("open");
    navbar.classList.remove("hide");
    enableScroll();
}

function openCard(card) {
    card.html.classList.add("open");
    navbar.classList.add("hide");
    card_big_container.classList.add("open");
    card_open = card;
    card_big.innerHTML = card.trail.title;
    disableScroll();
}

function disableScroll() {
    // document.body.style.overflow = "hidden";
    // Get the current page scroll position
    scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    // document.body.style.overflow = "auto";
    window.onscroll = function () { };
}


let cards = []

// TODO: revwrite with async
// Create cards
function addCards(trails) {
    trails.forEach(trail => {
        addCard(trail)
    });

    loading.classList.add("loaded");
    if (cards.length > 0)
        orderby_container.classList.remove("hide");
    // else
    // no_result.classList.add("show");


    sortCards();
    updateQuantity();
    updateMain();

}

function addCard(trail) {

    // trail.downloadImages();
    // console.log(trail);

    let card = new Card(trail);
    // card.html.addEventListener('click', (event) => {
    //     openCard(card);
    // });
    cards.push(card);

    // console.log(card.html);
    // mainArea.appendChild(card.html);
}
getAllTrails(trails, addCards);
