const puppeteer = require('puppeteer')

async function scrapeProduct(url) {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	page.goto(url)
}

scrapeProduct(
	'https://www.amazon.com/Black-Swan-Improbable-Robustness-Fragility/dp/081297381X'
)
