const puppeteer = require("puppeteer");
const fs = require("fs");
let jsonFile = require("./gitText.json");
var getJSON = require('get-json');

var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;

const $ = require("jquery");





(async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    

    const html = fs.readFileSync("./index.html", "utf8");

    await page.setContent(html);

    await page.addStyleTag({

        path: "./style.css"


    })

    await page.pdf({

        displayHeaderFooter: true,
        preferCSSPageSize: true,
        printBackground: true,
        path: './prof.pdf'
    })

await browser.close();


})();

