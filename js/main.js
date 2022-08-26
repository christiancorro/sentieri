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

closeMobileNavbar();


function openMobileNavbar() {
    navbar.classList.add("opened");
    navbarToggle.classList.add("opened");
    navbarToggle.setAttribute("aria-expanded", "true");
}

function closeMobileNavbar() {
    navbar.classList.remove("opened");
    navbarToggle.classList.remove("opened");
    navbarToggle.setAttribute("aria-expanded", "false");
}

navbarToggle.addEventListener("click", () => {
    if (navbar.classList.contains("opened")) {
        closeMobileNavbar();
    } else {
        openMobileNavbar();
    }
});

onresize = function () {
    console.log();
    if (navbar.classList.contains("opened") && window.innerWidth > 800) {
        closeMobileNavbar();
    }
};

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
// });
//     });
const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
};

const goto_button = document.querySelector(".goto-button");


document.addEventListener('scroll', (event) => {
    if (goto_button) {
        if (document.documentElement.scrollTop > 3000) {
            goto_button.classList.remove("hide");
        } else {
            goto_button.classList.add("hide");
        }
    }

},
    { passive: true }
);

let toggleFilters = document.querySelector(".toggle-filters");
let other_filters = document.querySelector(".other-filters");

toggleFilters.addEventListener("click", function () {
    toggleFilters.classList.toggle("opened");
    other_filters.classList.toggle("opened");
})


let mainArea = document.querySelector(".main-area .cards");
let trails = [];
