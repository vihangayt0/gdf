const puppeteer = require('puppeteer');
 async function scrape(url){
    const browser= await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)

    const [el] = await page.$x('/html/body/div[1]/main/div/div[2]/div/div[1]/article/div/h2/a')
    const src = await el.getProperty('src')
    const srcTxt = await src.jsonValue();

    console.log({srcTxt})
 }

 scrape('https://androidwedakarayo.com/')
