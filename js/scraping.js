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

let linksMagicoVeneto = [
    // "https://www.magicoveneto.it/Dolomiti/DolomitiSinistraPiave/Val-Zemola-escursione-Cava-Buscada-casera-Bedin-rifugio-Maniago-Duranno.htm",
    // "https://www.magicoveneto.it/Dolomiti/CadiniMisurina/Escursione-Lago-Misurina-Col-de-Varda-Rif-Citta-Carpi-Agriturismo-Malga-Maraia.htm",
    // "https://www.magicoveneto.it/Altipian/Melette-Fior/Monte-Fior-Citta-di-Roccia.htm",
    // "https://www.magicoveneto.it/Altipian/Roana/Stonhaus-Loch-Voragine-Monte-Erio-Roana.htm",
    // "https://www.magicoveneto.it/Altipian/Asiago/Monte-Zebio-Asiago.htm",
    // "https://www.magicoveneto.it/Dolomiti/ColDiLana-SetSass-Pralongia/Cima-SetSass-Valparola-Pralongia.htm",
    // "https://www.magicoveneto.it/Dolomiti/DolomitiDAmpezzo/Falzarego-Galleria-Lagazuoi-Val-Travenanzes-Col-dei-Bos.htm",
    // "https://www.magicoveneto.it/Dolomiti/Giau/Escursione-Falzarego-Averau-Nuvolau-Cinque-Torri.htm",
    // "https://www.magicoveneto.it/Dolomiti/DolomitiDAmpezzo/Sass-de-Stria.htm",
    // "https://www.magicoveneto.it/Dolomiti/ColDiLana-SetSass-Pralongia/Castello-Andraz-Col-di-Lana-Sief-Federe.htm",
    // "https://www.magicoveneto.it/Dolomiti/Giau/Escursione-Passo-Giau-Mondeval-Lastoi-de-Formin.htm",
    // "https://www.magicoveneto.it/Dolomiti/DolomitiDiSesto-Lavaredo/Giro-attorno-alle-Tre-Cime-di-Lavaredo.htm",
    // "https://www.magicoveneto.it/Dolomiti/PaleSanMartino/Trekking-del-Cristo-Pensante-Passo-Rolle-Pale-San-Martino.htm",
    // "https://www.magicoveneto.it/Dolomiti/DolomitiSinistraPiave/Val-Zemola-escursione-Cava-Buscada-casera-Bedin-rifugio-Maniago-Duranno.htm",
    // "https://www.magicoveneto.it/Dolomiti/Civetta/Passo-Duran-Rifugio-Carestiato-Framont.htm",
    "",
    "",
    "",

];

let linksEscursioniFriuli = [
    "https://escursionifriuli.it/escursioni_a_piedi/monte-osternig/",
    "https://escursionifriuli.it/escursioni_a_piedi/monte-forato-dal-gilberti/",
    "https://escursionifriuli.it/escursioni_a_piedi/cima-di-terrarossa/",
    "https://escursionifriuli.it/escursioni_a_piedi/anello-cima-del-cacciatore/",
    "https://escursionifriuli.it/escursioni_a_piedi/jof-di-miezegnot/",
    "https://escursionifriuli.it/escursioni_a_piedi/monte-lussari/",
    "https://escursionifriuli.it/escursioni_a_piedi/anello-del-monte-robon/",
    "https://escursionifriuli.it/escursioni_a_piedi/orrido-dello-slizza/",
    "https://escursionifriuli.it/escursioni_a_piedi/ta-lipa-pot/",
    "https://escursionifriuli.it/escursioni_a_piedi/laghi-di-fusine/",
    "https://escursionifriuli.it/escursioni_a_piedi/lago-del-predil/",
    "https://escursionifriuli.it/escursioni_a_piedi/raggiungere-rifugio-zacchi/",
    "https://escursionifriuli.it/escursioni_a_piedi/rifugio-gilberti/",
    "https://escursionifriuli.it/escursioni_a_piedi/monte-osternig/",
    "https://escursionifriuli.it/escursioni_a_piedi/rifugio-corsi-sentieri/",
    "https://escursionifriuli.it/escursioni_a_piedi/rifugio-brazza/",
    "https://escursionifriuli.it/escursioni_a_piedi/raggiungere-rifugio-zacchi/",
    "https://escursionifriuli.it/escursioni_a_piedi/tiglio-di-napoleone/",
    "https://escursionifriuli.it/escursioni_a_piedi/val-saisera-wild-track/",
    "https://escursionifriuli.it/escursioni_a_piedi/malga-priu/",
    "https://escursionifriuli.it/escursioni_a_piedi/val-bartolo/",
    "https://escursionifriuli.it/escursioni_a_piedi/monte-nebria/",
    "https://escursionifriuli.it/escursioni_a_piedi/rifugio-pellarini/",
    "https://escursionifriuli.it/escursioni_a_piedi/rifugio-grego/",
    "https://escursionifriuli.it/escursioni_a_piedi/bivacco-battaglione-gemona/",
    "https://escursionifriuli.it/escursioni_a_piedi/jof-di-sompdogna/",
    "https://escursionifriuli.it/escursioni_a_piedi/cappella-zita/",
    "https://escursionifriuli.it/escursioni_a_piedi/il-lago-dimon/",
    "https://escursionifriuli.it/escursioni_a_piedi/lago-di-bordaglia/",
    "https://escursionifriuli.it/escursioni_a_piedi/malghe-di-sauris/",
    "https://escursionifriuli.it/escursioni_a_piedi/lago-volaia/",
    "https://escursionifriuli.it/escursioni_a_piedi/lago-avostanis-creta-timau/",
    "https://escursionifriuli.it/escursioni_a_piedi/casera-ungarina-confin/",
    "https://escursionifriuli.it/escursioni_a_piedi/anello-del-monte-floriz/",
    "https://escursionifriuli.it/escursioni_a_piedi/rifugio-marinelli/",
    "https://escursionifriuli.it/escursioni_a_piedi/anello-del-monte-cuarnan/",
    "https://escursionifriuli.it/escursioni_a_piedi/creta-di-timau/",
    "https://escursionifriuli.it/escursioni_a_piedi/anello-del-monte-lodin/",
    "https://escursionifriuli.it/escursioni_a_piedi/monte-cuar/",
    "https://escursionifriuli.it/escursioni_a_piedi/rifugio-fabiani/",
    "https://escursionifriuli.it/escursioni_a_piedi/monte-volaia/",
    "https://escursionifriuli.it/escursioni_a_piedi/rifugio-de-gasperi/",
    "https://escursionifriuli.it/escursioni_a_piedi/monte-festa/",
    "https://escursionifriuli.it/escursioni_a_piedi/anello-di-pinzano/",
    "https://escursionifriuli.it/escursioni_a_piedi/monte-dauda/",
    "https://escursionifriuli.it/escursioni_a_piedi/malga-coot/",
    "https://escursionifriuli.it/escursioni_a_piedi/sentiero-delle-creste/",
    "https://escursionifriuli.it/escursioni_a_piedi/malga-lavareit/",
    "https://escursionifriuli.it/escursioni_a_piedi/malga-glazzat/",
    "https://escursionifriuli.it/escursioni_a_piedi/monte-terzo/",
    "https://escursionifriuli.it/escursioni_a_piedi/rifugio-grauzaria/",
    "https://escursionifriuli.it/escursioni_a_piedi/malga-tartoi/",
    "https://escursionifriuli.it/escursioni_a_piedi/pal-piccolo-e-freikofel/",
    "https://escursionifriuli.it/escursioni_a_piedi/grotta-di-attila/",
    "https://escursionifriuli.it/escursioni_a_piedi/monte-paularo/",
    "https://escursionifriuli.it/escursioni_a_piedi/monte-zermula/",
    "https://escursionifriuli.it/escursioni_a_piedi/lago-di-barcis/",
    "https://escursionifriuli.it/escursioni_a_piedi/anello-monte-cjastelat/",
    "https://escursionifriuli.it/escursioni_a_piedi/monte-pala/",
    "https://escursionifriuli.it/escursioni_a_piedi/monte-jouf/",
    "https://escursionifriuli.it/escursioni_a_piedi/campanile-di-val-montanaia/",
    "https://escursionifriuli.it/escursioni_a_piedi/rifugio-pradut/",
    "https://escursionifriuli.it/escursioni_a_piedi/malghe-di-piancavallo/",
    "https://escursionifriuli.it/escursioni_a_piedi/casera-valmenon/",
    "https://escursionifriuli.it/escursioni_a_piedi/rifugio-pussa/"];



function scrapeAll(urls = links) {
    console.log("Trying to scrape " + urls.length + " links");
    urls.forEach((url, i) => {

        setTimeout(() => {
            scrape(url).catch((e) => { console.log(e + " Error scraping " + url) });

        }, 500 * i);;
    });
}

function getElementMagicoVeneto(html, name) {
    var myEles = html.querySelectorAll("td");
    let index;
    for (var i = 0; i < myEles.length; i++) {
        if (myEles[i].innerHTML.slice(0, -1) == (name.slice(0, -1)) || myEles[i].innerHTML.includes(">" + name)) {
            // console.log('gotcha');
            index = i;
            return myEles[index + 1];
        }
    }
}

function getElementEscursioniFriuli(html, name) {
    var myEles = html.querySelectorAll(".et_pb_blurb_container");
    for (var i = 0; i < myEles.length; i++) {
        // console.log(myEles[i]);
        if (myEles[i].querySelector("span").innerHTML.toLowerCase().includes(name.toLowerCase())) {
            // console.log('gotcha');
            // console.log(myEles[i].querySelector(".et_pb_blurb_description").innerHTML);
            return myEles[i].querySelector(".et_pb_blurb_description").innerHTML;
        }
    }
}

const divmod = (x, y) => [Math.floor(x / y), x % y];

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

                    // console.log(code);
                    // content = {};


                    if (url.includes("itineraridimontagna")) {
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
                    }

                    if (url.includes("magicoveneto")) {
                        try {
                            let path = url.split("/");
                            let p = "";
                            for (let i = 0; i < path.length - 1; i++) {
                                // console.log(path[i]);
                                p = p.concat("/", path[i]);
                            }
                            path = p.replace("/", "") + "/";
                            content.title = "";
                            content.title = code.querySelector("#Gps th").innerHTML;
                            if (!content.title) {
                                content.title = code.querySelector("#BCCBoxText h2").innerHTML;
                            }
                            content.title = content.title.charAt(0).toUpperCase() + content.title.slice(1);
                            content.trail_length = getElementMagicoVeneto(code, "lunghezza").innerHTML.match(/\d+/)[0].replace(",", ".");
                            content.duration = 0;
                            content.duration = getElementMagicoVeneto(code, "tempi").innerHTML.match(/\d+:?\.?(\d+)?/g);
                            if (content.duration) {
                                (content.duration.map(x => x.replace(':', '.'))).map(x => x = parseFloat(x));
                                content.duration = content.duration.reduce(function (sum, value) {
                                    return sum + value;
                                }, 0);
                            } else {
                                content.duration = 0;
                            }



                            content.elevation_gain = getElementMagicoVeneto(code, "dislivello").innerHTML.match(/\d+/)[0];
                            content.difficulty = getElementMagicoVeneto(code, "difficoltà").innerHTML.match(/(?<=\=)[A-Z]+/)[0];
                            content.max_altitude = 0;
                            content.max_altitude = getElementMagicoVeneto(code, "quota").innerHTML.match(/(?<=\max\.m\.(\s+)?)\d+\.?\d+/)[0].replace(".", "")
                            content.group = getElementMagicoVeneto(code, "monte").innerHTML.match(/(?<=.)gruppo.+|(?<=\- ).+/g);
                            if (content.group) {
                                content.group = content.group[0];
                                content.group = content.group.charAt(0).toUpperCase() + content.group.slice(1);
                            }
                            else {
                                content.group = getElementMagicoVeneto(code, "monte").innerHTML;
                            }

                            content.description = code.querySelector("#BCCBoxText").innerHTML.replaceAll(/<h2>.*<\/h2>/g, "").replaceAll("\n", " ").replaceAll("\t", " ").replaceAll("\n\t", " ").replace(/(\n)?(\t)*<\/?[^>]+(>|$)/g, "").trim();
                            content.location = "Veneto";
                            content.imageURL = code.querySelector("#CDXHead img").src.split("/");
                            content.imageURL = path + content.imageURL[content.imageURL.length - 1];
                            try {
                                let lat = getElementMagicoVeneto(code, "park").innerHTML.match(/(?<=\N.)\d+\S+|(?<=\E\.?)\d{2}°.+"/g)[0].replace(".", "").replace("°", ".").replace("'", "").replace("\"", "");
                                let long = getElementMagicoVeneto(code, "park").innerHTML.match(/(?<=\N.)\d+\S+|(?<=\E\.?)\d{2}°.+"/g)[1].replace(".", "").replace("°", ".").replace("'", "").replace("\"", "");

                                content.start_google_maps_url = "https://www.google.it/maps/place/" + lat + "," + long + "/@" + lat + "," + long + ",16.69z/data=!4m5!3m4!1s0x0:0xa25ca5f128710886!8m2!3d46.578!4d12.2532222";

                            } catch {

                            }
                            if (!content.start_google_maps_url) {
                                content.start_google_maps_url = "";
                            }

                            // content.title = code.querySelector(".page-title").innerHTML;
                            // console.log(content);
                        } catch (error) {

                        }


                    }

                    if (url.includes("escursionifriuli")) {
                        content.title = code.querySelector("h1").innerHTML;
                        if (code.querySelector(".et_pb_text_inner a").innerHTML.includes("Turist")) {
                            content.difficulty = "T";
                        } else if (code.querySelector(".et_pb_text_inner a").innerHTML.includes("esperti")) {
                        } else {
                            content.difficulty = "E";
                        }
                        content.duration = (getElementEscursioniFriuli(code, "tempistiche").split("-"))[0].split("h")[0];
                        content.elevation_gain = (getElementEscursioniFriuli(code, "dislivello")).split("m")[0];
                        content.group = "Alpi Giulie";
                        content.max_altitude = (getElementEscursioniFriuli(code, "altitudine").split("-"))[1].split("m")[0];
                        content.trail_length = (getElementEscursioniFriuli(code, "km totali").split("-"))[0].split("km")[0];
                        try {
                            let coords = code.querySelector("iframe").getAttribute("data-lazy-src").match(/(?<=!2d)\d+\.\d+|(?<=!3d)\d+\.\d+/g);
                            content.start_google_maps_url = `https://www.google.com/maps/place/${coords[1]}+${coords[0]}/@${coords[1]},${coords[0]}`;
                        } catch (error) {
                            content.start_google_maps_url = "";
                            console.log("Error google maps link");
                        }
                        content.location = "Friuli Venezia Giulia";
                        try {
                            content.description = (code.querySelector("#ez-toc-container+p").innerHTML.replaceAll("<strong>", "")).replaceAll("</strong>", "");
                        } catch (error) {
                            content.description = "";
                        }
                        content.imageURL = code.querySelectorAll("body img")[5].src;

                    }


                    content.page_url = url;
                    content.tags = [];

                    // console.log(content);

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
                        content.description.toLowerCase().includes("guerr") || content.description.toLowerCase().includes("fort")) {
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
                    // console.log(content);
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
    trail.duration = parseFloat(content.duration);
    trail.group = content.group;
    trail.trail_length = parseFloat(content.trail_length);
    trail.location = content.location;
    trail.max_altitude = parseFloat(content.max_altitude);
    trail.elevation_gain = parseFloat(content.elevation_gain);
    trail.url = content.page_url;
    trail.imagesURL.push(content.imageURL);
    trail.description = content.description.replace(/\s+/g, " ").split(/(?=\s)/gi).slice(0, 118).join('') + "...";
    trail.tags = content.tags;
    trail.start_google_maps_url = content.start_google_maps_url;
    console.log(trail);
    trail.upload();
}

let manualFriuliTrails = [
    {
        title: "Monte Tricorno",
        difficulty: "EE",
        duration: 8.5,
        elevation_gain: 1400,
        group: "Alpi Giulie",
        max_altitude: 2458,
        trail_length: 13.0,
        location: "Friuli Venezia Giulia",
        description: "Impegnativa salita alla terza cima più alta delle Alpi Giulie slovene, accessibile dal versante italiano. Percorso alpinistico con tratti di cresta esposta e viste eccezionali su tre paesi.",
        tags: ["CRESTA", "Trekking"],
        start_google_maps_url: "https://www.google.com/maps/place/46.4333,13.7833/@46.4333,13.7833,14z",
        imageURL: "https://www.summitpost.org/images/large/276326.jpg",
        page_url: "https://www.summitpost.org/triglav-tricorno/173064"
    },
    {
        title: "Monte Cogliatis",
        difficulty: "E",
        duration: 6.0,
        elevation_gain: 950,
        group: "Alpi Carniche",
        max_altitude: 2043,
        trail_length: 10.0,
        location: "Friuli Venezia Giulia",
        description: "Panoramica escursione nelle Alpi Carniche che offre splendide viste sulla valle del But e sui gruppi montuosi circostanti. Sentiero ben tracciato attraverso boschi e pascoli alpini.",
        tags: ["Trekking"],
        start_google_maps_url: "https://www.google.com/maps/place/46.4667,12.9167/@46.4667,12.9167,14z",
        imageURL: "https://www.avventurosamente.it/joomla/images/stories/escursioni/cogliatis/cogliatis_1.jpg",
        page_url: "https://www.avventurosamente.it/joomla/index.php/escursioni/friuli-venezia-giulia/alpi-carniche/monte-cogliatis"
    },
    {
        title: "Rifugio Tolazzi",
        difficulty: "E",
        duration: 4.0,
        elevation_gain: 600,
        group: "Alpi Carniche",
        max_altitude: 1550,
        trail_length: 7.0,
        location: "Friuli Venezia Giulia",
        description: "Piacevole escursione al rifugio situato in una splendida posizione panoramica nelle Alpi Carniche. Il sentiero attraversa boschi di conifere e praterie alpine.",
        tags: ["Rifugio"],
        start_google_maps_url: "https://www.google.com/maps/place/46.4833,12.8667/@46.4833,12.8667,14z",
        imageURL: "https://www.rifugiotolazzi.it/wp-content/uploads/2019/08/rifugio-tolazzi.jpg",
        page_url: "https://www.rifugiotolazzi.it/"
    },
    {
        title: "Cima Preti",
        difficulty: "EE",
        duration: 9.0,
        elevation_gain: 1300,
        group: "Dolomiti Friulane",
        max_altitude: 2706,
        trail_length: 14.0,
        location: "Friuli Venezia Giulia",
        description: "Impegnativa salita alla cima più alta delle Dolomiti Friulane, caratterizzata da paesaggi selvaggi e incontaminati. Richiede esperienza alpinistica e buone condizioni meteo.",
        tags: ["Trekking"],
        start_google_maps_url: "https://www.google.com/maps/place/46.3167,12.3833/@46.3167,12.3833,14z",
        imageURL: "https://www.summitpost.org/images/large/589235.jpg",
        page_url: "https://www.summitpost.org/cima-preti/589235"
    },
    {
        title: "Monte Duranno",
        difficulty: "E",
        duration: 7.0,
        elevation_gain: 1000,
        group: "Dolomiti Friulane",
        max_altitude: 2652,
        trail_length: 11.0,
        location: "Friuli Venezia Giulia",
        description: "Spettacolare escursione verso una delle cime più belle delle Dolomiti Friulane, con viste panoramiche eccezionali su tutto il gruppo montuoso e le vallate circostanti.",
        tags: ["Trekking"],
        start_google_maps_url: "https://www.google.com/maps/place/46.3333,12.4167/@46.3333,12.4167,14z",
        imageURL: "https://www.dolomitifriulane.net/wp-content/uploads/2020/06/monte-duranno.jpg",
        page_url: "https://www.dolomitifriulane.net/monte-duranno/"
    },
    {
        title: "Sentiero Rilke - Trieste",
        difficulty: "T",
        duration: 2.5,
        elevation_gain: 200,
        group: "Carso Triestino",
        max_altitude: 350,
        trail_length: 5.5,
        location: "Friuli Venezia Giulia",
        description: "Suggestivo sentiero panoramico che collega Sistiana a Duino, dedicato al poeta Rainer Maria Rilke. Offre viste spettacolari sul Golfo di Trieste e sul Castello di Duino.",
        tags: ["Bambini", "Storia"],
        start_google_maps_url: "https://www.google.com/maps/place/45.7833,13.6167/@45.7833,13.6167,14z",
        imageURL: "https://www.turismofvg.it/sites/default/files/styles/galleria_principale/public/enti/sentiero_rilke.jpg",
        page_url: "https://www.turismofvg.it/cosa-vedere/sentiero-rilke"
    },
    {
        title: "Monte Grisa - Trieste",
        difficulty: "T",
        duration: 3.0,
        elevation_gain: 300,
        group: "Carso Triestino",
        max_altitude: 458,
        trail_length: 6.0,
        location: "Friuli Venezia Giulia",
        description: "Escursione urbana alla collina che ospita il famoso Tempio Mariano progettato da Antonio Spagnoli. Panorama eccezionale su Trieste, il Golfo e l'Istria.",
        tags: ["Bambini"],
        start_google_maps_url: "https://www.google.com/maps/place/45.6500,13.7833/@45.6500,13.7833,14z",
        imageURL: "https://www.turismofvg.it/sites/default/files/styles/galleria_principale/public/enti/monte_grisa_tempio.jpg",
        page_url: "https://www.turismofvg.it/cosa-vedere/monte-grisa"
    },
    {
        title: "Sentiero Carsiana",
        difficulty: "T",
        duration: 2.0,
        elevation_gain: 100,
        group: "Carso Triestino",
        max_altitude: 380,
        trail_length: 3.5,
        location: "Friuli Venezia Giulia",
        description: "Percorso botanico didattico attraverso il giardino botanico Carsiana, che presenta la flora tipica del Carso triestino e delle regioni limitrofe in un ambiente naturale preservato.",
        tags: ["Bambini"],
        start_google_maps_url: "https://www.google.com/maps/place/45.8167,13.6500/@45.8167,13.6500,14z",
        imageURL: "https://www.carsiana.eu/wp-content/uploads/2020/04/carsiana-sentiero.jpg",
        page_url: "https://www.carsiana.eu/"
    },
    {
        title: "Monte Jôf del Montasio",
        difficulty: "EE",
        duration: 10.0,
        elevation_gain: 1600,
        group: "Alpi Giulie",
        max_altitude: 2754,
        trail_length: 15.0,
        location: "Friuli Venezia Giulia",
        description: "Impegnativa salita alla seconda cima più alta delle Alpi Giulie italiane. Percorso alpinistico di grande prestigio che richiede esperienza su roccia e condizioni meteo stabili.",
        tags: ["Trekking", "CRESTA"],
        start_google_maps_url: "https://www.google.com/maps/place/46.4333,13.4333/@46.4333,13.4333,14z",
        imageURL: "https://www.summitpost.org/images/large/276327.jpg",
        page_url: "https://www.summitpost.org/jof-del-montasio/173065"
    },
    {
        title: "Val Resia - Sentiero Natura",
        difficulty: "T",
        duration: 3.0,
        elevation_gain: 200,
        group: "Prealpi Giulie",
        max_altitude: 650,
        trail_length: 7.0,
        location: "Friuli Venezia Giulia",
        description: "Facile percorso naturalistico nella valle dove si conserva ancora l'antica lingua resiana. Attraversa borghi caratteristici e offre scorci sulla cultura locale unica.",
        tags: ["Bambini", "Storia"],
        start_google_maps_url: "https://www.google.com/maps/place/46.3500,13.2167/@46.3500,13.2167,14z",
        imageURL: "https://www.valresia.it/wp-content/uploads/2020/05/val-resia-sentiero.jpg",
        page_url: "https://www.valresia.it/natura-e-sentieri/"
    },
    {
        title: "Monte Matajur",
        difficulty: "E",
        duration: 7.0,
        elevation_gain: 1100,
        group: "Prealpi Giulie",
        max_altitude: 1641,
        trail_length: 12.0,
        location: "Friuli Venezia Giulia",
        description: "Storica escursione sulla montagna sacra agli Sloveni, teatro di importanti eventi della Prima Guerra Mondiale. Dalla vetta si gode una vista a 360° su Friuli, Veneto e Slovenia.",
        tags: ["Trekking", "Storia"],
        start_google_maps_url: "https://www.google.com/maps/place/46.2167,13.4500/@46.2167,13.4500,14z",
        imageURL: "https://www.natisone.it/wp-content/uploads/2019/05/matajur-vetta.jpg",
        page_url: "https://www.natisone.it/monte-matajur-escursione/"
    },
    {
        title: "Grotta di Villanova",
        difficulty: "T",
        duration: 2.0,
        elevation_gain: 150,
        group: "Prealpi Friulane",
        max_altitude: 450,
        trail_length: 4.0,
        location: "Friuli Venezia Giulia",
        description: "Interessante escursione naturalistica che combina il trekking con la speleologia. La grotta, visitabile con guida, offre un affascinante viaggio nel mondo sotterraneo carsico.",
        tags: ["Bambini"],
        start_google_maps_url: "https://www.google.com/maps/place/46.0333,12.9167/@46.0333,12.9167,14z",
        imageURL: "https://www.grottadivillanova.it/wp-content/uploads/2020/04/grotta-villanova-ingresso.jpg",
        page_url: "https://www.grottadivillanova.it/"
    }
];

// Function to add manual trails to your database
function addManualTrails() {
    manualFriuliTrails.forEach(trailData => {
        let trail = new Trail();
        trail.title = trailData.title;
        trail.authorId = getCurrentUser().uid;
        trail.authorName = getCurrentUser().displayName;
        trail.difficulty = trailData.difficulty;
        trail.duration = trailData.duration;
        trail.group = trailData.group;
        trail.trail_length = trailData.trail_length;
        trail.location = trailData.location;
        trail.max_altitude = trailData.max_altitude;
        trail.elevation_gain = trailData.elevation_gain;
        trail.url = trailData.page_url;
        trail.imagesURL.push(trailData.imageURL);
        trail.description = trailData.description;
        trail.tags = trailData.tags;
        trail.start_google_maps_url = trailData.start_google_maps_url;

        console.log("Adding trail:", trail.title);
        trail.upload();
    });
}