import axios from "axios";

// console.log("process.env.NODE_ENV", process.env.NODE_ENV);
const apiWiktionary = axios.create({
  // baseURL: `https://readiteasy.com`,
  baseURL: "https://fr.wiktionary.org/w/",
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  xsrfHeaderName: "X-CSRFToken",
  xsrfCookieName: "XCSRF-TOKEN"
});

function nextUntil(elem, selector) {
  // Setup siblings array
  var siblingsHtml = document.createElement("div");
  var siblings = [elem];

  // Get the next sibling element
  elem = elem.nextElementSibling;

  // As long as a sibling exists
  while (elem) {
    // If we've reached our match, bail
    if (elem.matches(selector)) break;

    // If filtering by a selector, check if the sibling matches
    // if (filter && !elem.matches(filter)) {
    //   elem = elem.nextElementSibling;
    //   continue;
    // }

    // Otherwise, push it to the siblings array
    siblings.push(elem);

    // Get the next sibling element
    elem = elem.nextElementSibling;
  }

  for (const sibling of siblings) {
    siblingsHtml.innerHTML += sibling.outerHTML;
  }

  return siblingsHtml;
}

const fetchWordFromWiktionary = word => {
  const fetchPromise = apiWiktionary
    .get("api.php", {
      params: {
        action: "parse",
        format: "json",
        page: word,
        origin: "*"
      }
    })
    .then(({ data }) => {
      var englishWords = [];
      var parsedHtml = document.createElement("html");
      parsedHtml.innerHTML = data.parse.text["*"];

      var h2_section_starts = parsedHtml.querySelectorAll(
        "div.mw-parser-output > h2"
      );
      for (const h2_section_start of h2_section_starts) {
        if (h2_section_start.querySelectorAll("#Anglais.mw-headline").length) {
          var h2_section = nextUntil(h2_section_start, "h2");
        }
      }

      var h3_section_starts = h2_section.querySelectorAll("h3");
      for (const h3_section_start of h3_section_starts) {
        const POS = h3_section_start
          .querySelector(".mw-headline")
          .getAttribute("id");
        var h3_section = nextUntil(h3_section_start, "h3");

        // TODO : make a positive field list to include (ex : ["forme_de_verbe", "adjectif" ,..])
        if (
          !POS.includes("mologi") && //ethymologie
          !POS.includes("onciatio") && //prononciation
          !POS.includes("oir_auss") && //voir_aussi
          !POS.includes("éférenc") && //référence
          !POS.includes("agra") // anagrame
        ) {
          var englishWord = {};
          var definitions = [];
          var lemmas = [];
          h3_section.querySelectorAll("ol > li").forEach(e => {
            const ulChild = e.querySelector("ul");
            if (POS.includes("orme_de")) {
              const lemma = e.querySelector("a").getAttribute("title")
              // console.log(e.querySelector('a').getAttribute('title'))
              if (!lemmas.includes(lemma)) {
                lemmas.push(lemma);
              }
            }
            if (ulChild) {
              e.removeChild(ulChild);
            }
            definitions.push(e.innerText);
          });
          englishWord["form"] = word;
          englishWord["definitions"] = definitions;
          const pronunciation = h3_section.querySelector(".API");
          if (pronunciation) {
            englishWord["pronunciation"] = pronunciation.innerText;
          }
          englishWord["POS"] = POS;
          englishWord["lemmas"] = lemmas;
          englishWords.push(englishWord);
        }
      }
      return englishWords;
    });
  return fetchPromise;
};

export { fetchWordFromWiktionary };
