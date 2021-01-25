const puppeteer = require('puppeteer')
async function scrapeProduct(url) {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.goto(url)

	//select image by img xPath
	const [image] = await page.$x(
		'/html/body/div[2]/div[2]/div[4]/div[4]/div[1]/div[1]/div[1]/div[1]/div/div/div/img'
	)
	const src = await image.getProperty('src')
	const srcTxt = src.jsonValue()

	//select title by h1> span xPath
	const [title] = await page.$x(
		'/html/body/div[2]/div[2]/div[4]/div[5]/div[1]/div/h1/span[1]'
	)
	const txt = await title.getProperty('textContent')
	const rawTxt = txt.jsonValue()

	//select price by  span xPath
	const [price] = await page.$x(
		'/html/body/div[2]/div[2]/div[4]/div[5]/div[13]/div[2]/div[2]/ul/li/span/span[1]/span/a/span[2]/span'
	)
	const priceValue = await price.getProperty('textContent')
	const rawPriceValue = priceValue.jsonValue()

	console.log({ srcTxt, rawTxt, rawPriceValue })
	browser.close()
}

scrapeProduct(
	'https://www.amazon.com/Black-Swan-Improbable-Robustness-Fragility/dp/081297381X'
)
