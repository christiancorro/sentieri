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
        title: "Jof di Miezegnot",
        difficulty: "E",
        duration: 6.0,
        elevation_gain: 1090,
        group: "Alpi Giulie",
        max_altitude: 2087,
        trail_length: 9.9,
        location: "Friuli Venezia Giulia",
        description: "Impegnativa escursione alpina nelle Alpi Giulie che offre viste spettacolari dalla vetta a 2087m. Il sentiero attraversa prati alpini e terreno roccioso, con un tratto finale di cresta esposta per raggiungere la vetta.",
        tags: ["TREKKING", "CRESTA", "STORIA"],
        start_google_maps_url: "https://www.google.com/maps/place/46.5089,13.4234/@46.5089,13.4234,14z",
        imageURL: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjc5ODI5NjIvYzNkZjc4YWYxOWUxNmNkZjFjZjExZDgzN2ZmY2JhYmIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsicXVhbGl0eSI6NzB9fX0=",
        page_url: "https://www.alltrails.com/trail/italy/friuli-venezia-giulia/jof-di-miezegnot"
    },
    {
        title: "Monte Lussari Anello",
        difficulty: "E",
        duration: 7.2,
        elevation_gain: 800,
        group: "Alpi Giulie",
        max_altitude: 1789,
        trail_length: 15.0,
        location: "Friuli Venezia Giulia",
        description: "Storico sentiero di pellegrinaggio ad anello che conduce al santuario di Monte Lussari, combinando significato spirituale e bellezza naturale. Il percorso circolare si snoda attraverso antiche foreste e offre panorami mozzafiato.",
        tags: ["ANELLO", "STORIA"],
        start_google_maps_url: "https://www.google.com/maps/place/46.5067,13.5833/@46.5067,13.5833,14z",
        imageURL: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/5a/24/8a/santuario-di-monte-lussari.jpg",
        page_url: "https://www.alltrails.com/trail/italy/friuli-venezia-giulia/monte-lussari"
    },
    {
        title: "Cima del Cacciatore",
        difficulty: "E",
        duration: 4.5,
        elevation_gain: 600,
        group: "Alpi Giulie",
        max_altitude: 1814,
        trail_length: 8.0,
        location: "Friuli Venezia Giulia",
        description: "Sentiero montano accessibile tramite funivia da Tarvisio, che offre viste panoramiche su tre paesi: Italia, Austria e Slovenia. Ideale per chi cerca panorami senza troppo dislivello.",
        tags: ["TREKKING"],
        start_google_maps_url: "https://www.google.com/maps/place/46.5089,13.5456/@46.5089,13.5456,14z",
        imageURL: "https://www.turismofvg.it/sites/default/files/styles/galleria_principale/public/enti/monte_lussari_2_0.jpg",
        page_url: "https://nailthetrail.com/cima-del-cacciatore-trail-gps-hiking-the-alps/"
    },
    {
        title: "Monte Canin - Ferrata Brigata Julia",
        difficulty: "EE",
        duration: 8.0,
        elevation_gain: 1200,
        group: "Alpi Giulie",
        max_altitude: 2587,
        trail_length: 12.0,
        location: "Friuli Venezia Giulia",
        description: "Spettacolare escursione verso la conca glaciale del Monte Canin utilizzando la famosa Ferrata Brigata Julia. Il percorso combina paesaggi carsici lunari, resti glaciali e tratti attrezzati con cavi metallici.",
        tags: ["FERRATA", "GHIACCIAIO", "RIFUGIO"],
        start_google_maps_url: "https://www.google.com/maps/place/46.3667,13.5167/@46.3667,13.5167,14z",
        imageURL: "https://www.turismofvg.it/sites/default/files/styles/galleria_principale/public/enti/canin_conca_glaciale.jpg",
        page_url: "https://www.wikiloc.com/hiking-trails/09-07-23-09-57-140306166"
    },
    {
        title: "Anello Monte Robon da Sella Nevea",
        difficulty: "E",
        duration: 6.5,
        elevation_gain: 900,
        group: "Alpi Giulie",
        max_altitude: 2401,
        trail_length: 11.0,
        location: "Friuli Venezia Giulia",
        description: "Escursione ad anello attraverso il famoso altopiano carsico del Canin, caratterizzata da impressionanti formazioni calcaree e viste montane mozzafiato. Un viaggio circolare nella geologia alpina.",
        tags: ["ANELLO", "TREKKING"],
        start_google_maps_url: "https://www.google.com/maps/place/46.3667,13.5167/@46.3667,13.5167,14z",
        imageURL: "https://explorerfvg.com/wp-content/uploads/2020/06/robon-sella-nevea-scaled.jpg",
        page_url: "https://explorerfvg.com/en/product/escursione-ad-anello-del-monte-robon-da-sella-nevea/"
    },
    {
        title: "Monte Peralba",
        difficulty: "E",
        duration: 7.0,
        elevation_gain: 1100,
        group: "Alpi Carniche",
        max_altitude: 2694,
        trail_length: 10.5,
        location: "Friuli Venezia Giulia",
        description: "Salita alla quarta cima più alta delle Alpi Carniche, dove nasce il fiume Piave. Viste straordinarie su Austria e Slovenia, con un significato geografico particolare come spartiacque principale.",
        tags: ["TREKKING", "FIUME"],
        start_google_maps_url: "https://www.google.com/maps/place/46.5500,12.4833/@46.5500,12.4833,14z",
        imageURL: "https://camminateinfriuli.altervista.org/images/peralba1.jpg",
        page_url: "https://www.wikiloc.com/hiking-trails/monte-peralba-53102258"
    },
    {
        title: "Creta delle Chianevate",
        difficulty: "EE",
        duration: 8.5,
        elevation_gain: 1300,
        group: "Alpi Carniche",
        max_altitude: 2769,
        trail_length: 13.0,
        location: "Friuli Venezia Giulia",
        description: "Impegnativa salita alla seconda cima più alta delle Alpi Carniche, che offre viste panoramiche eccezionali su tutta la catena montuosa. Percorso per escursionisti esperti con passaggi su cresta esposta.",
        tags: ["CRESTA", "TREKKING"],
        start_google_maps_url: "https://www.google.com/maps/place/46.5400,12.4600/@46.5400,12.4600,14z",
        imageURL: "https://www.peakware.com/photos/big/4/Chianevate2.jpg",
        page_url: "https://www.summitpost.org/creta-delle-chianevate/1065432"
    },
    {
        title: "Rifugio Gilberti da Sella Nevea",
        difficulty: "E",
        duration: 5.0,
        elevation_gain: 700,
        group: "Alpi Giulie",
        max_altitude: 1850,
        trail_length: 8.5,
        location: "Friuli Venezia Giulia",
        description: "Popolare escursione al rifugio Gilberti sull'altopiano del Canin, accessibile con funivia o a piedi attraverso scenici prati alpini. Punto di partenza ideale per esplorare l'altopiano carsico.",
        tags: ["RIFUGIO"],
        start_google_maps_url: "https://www.google.com/maps/place/46.3667,13.5167/@46.3667,13.5167,14z",
        imageURL: "https://www.rifugiogilberti.it/wp-content/uploads/2019/06/rifugio-gilberti-esterno.jpg",
        page_url: "https://escursionifriuli.it/escursioni_a_piedi/rifugio-corsi-sentieri/"
    },
    {
        title: "Jof Fuart - Via Normale con Ferrata",
        difficulty: "EE",
        duration: 9.0,
        elevation_gain: 1500,
        group: "Alpi Giulie",
        max_altitude: 2666,
        trail_length: 14.0,
        location: "Friuli Venezia Giulia",
        description: "Impegnativa salita a una delle cime più prominenti delle Alpi Giulie, caratterizzata da creste esposte e un tratto finale attrezzato con ferrata. Richiede esperienza alpinistica e ottime condizioni meteo.",
        tags: ["FERRATA", "CRESTA", "TREKKING"],
        start_google_maps_url: "https://www.google.com/maps/place/46.4167,13.5833/@46.4167,13.5833,14z",
        imageURL: "https://www.summitpost.org/images/large/276325.jpg",
        page_url: "https://www.summitpost.org/jof-fuart/173063"
    },
    {
        title: "Anello dei Laghi di Fusine",
        difficulty: "T",
        duration: 2.0,
        elevation_gain: 100,
        group: "Alpi Giulie",
        max_altitude: 930,
        trail_length: 4.5,
        location: "Friuli Venezia Giulia",
        description: "Facile passeggiata ad anello adatta alle famiglie intorno ai bellissimi laghi di Fusine, con acque cristalline che riflettono le cime circostanti. Uno dei percorsi circolari più fotografati del Friuli Venezia Giulia.",
        tags: ["ANELLO", "LAGO", "BAMBINI"],
        start_google_maps_url: "https://www.google.com/maps/place/46.5000,13.6833/@46.5000,13.6833,14z",
        imageURL: "https://www.turismofvg.it/sites/default/files/styles/galleria_principale/public/enti/laghi_di_fusine_superiore.jpg",
        page_url: "https://escursionifriuli.it/escursioni_a_piedi/laghi-di-fusine/"
    },
    {
        title: "Orrido dello Slizza",
        difficulty: "T",
        duration: 1.5,
        elevation_gain: 50,
        group: "Valle del Fella",
        max_altitude: 750,
        trail_length: 3.0,
        location: "Friuli Venezia Giulia",
        description: "Breve ma spettacolare passeggiata attraverso la gola dello Slizza, caratterizzata da formazioni rocciose drammatiche e acque impetuose. Perfetto per una gita in famiglia.",
        tags: ["FIUME", "BAMBINI"],
        start_google_maps_url: "https://www.google.com/maps/place/46.5067,13.5833/@46.5067,13.5833,14z",
        imageURL: "https://www.turismofvg.it/sites/default/files/styles/galleria_principale/public/enti/orrido_slizza.jpg",
        page_url: "https://escursionifriuli.it/escursioni_a_piedi/orrido-dello-slizza/"
    },
    {
        title: "Monte Cuar",
        difficulty: "E",
        duration: 5.5,
        elevation_gain: 800,
        group: "Alpi Carniche",
        max_altitude: 1966,
        trail_length: 9.0,
        location: "Friuli Venezia Giulia",
        description: "Escursione panoramica nelle Alpi Carniche che offre belle viste sulla valle del Tagliamento e sulle cime austriache. Sentiero ben segnalato attraverso boschi e pascoli alpini.",
        tags: ["TREKKING"],
        start_google_maps_url: "https://www.google.com/maps/place/46.4500,12.9500/@46.4500,12.9500,14z",
        imageURL: "https://escursionifriuli.it/wp-content/uploads/2020/05/monte-cuar-panorama.jpg",
        page_url: "https://escursionifriuli.it/escursioni_a_piedi/monte-cuar/"
    },
    {
        title: "Rifugio Marinelli",
        difficulty: "E",
        duration: 4.0,
        elevation_gain: 600,
        group: "Alpi Carniche",
        max_altitude: 1600,
        trail_length: 7.5,
        location: "Friuli Venezia Giulia",
        description: "Piacevole escursione verso un rifugio di montagna attraverso boschi e pascoli alpini, perfetta per una pausa gastronomica in quota. Il sentiero offre belle viste panoramiche sulle vallate circostanti.",
        tags: ["RIFUGIO", "MALGA"],
        start_google_maps_url: "https://www.google.com/maps/place/46.4200,12.8500/@46.4200,12.8500,14z",
        imageURL: "https://www.rifugiomarinelli.it/wp-content/uploads/2019/07/rifugio-marinelli.jpg",
        page_url: "https://escursionifriuli.it/escursioni_a_piedi/rifugio-marinelli/"
    },
    {
        title: "Creta di Timau",
        difficulty: "E",
        duration: 6.0,
        elevation_gain: 950,
        group: "Alpi Carniche",
        max_altitude: 2218,
        trail_length: 10.0,
        location: "Friuli Venezia Giulia",
        description: "Gratificante salita a una prominente cima carnica che offre eccellenti viste sulle vallate circostanti e sul confine austriaco. Sentiero ben tracciato attraverso ambienti alpini variati.",
        tags: ["TREKKING"],
        start_google_maps_url: "https://www.google.com/maps/place/46.5167,12.7833/@46.5167,12.7833,14z",
        imageURL: "https://www.avventurosamente.it/joomla/images/stories/escursioni/creta_timau/creta_timau_3.jpg",
        page_url: "https://escursionifriuli.it/escursioni_a_piedi/creta-di-timau/"
    },
    {
        title: "Campanile di Val Montanaia",
        difficulty: "EE",
        duration: 8.0,
        elevation_gain: 1100,
        group: "Dolomiti Friulane",
        max_altitude: 2173,
        trail_length: 12.0,
        location: "Friuli Venezia Giulia",
        description: "Spettacolare avvicinamento al famoso campanile delle Dolomiti Friulane, una delle formazioni rocciose più iconiche della regione. Richiede esperienza e buone condizioni meteo.",
        tags: ["TREKKING"],
        start_google_maps_url: "https://www.google.com/maps/place/46.3167,12.4833/@46.3167,12.4833,14z",
        imageURL: "https://www.summitpost.org/images/large/150524.jpg",
        page_url: "https://escursionifriuli.it/escursioni_a_piedi/campanile-di-val-montanaia/"
    },
    {
        title: "Monte Zermula",
        difficulty: "E",
        duration: 6.5,
        elevation_gain: 1000,
        group: "Alpi Carniche",
        max_altitude: 2143,
        trail_length: 11.0,
        location: "Friuli Venezia Giulia",
        description: "Escursione verso una delle cime più panoramiche delle Alpi Carniche orientali, con viste spettacolari su Austria, Slovenia e le vallate friulane. Percorso impegnativo ma molto gratificante.",
        tags: ["TREKKING"],
        start_google_maps_url: "https://www.google.com/maps/place/46.4833,13.0833/@46.4833,13.0833,14z",
        imageURL: "https://escursionifriuli.it/wp-content/uploads/2020/07/monte-zermula-vetta.jpg",
        page_url: "https://escursionifriuli.it/escursioni_a_piedi/monte-zermula/"
    },
    {
        title: "Rifugio De Gasperi",
        difficulty: "E",
        duration: 4.5,
        elevation_gain: 650,
        group: "Alpi Carniche",
        max_altitude: 1650,
        trail_length: 8.0,
        location: "Friuli Venezia Giulia",
        description: "Piacevole escursione al rifugio intitolato al grande statista trentino, situato in una conca panoramica delle Alpi Carniche. Ideale per famiglie e per una sosta gastronomica.",
        tags: ["RIFUGIO", "STORIA"],
        start_google_maps_url: "https://www.google.com/maps/place/46.4500,12.8000/@46.4500,12.8000,14z",
        imageURL: "https://www.rifugiodegasperi.it/wp-content/uploads/2020/06/rifugio-de-gasperi-esterno.jpg",
        page_url: "https://escursionifriuli.it/escursioni_a_piedi/rifugio-de-gasperi/"
    },
    {
        title: "Cascate del Gorgazzo",
        difficulty: "T",
        duration: 1.0,
        elevation_gain: 50,
        group: "Prealpi Friulane",
        max_altitude: 600,
        trail_length: 2.0,
        location: "Friuli Venezia Giulia",
        description: "Breve e suggestiva passeggiata alle cascate del Gorgazzo, dove una sorgente carsica crea uno spettacolare salto d'acqua color smeraldo. Perfetto per famiglie con bambini.",
        tags: ["CASCATA", "BAMBINI"],
        start_google_maps_url: "https://www.google.com/maps/place/46.1167,12.6833/@46.1167,12.6833,14z",
        imageURL: "https://www.turismofvg.it/sites/default/files/styles/galleria_principale/public/enti/gorgazzo_cascate.jpg",
        page_url: "https://www.turismofvg.it/cosa-vedere/cascate-del-gorgazzo"
    },
    {
        title: "Monte Raut",
        difficulty: "EE",
        duration: 9.0,
        elevation_gain: 1400,
        group: "Dolomiti Friulane",
        max_altitude: 2025,
        trail_length: 13.5,
        location: "Friuli Venezia Giulia",
        description: "Impegnativa escursione nella parte più selvaggia delle Dolomiti Friulane, attraverso ambienti incontaminati e paesaggi di rara bellezza. Richiede esperienza alpinistica.",
        tags: ["TREKKING"],
        start_google_maps_url: "https://www.google.com/maps/place/46.2833,12.4500/@46.2833,12.4500,14z",
        imageURL: "https://www.summitpost.org/images/large/589234.jpg",
        page_url: "https://www.summitpost.org/monte-raut/589234"
    },
    {
        title: "Anello del Lago del Predil",
        difficulty: "T",
        duration: 1.5,
        elevation_gain: 80,
        group: "Alpi Giulie",
        max_altitude: 1020,
        trail_length: 3.5,
        location: "Friuli Venezia Giulia",
        description: "Facile passeggiata ad anello intorno al lago di origine glaciale situato al confine con la Slovenia. Il percorso circolare permette di ammirare le acque turchesi che riflettono le montagne circostanti creando scenari da cartolina.",
        tags: ["ANELLO", "LAGO", "BAMBINI"],
        start_google_maps_url: "https://www.google.com/maps/place/46.4167,13.5833/@46.4167,13.5833,14z",
        imageURL: "https://www.turismofvg.it/sites/default/files/styles/galleria_principale/public/enti/lago_del_predil.jpg",
        page_url: "https://escursionifriuli.it/escursioni_a_piedi/lago-del-predil/"
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
        tags: ["TREKKING", "STORIA"],
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
        tags: ["BAMBINI"],
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