let code = "";

let content = {};
let ifra;
let url = "https://www.itineraridimontagna.it/trekking-monte-fertazza-belvedere/";

let links = ["https://www.itineraridimontagna.it/forcella-ambrizzola-escursione-anello/",
    "https://www.itineraridimontagna.it/trekking-monte-fertazza-belvedere/",
    "https://www.itineraridimontagna.it/monte-peralba-ferrata-sartor/",
    "https://www.itineraridimontagna.it/rifugio-bosconero-escursione-anello/",
    "https://www.itineraridimontagna.it/trekking-monte-grappa-dorsale-solaroli/",
    "https://www.itineraridimontagna.it/giro-tre-bivacchi-passo-san-boldo/",
    "https://www.itineraridimontagna.it/rifugio-antelao-trekking-pieve-cadore/",
    "https://www.itineraridimontagna.it/trekking-rifugio-monte-castelberto/",
    "https://www.itineraridimontagna.it/monte-migogn-sentiero-delle-creste/",
    "https://www.itineraridimontagna.it/escursione-rifugio-cima-sasso-bianco/",
    "https://www.itineraridimontagna.it/escursione-rifugio-chiggiato-da-calalzo/",
    "https://www.itineraridimontagna.it/cima-lobbia-telegrafo-rifugio-bertagnoli/",
    "https://www.itineraridimontagna.it/trekking-monte-cesen-mariech-posa-puner/",
    "https://www.itineraridimontagna.it/escursione-neve-monte-sparavieri-tomba/",
    "https://www.itineraridimontagna.it/escursione-invernale-rifugio-venezia/",
    "https://www.itineraridimontagna.it/via-ferrata-lipella-tofana-de-rozes/",
    "https://www.itineraridimontagna.it/lach-dei-negher-escursione-anello-lagazzon/",
    "https://www.itineraridimontagna.it/trekking-monte-rifugio-pizzoc/",
    "https://www.itineraridimontagna.it/lago-coldai-rifugio-tissi/",
    "https://www.itineraridimontagna.it/salita-cima-portule-dal-rifugio-malga-larici/",
    "https://www.itineraridimontagna.it/escursione-ad-anello-monti-col-alto-e-marucol/",
    "https://www.itineraridimontagna.it/ferrata-del-camoscio-e-salita-cima-palombino/",
    "https://www.itineraridimontagna.it/salita-escursione-ad-anello-col-quaterna-rifugio-coltrondo/",
    "https://www.itineraridimontagna.it/via-ferrata-michielli-strobel-e-punta-fiames-al-pomagagnon/", "https://www.itineraridimontagna.it/escursione-al-col-di-luna-e-al-rifugio-scarpa-da-frassene/", "https://www.itineraridimontagna.it/cima-valdritta-e-rifugio-cima-telegrafo/", "https://www.itineraridimontagna.it/ferrata-alpini-col-dei-bos/", "https://www.itineraridimontagna.it/escursione-ai-laghi-dolbe-da-sappada/", "https://www.itineraridimontagna.it/cengia-veronesi-alta-via-di-fanis/", "https://www.itineraridimontagna.it/giro-della-tofana-de-rozes-dal-rifugio-a-dibona/",
    "https://www.itineraridimontagna.it/terza-cengia-del-pomagagnon/",
    "https://www.itineraridimontagna.it/cime-col-roan-col-duro/",
    "https://www.itineraridimontagna.it/sentiero-dei-kaiserjager-e-gallerie-del-lagazuoi/",
    "https://www.itineraridimontagna.it/giro-delle-cinque-torri/",
    "https://www.itineraridimontagna.it/giro-delle-cascate-di-fanes-e-del-col-rosa/",
    "https://www.itineraridimontagna.it/forcella-segnata-val-montanaia/",
    "https://www.itineraridimontagna.it/anello-cima-settsass/",
    "https://www.itineraridimontagna.it/forcella-marcoira-lago-sorapiss/",
    "https://www.itineraridimontagna.it/giro-del-monte-coldai/",
    "https://www.itineraridimontagna.it/52-gallerie-del-pasubio/",
    "https://www.itineraridimontagna.it/anello-del-monte-pelmo/",
    "https://www.itineraridimontagna.it/anello-della-croda-lago/",
    "https://www.itineraridimontagna.it/val-venegia-trekking-anello-passo-rolle/",
    "https://www.itineraridimontagna.it/escursione-monte-cornetto-becco-filadonna/",
    "https://www.itineraridimontagna.it/ferrata-sass-rigais-santa-cristina/",
    "https://www.itineraridimontagna.it/escursione-lago-rifugio-antermoia/",
    "https://www.itineraridimontagna.it/giro-anello-sassolungo-sassopiatto/",
    "https://www.itineraridimontagna.it/escursione-col-santo-rifugio-lancia/",
    "https://www.itineraridimontagna.it/lago-rifugio-cima-asta-malga-sorgazza/",
    "https://www.itineraridimontagna.it/escursione-anello-cima-pari-sclapa/",
    "https://www.itineraridimontagna.it/ferrata-paterno-innerkofler-sentiero-forcelle/",
    "https://www.itineraridimontagna.it/escursione-monte-ziolera-lago-delle-buse/",
    "https://www.itineraridimontagna.it/escursione-al-monte-altissimo-di-nago-rifugio-campei-e-malga-campo/",
    "https://www.itineraridimontagna.it/escursione-monte-stivo-rifugio-marchetti-passo-bordala/",
    "https://www.itineraridimontagna.it/tre-cime-bondone-escursione-anello/",
    "https://www.itineraridimontagna.it/ferrate-del-velo-della-madonna-e-della-vecia/",
    "https://www.itineraridimontagna.it/escursione-anello-tre-cime-di-lavaredo/",
    "https://www.itineraridimontagna.it/sentiero-attrezzato-bepi-zac-cresta-costabella/",
    "https://www.itineraridimontagna.it/ferrata-brigata-tridentina-al-pisciadu/",
    "https://www.itineraridimontagna.it/sentiero-attrezzato-pojesi-e-le-cime-tibet-e-carega/",
    "https://www.itineraridimontagna.it/giro-delle-creste-di-pregasina-e-punta-larici/",
    "https://www.itineraridimontagna.it/ferrate-susatti-foletti-cima-capi/",
    "https://www.itineraridimontagna.it/piz-boe-traversata-gruppo-sella/",
    "https://www.itineraridimontagna.it/ferrata-campalani-gruppo-carega/",
    "https://www.itineraridimontagna.it/giro-della-pala-di-san-martino/",
    "https://www.itineraridimontagna.it/cima-cavallazza-laghi-colbricon/",
    "https://www.itineraridimontagna.it/corna-trentapassi-escursione-anello-zone/"
];


function scrapeAll(urls = links) {
    console.log("Trying to scrape " + urls.length + " links");
    urls.forEach((url, i) => {

        setTimeout(() => {
            scrape(url).catch((e) => { console.log(e + " Error scraping " + url) });

        }, 500 * i);;
    });
}

async function scrape(url) {
    await fetch('https://api.codetabs.com/v1/proxy?quest=' + url)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.text().then(function (data) {
                    // data contains all the plain html of the url you previously set, 
                    // you can use it as you want, it is typeof string
                    // console.log(data);

                    var wrapper = document.createElement('html');
                    wrapper.innerHTML = data;
                    code = wrapper;

                    content.title = code.querySelector(".page-title").innerHTML;
                    content.difficulty = code.querySelector('li[data-field="difficolta"]').childNodes[1].nodeValue.split(" ")[0];
                    content.duration = code.querySelector('li[data-field="durata"]').childNodes[1].nodeValue.split(/[- ]+/)[0];;
                    content.elevation_gain = code.querySelector('li[data-field="dislivello"]').childNodes[1].nodeValue.split(" ")[0];
                    content.group = code.querySelector('li[data-field="gruppo_montuoso"]').childNodes[1].nodeValue;
                    content.max_altitude = code.querySelector('.kt-svg-icon-list-item-7 span').childNodes[1].nodeValue.replace(/^\D+/g, '').split(" ");
                    content.max_altitude = content.max_altitude[content.max_altitude.length - 2];
                    content.trail_length = code.querySelector('.kt-svg-icon-list-item-4 span').childNodes[1].nodeValue.replace(/^\D+/g, '').split(" ")[0];
                    content.start_google_maps_url = code.querySelector('.kt-svg-icon-list-item-6 a').href;
                    content.location = code.querySelector('.rank-math-breadcrumb p').childNodes[2].innerHTML.split("del ")[1];
                    content.description = code.querySelector('.ct-container .entry-content p').innerHTML.replace(/<\/?strong>/g, "");;
                    // content.title = code.querySelector(".page-title").innerHTML;

                    content.imageURL = code.querySelector('.hero-section .ct-image-container img').getAttribute("data-src");
                    content.page_url = url;
                    content.tags = [];

                    if (content.title.toLowerCase().includes("anello") || content.description.toLowerCase().includes("anello")) {
                        content.tags.push("Anello");
                    }

                    if (content.title.toLowerCase().includes("ferrata") || content.description.toLowerCase().includes("ferrata")) {
                        content.tags.push("Ferrata");
                    }

                    if (content.title.toLowerCase().includes("crest") || content.description.toLowerCase().includes("crest")) {
                        content.tags.push("Cresta");
                    }

                    if (content.title.toLowerCase().includes("ciaspole") || content.description.toLowerCase().includes("ciaspole")) {
                        content.tags.push("Ciaspole");
                    }

                    if (content.title.toLowerCase().includes("trekking") || content.description.toLowerCase().includes("trekking")) {
                        content.tags.push("Trekking");
                    }

                    if (content.title.toLowerCase().includes("fium") ||
                        content.description.toLowerCase().includes("fium")) {
                        content.tags.push("Fiume");
                    }

                    if (content.title.toLowerCase().includes("lag") ||
                        content.description.toLowerCase().includes("lag")) {
                        content.tags.push("Lago");
                    }

                    if (content.title.toLowerCase().includes("ghiacci") ||
                        content.description.toLowerCase().includes("ghiacci")) {
                        content.tags.push("Ghiacciaio");
                    }
                    if (content.title.toLowerCase().includes("cascat") ||
                        content.description.toLowerCase().includes("cascat")) {
                        content.tags.push("Cascata");
                    }

                    if (content.title.toLowerCase().includes("guerr") ||
                        content.description.toLowerCase().includes("guerr")) {
                        content.tags.push("Storia");
                    }
                    if (content.title.toLowerCase().includes("rifug") ||
                        content.description.toLowerCase().includes("rifug")) {
                        content.tags.push("Rifugio");
                    }

                    if (content.title.toLowerCase().includes("malg") ||
                        content.description.toLowerCase().includes("malg")) {
                        content.tags.push("Malga");
                    }

                    if (content.title.toLowerCase().includes("bivacc") ||
                        content.description.toLowerCase().includes("bivacc")) {
                        content.tags.push("Bivacco");
                    }
                    if (content.title.toLowerCase().includes("bambin") ||
                        content.description.toLowerCase().includes("bambin")) {
                        content.tags.push("Bambini");
                    }
                    console.log(content);
                    try {

                        image_preview.style.backgroundImage = "url(" + content.imageURL + ")";
                    } catch (error) {

                    }
                    submitTrail(content);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function submitTrail(content) {
    let trail = new Trail();
    trail.title = content.title;
    trail.authorId = getCurrentUser().uid;
    trail.authorName = getCurrentUser().displayName;
    trail.difficulty = content.difficulty;
    trail.duration = content.duration;
    trail.group = content.group;
    trail.trail_length = content.trail_length;
    trail.location = content.location;
    trail.max_altitude = content.max_altitude;
    trail.elevation_gain = content.elevation_gain;
    trail.url = content.page_url;
    trail.imagesURL.push(content.imageURL);
    trail.description = content.description.replace(/\s+/g, " ").split(/(?=\s)/gi).slice(0, 30).join('') + "...";
    trail.tags = content.tags;
    console.log(trail);
    trail.upload();
}
