const puppeteer = require('puppeteer')
async function scrapeProduct(url) {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.goto(url)

	//select by element xPath
	const [el] = await page.$x(
		'/html/body/div[2]/div[2]/div[4]/div[4]/div[1]/div[1]/div[1]/div[1]/div/div/div/img'
	)
	const src = await el.getProperty('src')
	const srcTxt = src.jsonValue()

	console.log({ srcTxt })
	browser.close()
}

scrapeProduct(
	'https://www.amazon.com/Black-Swan-Improbable-Robustness-Fragility/dp/081297381X'
)
