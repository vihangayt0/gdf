const axios = require('axios')
const cheerio = require('cheerio')

axios.get("https://technews.lk/tag/technology/").then(urlResponse => {
const $ = cheerio.load(urlResponse.data)
$('h2.article').each((i,element)=> {
const link = $(element)
.find("a.class")
.attr("post-card-title");

console.log(link)
})
});
