// let a = document.querySelectorAll('img');
// console.log(a);
// mediumZoom();

let card_open = null;



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
