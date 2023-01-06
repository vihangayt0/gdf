const puppeteer = require('puppeteer');
 async function scrape(url){
   const axios = require('axios')
   const cheerio = require('cheerio')
   
   axios.get("https://fmmods.com/download-center/mega.php").then(urlResponse => {
   const $ = cheerio.load(urlResponse.data)
   $('div.site-wrap clearfix').each((i,element)=> {
   const link = $(element)
   .find("a")
   .attr("href");
   
   console.log(link)
   })
   });
 }

 scrape('https://')
