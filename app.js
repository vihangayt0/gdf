const puppeteer = require('puppeteer')

async function sc(url){
    const broeser = await puppeteer.launch();
    const page = await broeser.newPage();
    await page.goto(url)

    const [el] = await page.$x('/html/body/div[9]/div[1]/div[1]/div[1]/div[1]/img')
    const src = await el.getProperty('src')
    const srcTxt = await src.jsonValue();
     console.log({srcTxt})

     broeser.close()
}

sc('https://www.hirunews.lk/324057//u0dc0/u0dd2/u0daf/u0dd4/u0dbd/u0dd2-/u0d9c/u0dcf/u0dc3/u0dca/u0dad/u0dd4-/u0dc0/u0dd0/u0da9/u0dd2/u0d9a/u0dd2/u0dbb/u0dd3/u0db8/u0dda-/u0dba/u0ddd/u0da2/u0db1/u0dcf/u0dc0-/u0d85/u0daf-/u0db1/u0dc0-/u0dc0/u0dc3/u0dbb/u0dda-/u0db4/u0dc5/u0db8/u0dd4-/u0d9a/u0dd0/u0db6/u0dd2/u0db1/u0da7/u0dca/u0da7/u0dd4/u0dc0/u0da7%22,%22title%22:%22/u0dc0/u0dd2/u0daf/u0dd4/u0dbd/u0dd2%20/u0d9c/u0dcf/u0dc3/u0dca/u0dad/u0dd4%20/u0dc0/u0dd0/u0da9/u0dd2/u0d9a/u0dd2/u0dbb/u0dd3/u0db8/u0dda%20/u0dba/u0ddd/u0da2/u0db1/u0dcf/u0dc0%20/u0d85/u0daf%20/u0db1/u0dc0%20/u0dc0/u0dc3/u0dbb/u0dda%20/u0db4/u0dc5/u0db8/u0dd4%20/u0d9a/u0dd0/u0db6/u0dd2/u0db1/u0da7/u0dca/u0da7/u0dd4/u0dc0/u0da7')
