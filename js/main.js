const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");
const loading = document.querySelector(".loading");

const searchBar = document.querySelector(".search-bar");
const no_result = document.querySelector(".no-result");
const orderby = document.querySelector(".orderBy select");
const orderby_container = document.querySelector(".orderBy-container");
const order = document.querySelector(".order");
const quantity = document.querySelector(".quantity-number");

const position_container = document.querySelector(".position-container");
const position = document.querySelector(".position-bar input");

const card_big_container = document.querySelector(".card-big-container");
const close_button = card_big_container.querySelector(".close-button");
const card_big = card_big_container.querySelector(".card-big-content");



function openMobileNavbar() {
    navbar.classList.add("opened");
    navbarToggle.setAttribute("aria-expanded", "true");
}

function closeMobileNavbar() {
    navbar.classList.remove("opened");
    navbarToggle.setAttribute("aria-expanded", "false");
}

navbarToggle.addEventListener("click", () => {
    if (navbar.classList.contains("opened")) {
        closeMobileNavbar();
    } else {
        openMobileNavbar();
    }
});

const navbarMenu = navbar.querySelector("#navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
    clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

// document
//     .getElementById("options")
//     .querySelectorAll("input[name='navtype']")
//     .forEach((option) => {
//         option.addEventListener("change", (e) => {
//             const navType = e.target.id.split("-").join(" ");
//             navbarMenu.classList = navType;
//         });
//     });

let mainArea = document.querySelector(".main-area .cards");
let trails = []

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
    card.html.addEventListener('click', (event) => {
        openCard(card);
    });
    cards.push(card);

    // console.log(card.html);
    // mainArea.appendChild(card.html);
}
getAllTrails(trails, addCards);
