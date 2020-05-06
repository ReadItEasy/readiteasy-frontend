// import puppeteer from "puppeteer"

// async function scrapeEnglishWiktionary(url) {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()
//   page.goto(url)

//   console.log(page)
// }

// export { scrapeEnglishWiktionary }

////////

import axios from "axios";

// console.log("process.env.NODE_ENV", process.env.NODE_ENV);
const apiWiktionary = axios.create({
  // baseURL: `https://readiteasy.com`,
  baseURL: "http://fr.wiktionary.org/w/",
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  xsrfHeaderName: "X-CSRFToken",
  xsrfCookieName: "XCSRF-TOKEN"
});

export { apiWiktionary };
